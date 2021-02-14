import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
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
  text-align: center;
  
  &:hover {
    background-color: tomato;
    color: #ffffff;
  }

  /* 
  button:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    mix-blend-mode: overlay;
  } */

  /* &:hover span {
    color: tomato;
  } */
`;