import styled from 'styled-components';
import { variables } from '../variables';

export const Page = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-bottom: ${variables.BOT_NAV_HEIGHT};
`;
