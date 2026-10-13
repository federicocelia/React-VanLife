import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login.jsx";
import VanDetail from "../src/pages/VanDetail.jsx";
import Vans from "../src/pages/Vans.jsx";
import Dashboard from "../src/pages/Host/Dashboard.jsx";
import Income from "../src/pages/Host/Income.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";

import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
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
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetail />} />

              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
