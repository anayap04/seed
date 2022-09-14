// @flow
import { createGlobalStyle } from 'styled-components'
import  BebasNeue from '../assets/fonts/BebasNeue-Regular.woff'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: BebasNeue-Regular;
    src: url(${BebasNeue}) format('woff');
  }
  @font-face {
    font-family: Montserrat-Regular;
    src: url('../assets/fonts/Montserrat-Regular.ttf')format('ttf');
  }
`

export default GlobalStyles
