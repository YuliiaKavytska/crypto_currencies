import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: 100%;
  }
`
