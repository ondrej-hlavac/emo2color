import styled from 'styled-components';
import { variables } from '../variables';
import { Page } from '../wrappers/Page';

export const StyledExercisePage = styled(Page)`
  justify-content: stretch;
  padding-bottom: ${variables.BOT_NAV_HEIGHT};

  @media screen and (max-width: 765px) {
    h1 {
      font-size: 25px;
      margin: 0.5em 0 0.5em 3em;
      text-align: left;
    }
  }

  .color-picker-palette {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    height: 38vh;
    padding: 20px 10px;
    background-color: black;
  }

  @media screen and (min-width: 560px) {
    .color-picker-palette {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: 50vh;
    }
  }
`;
