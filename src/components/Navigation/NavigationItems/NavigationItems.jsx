import React from 'react';

import NavigationItems from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <NavigationItems>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </NavigationItems>
);

export default navigationItems;
