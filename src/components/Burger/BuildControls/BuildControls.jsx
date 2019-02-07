import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, OrderButton } from './BuildControlsStyled';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({
  price,
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  ordered
}) => {
  return (
    <Wrapper>
      <p>
        <span>Current Price: </span>
        <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => ingredientAdded(ctrl.type)}
            removed={() => ingredientRemoved(ctrl.type)}
            disabled={disabled[ctrl.type]}
          />
        );
      })}
      <OrderButton disabled={!purchasable} onClick={ordered}>
        ORDER NOW
      </OrderButton>
    </Wrapper>
  );
};

buildControls.propTypes = {
  price: PropTypes.number.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.objectOf(PropTypes.bool).isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
};

export default buildControls;
