import styled from 'styled-components';

const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  nav {
    height: 100%;
  }
`;

const DesktopOnly = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;

export { Toolbar, DesktopOnly };
