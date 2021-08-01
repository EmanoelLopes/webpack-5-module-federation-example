import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* others styles here */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;
