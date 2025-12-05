import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../store";

import AdminRoute from "../src/components/AdminRoute";
import PackageCards from "../src/components/PackageCards";

// Layout + Pages

import AboutUs from "../src/pages/AboutUs";
import AllPackages from "../src/pages/AllPackages";
import ContactUs from "../src/pages/ContactUs";
import FtpServer from "../src/pages/FtpServer";
import OurPolicy from "../src/pages/OurPolicy";

import RefundPolicy from "../src/pages/RefundPolicy";
import ServicePage from "../src/pages/ServicePage";
import Services from "../src/pages/Services";
import SpeedCheckPage from "../src/pages/SpeedCheckPage";

// Auth + Admin
import Dashboard from "../src/dashboard/Dashboard";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Layout from "./Layout";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Wrapper */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="package-details" element={<ServicePage />} />

            <Route path="packages" element={<PackageCards />} />
            <Route path="all-packages" element={<AllPackages />} />

            <Route path="ftp-server" element={<FtpServer />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="privacy-policy" element={<OurPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="speed-check" element={<SpeedCheckPage />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Admin Route */}
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
