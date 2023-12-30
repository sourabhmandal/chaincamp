import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
import jwt from 'jsonwebtoken';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      },
      checks: 'none'
    })
  ],
  jwt: {
    encode: async ({ secret, token }) => {
      const result = await fetch(
        'https://guiding-gibbon-63.hasura.app/api/rest/get_user_by_email',
        {
          method: 'POST',
          //@ts-ignore
          headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
          },
          body: JSON.stringify({
            email: token?.email
          })
        }
      );
      let userdata = await result.json();
      console.log(
        `Creating JWT :: fetch user data by email :: ${userdata.users[0].id}, ${userdata.users[0].name}, ${userdata.users[0].email}`
      );

      const jwtClaims = {
        sub: token?.sub!,
        name: token?.name,
        email: token?.email,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        hasura: {
          claims: {
            'x-hasura-allowed-roles': ['user', 'anonymous', 'master'],
            'x-hasura-default-role': 'user',
            'x-hasura-role': userdata.users[0].role,
            'x-hasura-user-id': userdata.users[0].id.toString()
          }
        }
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256' });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      //@ts-ignore
      const decodedToken = jwt.verify(token, secret, {
        algorithms: ['HS256']
      });
      return decodedToken;
    }
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        const result = await fetch(
          'https://guiding-gibbon-63.hasura.app/api/rest/create_user',
          {
            method: 'POST',
            //@ts-ignore
            headers: {
              'content-type': 'application/json',
              'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
            },
            body: JSON.stringify({
              email: user?.email,
              name: user?.name,
              picture_url: user?.image,
              role: 'user'
            })
          }
        );
        if (!result.ok) return false;
        let userdata = await result.json();
        console.log(
          'Added user to database :: ',
          JSON.stringify(userdata.insert_users_one)
        );
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
});
