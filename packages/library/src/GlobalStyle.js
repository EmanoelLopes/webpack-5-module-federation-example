import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* others styles here */
  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    h1 {
      font-size: 24px;
      margin-bottom: 1rem; 
    }

    div {
      margin-bottom: 16px;
    }
  }
`;