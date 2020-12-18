import styled from 'styled-components';

export const StyledBottomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;

  .bottom-nav-button {
    padding: 1em 3em;
    border: 1px solid magenta;
    border-radius: 8px;
    font-weight: 700;
    background-color: white;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      background-color: magenta;
      color: white;
    }
  }
`;