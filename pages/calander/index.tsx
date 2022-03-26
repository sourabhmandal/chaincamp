import React from 'react';
import DashboardBaseLayout from '../../components/dashboard/DashboardBaseLayout';
import Workspace from '../../components/Workspace';
import CalanderWidget from './calander';

function Calander() {
  return (
    <Workspace selectedSidebarTab={3} className="p-2">
      <CalanderWidget />
    </Workspace>
  );
}

export default Calander;
