import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login.jsx";
import VanDetail from "../src/pages/VanDetail.jsx";
import Vans from "../src/pages/Vans.jsx";
import Layout from "../src/components/Layout.jsx";
import "./server.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/vans/:id" element={<VanDetail />} />
              <Route path="/vans" element={<Vans />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
