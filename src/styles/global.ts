import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  :root {
    --white : #FFFFFF;
    --gray-50 : #E5E5E5;
    --gray-100 : #BBB8D9;
    --gray-300: #6D6C7B;
    --gray-900: #302E45;
    --purple-500 : #4F46BB;
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-50);
    color: var(--gray-900)
  }

  body, input, button {
    font: 700 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
