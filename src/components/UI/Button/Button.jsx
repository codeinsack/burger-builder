import React from 'react';
import PropTypes from 'prop-types';

import Button from './ButtonStyled';

const button = ({ children, clicked, btnType }) => (
  <Button btnType={btnType} onClick={clicked}>
    {children}
  </Button>
);

button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired
};

export default button;
