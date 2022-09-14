import React from "react";
import "./App.css";
import { DefaultTheme } from "../src/theme/themes";
import ThemeProvider from "./theme/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";

function App() {
  const theme = DefaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
