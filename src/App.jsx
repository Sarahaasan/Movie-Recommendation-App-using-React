import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light"); // Example state for theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
