import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login.jsx";
import VanDetail from "../src/pages/VanDetail.jsx";
import Vans from "../src/pages/Vans.jsx";
import Dashboard from "../src/pages/Host/Dashboard.jsx";
import Income from "../src/pages/Host/Income.jsx";
import Reviews from "../src/pages/Host/Reviews.jsx";
import MainLayout from "../src/layouts/MainLayout.jsx";
import HostLayout from "../src/layouts/HostLayout.jsx";
import "./server.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/vans/:id" element={<VanDetail />} />
              <Route path="/vans" element={<Vans />} />
              <Route element={<HostLayout />}>
                <Route path="/host" element={<Dashboard />} />
                <Route path="/host/income" element={<Income />} />
                <Route path="/host/reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
