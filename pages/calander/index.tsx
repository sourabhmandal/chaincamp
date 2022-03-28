import React from 'react';
import Workspace from '../../components/Workspace';
import CalanderWidget from './calander';

function Calander() {
  return (
    <Workspace
      selectedSidebarTab={3}
      className="p-2">
      <CalanderWidget />
    </Workspace>
  );
}

export default Calander;
