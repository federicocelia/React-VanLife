import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login.jsx";
import VanDetail from "../src/pages/VanDetail.jsx";
import Vans from "../src/pages/Vans.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/vandetail" element={<VanDetail></VanDetail>} />
          <Route path="/vans" element={<Vans></Vans>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
