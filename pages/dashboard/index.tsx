import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { frontendRoute } from '../../constants/routes';
import { useAuth } from '../../hooks/use-auth';

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (!isAuthenticated) router.push(frontendRoute.LANDING);
    (async () => {
      const response = await fetch(frontendRoute.HELLO_API, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'X-Hasura-RefreshToken': `${refreshToken}`
        }
      });
      const data = await response.json();
      console.log(data);
    })();

    return () => {};
  }, []);

  return <p>Dashboard</p>;
}

export default Dashboard;
