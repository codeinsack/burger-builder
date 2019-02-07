import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import Wrapper from './BurgerStyled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map(() => {
        return <BurgerIngredient key={uniqid()} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <Wrapper>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Wrapper>
  );
};

burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired
};

export default burger;
