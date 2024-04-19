import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
