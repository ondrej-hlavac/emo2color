import styled from 'styled-components';

export const BORDER_WIDTH = '4px';

export const StyledPickerButton = styled.button`
  width: calc(${BORDER_WIDTH} * 2 + 70px);
  height: 70px;
  padding: 0;
  margin: auto;
  border: ${BORDER_WIDTH} solid #000;
  background-color: #000;
`;