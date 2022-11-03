// @flow
import { createGlobalStyle } from 'styled-components'
import  BebasNeue from '../assets/fonts/BebasNeue-Regular.woff'
import Montserrat from '../assets/fonts/Montserrat-Regular.woff'
import Bitter from '../assets/fonts/Bitter-SemiBold.woff'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: BebasNeue-Regular;
    src: url(${BebasNeue}) format('woff');
  }
  @font-face {
    font-family: Montserrat-Regular;
    src: url(${Montserrat})format('woff');
  }
  @font-face {
    font-family: Bitter-SemiBold;
    src: url(${Bitter})format('woff');

  }

  html: {
    background-color: ${props => props.theme.background}
  }
`

export default GlobalStyles
