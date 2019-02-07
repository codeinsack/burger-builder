import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, DesktopOnly } from './ToolbarStyled';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ({ drawerToggleClicked }) => {
  return (
    <Toolbar>
      <DrawerToggle clicked={drawerToggleClicked} />
      <Logo height="80%" />
      <DesktopOnly>
        <NavigationItems />
      </DesktopOnly>
    </Toolbar>
  );
};

toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired
};

export default toolbar;
