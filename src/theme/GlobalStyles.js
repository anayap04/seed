// @flow
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: BebasNeue-Regular;
    src: url('../assets/fonts/BebasNeue-Regular.ttf');
  }
  
  @font-face {
    font-family: Acumin-RPro;
    src: url('../assets/fonts/Acumin-RPro.otf');
  }

  @font-face {
    font-family: Acumin-BdPro;
    src: url('../assets/fonts/Acumin-BdPro.otf');
  }

  @font-face {
    font-family: Acumin-ItPro;
    src: url('../assets/fonts/Acumin-ItPro.otf');
  }
  
  @font-face {
    font-family: Acumin-BdItPro;
    src: url('../assets/fonts/Acumin-BdItPro.otf');
  }
`

export default GlobalStyles
