import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItemStyled';

const navigationItem = ({ children, link, active }) => {
  navigationItem.defaultProps = {
    active: false
  };
  return (
    <NavigationItem active={active}>
      <a href={link}>{children}</a>
    </NavigationItem>
  );
};

navigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default navigationItem;
