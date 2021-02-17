import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

export const StyledGlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,900&display=swap");

body {
  display: flex;
  margin: 0;
  height: 100vh;
  padding: O;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  line-height: 1.8em;
  justify-content: flex-start;
  text-align: center;
  color: white;
  background: ${variables.BACKGROUND_GRADIENT};
}

#root {
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5 {
  font-style: italic;
  font-weight: 900;
}

/* p {
  font-size: 18px;
  margin: auto auto 15px;
  padding: 20px;
  max-width: 430px;
} */

.link {
  color: #fff;
  white-space: nowrap;
}

.top-menu a {
  color: white;
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
