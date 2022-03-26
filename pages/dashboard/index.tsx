import { useQuery } from '@apollo/client';
import { Box } from '@primer/react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import DashboardBaseLayout from '../../components/dashboard/DashboardBaseLayout';
import RecentActivity from '../../components/dashboard/RecentActivity';
import Reminders from '../../components/dashboard/Reminders';
import UpcomingEvents from '../../components/dashboard/UpcomingEvents';
import Loader from '../../components/Loader';
import { frontendRoute } from '../../constants/routes';
import { GET_LOGGED_USER_DETAIL } from '../../graphql/queries/queries';
import { useUser } from '@auth0/nextjs-auth0';

function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  const { loading, error, data } = useQuery();

  if (data) {
  }

  useEffect(() => {
    const userid = user?.sub?.split('|')[1];

    return () => {};
  }, []);

  return loading ? (
    <Loader />
  ) : data ? (
    <DashboardBaseLayout selectedDashboadTab={1}>
      <RecentActivity />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UpcomingEvents />
        <Reminders />
      </div>
    </DashboardBaseLayout>
  ) : (
    router.push(frontendRoute.ERROR_PAGE)
  );
}

export default Dashboard;
