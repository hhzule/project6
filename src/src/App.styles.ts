import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   html {
 height: 100%;
}
  body {
 background-size: cover;
 margin: 0;
 padding: 0 20px;
 display: flex;
 justify-content: center;
 background-color: rgba(255, 255, 255, 0.1) !important;
}
* {
    box-sizing: border-box;
    
}

`;
