import React from 'react';
import PropTypes from 'prop-types';

import DrawerToggle from './DrawerToggleSyled';

const drawerToggle = ({ clicked }) => (
  <DrawerToggle onClick={clicked}>
    <div />
    <div />
    <div />
  </DrawerToggle>
);

drawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired
};

export default drawerToggle;
