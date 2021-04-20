import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
 margin: 0;
 padding: 1rem;
 font-family: 'Montserrat', sans-serif;
 color: rgba(29, 42, 115, 1)
}

h1 {
    
}
`;

export default GlobalStyle;
