// @flow
import { createGlobalStyle } from 'styled-components'
import  AcuminBdPro from '../assets/fonts/Acumin-BdPro.woff'
import AcuminRPro from '../assets/fonts/Acumin-RPro.woff'
import AcuminProLight from '../assets/fonts/Acumin-ProLight.woff'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: AcuminBdPro;
    src: url(${AcuminBdPro}) format('woff');
  }
  @font-face {
    font-family: Acumin-RPro;
    src: url(${AcuminRPro})format('woff');
  }
  @font-face {
    font-family:Acumin-ProLight;
    src: url(${AcuminProLight})format('woff');
  }

  body {
    width: 100vw;
    background-color: ${props => props.theme.background}
  }
`

export default GlobalStyles
