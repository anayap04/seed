// @flow
import { createGlobalStyle } from 'styled-components';
import PoppinsBold from '../assets/fonts/Poppins-Bold.woff';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.woff';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.woff';
import AcuminRPro from '../assets/fonts/Acumin-RPro.woff';
import AcuminProLight from '../assets/fonts/Acumin-ProLight.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Poppins-Bold;
    src: url(${PoppinsBold}) format('woff');
  }
  @font-face {
    font-family: Poppins-SemiBold;
    src: url(${PoppinsSemiBold}) format('woff');
  }
  @font-face {
    font-family: Poppins-Regular;
    src: url(${PoppinsRegular}) format('woff');
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
  
  }
`;

export default GlobalStyles;
