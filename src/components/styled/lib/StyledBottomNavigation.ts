import styled from 'styled-components';
import { variables } from '../variables';

export const StyledBottomNavigation = styled.nav`
  position: fixed;
  display: flex;
  align-items: space-between;
  bottom: 0;
  left: 0;
  padding: 1em;
  width: 100%;
  height: ${variables.BOT_NAV_HEIGHT}px;
  background: ${variables.BACKGROUND_GRADIENT}
`;