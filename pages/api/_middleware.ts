import { NextRequest, NextResponse } from 'next/server';
import { backendRoute, frontendRoute } from '../../constants/routes';
import { verifyJWT } from '../../utils/jwt';

export async function middleware(request: NextRequest) {
  const accessToken = request.headers.get('Authorization')?.substring(7);
  const refreshToken = request.headers.get('X-Hasura-RefreshToken');

  if (!accessToken && !refreshToken) {
    // Both tokens are expired, redirect to unauthorized page
    console.log('ACCESS TOKEN OR REFRESH TOKEN NOT FOUND');
    return NextResponse.redirect(frontendRoute.LANDING);
  }

  // Check if accessToken is active
  // if valid pass the request
  if (verifyJWT(accessToken!)) {
    // set hasura header
    console.log('access token valid');
    return NextResponse.next().headers.set('', '');
  }
  // Check if refreshToken is active
  else if (verifyJWT(refreshToken!)) {
    console.log('access token invalid but refresh token is valid');
    try {
      console.log('calling refresh token api');
      // Try to refresh the accessTokens
      const res = await fetch(backendRoute.REFRESH_TOKEN, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          accessToken: accessToken,
          refreshToken: refreshToken
        })
      });

      // Set new token cookies and forward request
      const result = JSON.parse(await res.text());
      // setCookies('accessToken', result.data.accessToken);
      // setCookies('refreshToken', result.data.accessToken);

      // set hasura header
      return NextResponse.next()
        .cookie('accessToken', result.data.accessToken)
        .cookie('refreshToken', result.data.refreshToken);
    } catch (err) {
      // Log error, redirect to unauthorized page
      console.log('ERROR :: jump into catch block');
      console.error(err);
      return new Response(JSON.stringify({ status: false, data: err }));
    }
  }
  console.log('Both token expired');
  // Both tokens are expired, redirect to unauthorized page
  return NextResponse.redirect(frontendRoute.LANDING);
}
