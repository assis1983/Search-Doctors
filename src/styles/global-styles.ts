import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

 *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);
    font-family: "poppins";

  }

`;
