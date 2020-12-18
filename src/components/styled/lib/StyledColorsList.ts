import styled from 'styled-components';

export const StyledColorsList = styled.article`
  .list-body {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: center;
    padding: 0;

    .list-item {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      height: 91px;
    }

    .time-column {
      position: absolute;
      right: 24px;
      top: 24px;
      color: white;
    }
  }
`;