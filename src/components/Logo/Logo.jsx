import React from 'react';
import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';
import Logo from './LogoStyled';

const logo = ({ height, marginBottom }) => {
  logo.defaultProps = {
    marginBottom: ''
  };
  return (
    <Logo height={height} marginBottom={marginBottom}>
      <img src={burgerLogo} alt="MyBurger" />
    </Logo>
  );
};

logo.propTypes = {
  height: PropTypes.string.isRequired,
  marginBottom: PropTypes.string
};

export default logo;
