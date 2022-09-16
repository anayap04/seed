import React from "react";
import "./App.css";
import { darkTheme, lightTheme } from "../src/theme/themes/DefaultTheme/colors";
import ThemeProvider from "./theme/ThemeProvider";
import { useDarkMode } from "./utils/useDarkMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/screens/home/Home";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                themeToggler={themeToggler}
                theme={themeMode}
                mode={theme}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
