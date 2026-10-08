import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login.jsx";
import VanDetail from "../src/pages/VanDetail.jsx";
import Vans from "../src/pages/Vans.jsx";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/vandetail" element={<VanDetail />} />
              <Route path="/vans" element={<Vans />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
