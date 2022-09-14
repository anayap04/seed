// @flow
import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { DefaultTheme } from './themes'
import GlobalStyles from './GlobalStyles'

const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={DefaultTheme}>
    <GlobalStyles />
    {children}
  </StyledComponentsThemeProvider>
)

export default ThemeProvider