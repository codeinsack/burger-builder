import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import CheckoutSummary from './CheckoutSummaryStyled';

const checkoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued
}) => {
  return (
    <CheckoutSummary>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
    </CheckoutSummary>
  );
};

checkoutSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  checkoutCancelled: PropTypes.func.isRequired,
  checkoutContinued: PropTypes.func.isRequired
};

export default checkoutSummary;
