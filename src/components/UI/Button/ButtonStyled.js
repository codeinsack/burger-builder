import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: ${props => {
    if (props.btnType === 'Danger') {
      return '#944317';
    }
    if (props.btnType === 'Success') {
      return '#5c9210';
    }
    return '';
  }};

  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

export default Button;
