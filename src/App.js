import React, { useEffect, useState } from "react";
import "./App.css";
import { darkTheme, lightTheme } from "../src/theme/themes/DefaultTheme/colors";
import ThemeProvider from "./theme/ThemeProvider";
import { useDarkMode } from "./utils/useDarkMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/screens/home/Home";
import LoginPage from "./app/screens/login";
import Profile from "./app/screens/profile";
import GlobalStyles from "./theme/GlobalStyles";
import ProjectsMain from "./app/screens/projects/Projects";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const [mode, setMode] = useState();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        localStorage.setItem('themeMode');
        setMode(colorScheme);
      });
  }, []);

  return (
    <ThemeProvider theme={themeMode || mode}>
      <GlobalStyles theme={themeMode || mode} />
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
          <Route
            path="/register"
            element={
              <LoginPage
                themeToggler={themeToggler}
                theme={themeMode}
                mode={theme}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                themeToggler={themeToggler}
                theme={themeMode}
                mode={theme}
              />
            }
          ></Route>
             <Route
            path="/projects"
            element={
              <ProjectsMain
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
