// @flow
import { createGlobalStyle } from 'styled-components'
import  BebasNeue from '../assets/fonts/BebasNeue-Regular.woff'
import Montserrat from '../assets/fonts/Montserrat-Regular.woff'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: BebasNeue-Regular;
    src: url(${BebasNeue}) format('woff');
  }
  @font-face {
    font-family: Montserrat-Regular;
    src: url(${Montserrat})format('woff');
  }
`

export default GlobalStyles
