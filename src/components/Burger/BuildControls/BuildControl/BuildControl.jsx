import React from 'react';
import PropTypes from 'prop-types';

import {
  BuildControl,
  ButtonLess,
  ButtonMore,
  Label
} from './BuildControlStyled';

const buildControl = ({ disabled, label, removed, added }) => {
  buildControl.defaultProps = { disabled: false };

  return (
    <BuildControl>
      <Label>{label}</Label>
      <ButtonLess onClick={removed} disabled={disabled}>
        <span>Less</span>
      </ButtonLess>
      <ButtonMore onClick={added}>More</ButtonMore>
    </BuildControl>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired
};

export default buildControl;
