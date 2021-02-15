import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  width: 230px;
  font-size: 15px;
  border: 2px solid #ffffff;
  border-radius: 25px;
  background-color: transparent;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  &:hover {
    background-color: tomato;
  }
`;
