import React from 'react';
import Workspace from '../../components/Workspace';
import ThemePage from './themes';

function ThemeLayout() {
  return (
    <Workspace
      selectedSidebarTab={4}
      className="p-2">
      <ThemePage />
    </Workspace>
  );
}

export default ThemeLayout;
