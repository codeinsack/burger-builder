import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon
} from './BurgerIngredientStyled';

class BurgerIngredient extends Component {
  render() {
    const { type } = this.props;

    const ingredientComponents = {
      'bread-bottom': <BreadBottom />,
      'bread-top': (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      ),
      meat: <Meat />,
      cheese: <Cheese />,
      salad: <Salad />,
      bacon: <Bacon />
    };

    return ingredientComponents[type] || null;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
