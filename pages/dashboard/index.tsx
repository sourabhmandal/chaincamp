import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { frontendRoute } from '../../constants/routes';
import { useAuth } from '../../hooks/use-auth';

function Dashboard(props: any) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { cookies } = props;
  useEffect(() => {
    if (!isAuthenticated) router.push(frontendRoute.LANDING);
    return () => {};
  }, []);

  return <p>Dashboard</p>;
}

export default Dashboard;
