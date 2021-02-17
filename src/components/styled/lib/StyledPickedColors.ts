import styled from 'styled-components';

export const StyledPickedColors = styled.article`
  position: relative;
  height: 30vh;
  width: 100%;
  margin-bottom: 0;
  background-color: white;
  flex-grow: 1;

  .step {
    position: absolute;
    font-weight: 900;
    width: 270px;
    top: 30px;
    left: calc(50% - 135px);
    color: black;
    text-align: center;
    letter-spacing: 0.3em;
    word-break: break-all;
  }
`;
