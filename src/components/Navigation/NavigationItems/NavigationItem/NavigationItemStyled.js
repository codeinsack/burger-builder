import styled from 'styled-components';

const NavigationItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    color: ${props => (props.active ? '#40a4c8' : '')};

    :hover,
    :active,
    .active {
      color: #40a4c8;
    }
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;

      background-color: ${props => (props.active ? '#8f5c2c' : '')};
      border-bottom: ${props => (props.active ? '4px solid #40a4c8' : '')};
      color: ${props => (props.active ? 'white' : '')};

      :hover,
      :active,
      .active {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
      }
    }
  }
`;

export default NavigationItem;
