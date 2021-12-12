import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
