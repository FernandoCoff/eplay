import styled, { createGlobalStyle } from 'styled-components'

export const color = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  green: '#10ac84'
}

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif, system-ui;
  }

  body{
    background-color: ${color.black};
  }
`

export default GlobalStyle
