import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Main = styled.main`
  margin-top: 72px;
`;

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const { showSideDrawer } = this.state;
    const { children } = this.props;
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Main>{children}</Main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Layout;
