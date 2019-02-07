import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from './SideDrawerStyled';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = ({ closed, open }) => (
  <Aux>
    <Backdrop show={open} clicked={closed} />
    <SideDrawer show={open}>
      <Logo height="11%" marginBottom="32px" />
      <nav>
        <NavigationItems />
      </nav>
    </SideDrawer>
  </Aux>
);

sideDrawer.propTypes = {
  closed: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default sideDrawer;
