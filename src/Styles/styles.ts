import { createGlobalStyle } from 'styled-components'
import cores from './colors'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  .status-fetch {
    text-align: center;
    margin-bottom: 16px;
  }
`
