import { createGlobalStyle } from 'styled-components'
import papyrus from '../images/papyrus.png'

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${papyrus}) repeat;
    background-size: 20%;
  }
`

export default GlobalStyle
