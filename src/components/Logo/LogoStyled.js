import styled from 'styled-components';

const Logo = styled.div`
  background-color: white;
  padding: 8px;
  height: ${props => props.height || '100%'};
  margin-bottom: ${props => props.marginBottom || ''};
  box-sizing: border-box;
  border-radius: 5px;

  img {
    height: 100%;
  }
`;

export default Logo;
