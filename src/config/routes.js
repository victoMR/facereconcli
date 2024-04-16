import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";  
import Charts from "../components/charts";


export default function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  );
}
