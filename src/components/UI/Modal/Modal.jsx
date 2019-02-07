import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './ModalStyled';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  static defaultProps = {
    children: null
  };

  shouldComponentUpdate(nextProps) {
    const { show, children } = this.props;
    return nextProps.show !== show || nextProps.children !== children;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    const { show, children, modalClosed } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <Wrapper show={show}>{children}</Wrapper>
      </Aux>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element,
  modalClosed: PropTypes.func.isRequired
};

export default Modal;
