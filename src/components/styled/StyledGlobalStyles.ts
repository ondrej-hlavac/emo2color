import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
}

::-moz-selection {
  /* Code for Firefox */
  color: red;
  background: yellow;
}

::selection {
  color: red;
  background: yellow;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,900&display=swap");

body {
  display: flex;
  margin: 0;
  height: 100vh;
  padding: O;
  flex-direction: column;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  line-height: 1.8em;
  text-align: center;
  color: white;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

h1,
h2,
h3,
h4,
h5 {
  font-style: italic;
  font-weight: 900;
}

h1 {
  font-size: 55px;
  line-height: 100px;
  text-shadow: 7px 7px 0 tomato;
  margin-bottom: 50px;
}

@media screen and (min-width: 560px) {
  h1 {
    font-size: 83px;
  }
}

p {
  font-size: 18px;
  margin: auto auto 15px;
  padding: 20px;
  max-width: 430px;
}

.link {
  color: #fff;
  white-space: nowrap;
}

a.btn {
  position: relative;
  display: inline-block;
  margin: 20px auto;
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
}

a.btn:hover {
  background-color: tomato;
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

button:hover span {
  color: tomato;
}

.top-menu a {
  color: white;
}

.color-picker-palette {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 50vh;
  padding: 10% 13%;
  background-color: black;
}

@media screen and (min-width: 560px) {
  .color-picker-palette {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

.how-to-wrapper {
  padding: 0 30px;
}

.how-to-wrapper h1 {
  line-height: 60px;
}

/* TODO: firefox & edge workaround */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9acd32;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: yellowgreen;
}

::-webkit-scrollbar-thumb {
  background-color: coral;
}

`;