import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, mobileMenu } from "../assets/index";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeDrawer = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white relative z-20">
      {/* Top Bar */}
      <div className="hidden lg:block text-sm bg-[#00719c]">
        <div className="container mx-auto flex flex-row justify-end items-center py-2 px-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            BRTC Approved
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex flex-row justify-between items-center py-3 px-2 sm:px-0 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-16 w-44 sm:w-52 object-contain ml-2 sm:ml-4"
          />
        </div>

        {/* Menu (Desktop) */}
        <nav>
          <ul className="hidden lg:flex items-center gap-8 font-medium text-standard">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-packages">All Packages</Link>
            </li>
            <li>
              <Link to="/packages">Filtered Packages</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/ftp-server">FTP Server</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>

            {/* <Dropdown
              title="About"
              items={[
                { label: "Contact", path: "/contact" },
                { label: "Terms and Conditions", path: "/terms-condition" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Refund Policy", path: "/refund-policy" },
              ]}
            /> */}

            <li className="flex gap-5">
              <Link
                to="/"
                className="bg-secondary text-white rounded-xl px-4 py-2"
              >
                Quick Pay Bill
              </Link>
              {/* <Link
                to="/"
                className="bg-tertiary text-white rounded-xl px-4 py-2"
              >
                Bill Pay
              </Link> */}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <img
              src={mobileMenu}
              alt="menu"
              className="h-8 w-8 object-contain"
            />
          </button>
        </nav>
      </div>

      {/* ---------- Mobile Drawer & Overlay ---------- */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay => Click to Close */}
        <div
          className="absolute inset-0 bg-black/80"
          onClick={closeDrawer}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[70%] bg-white shadow-xl p-4
      transition-transform duration-700 ease-in-out
      ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header inside drawer (Logo + Close Icon) */}
          <div className="flex justify-between items-center mb-2">
            <img src={logo} alt="Logo" className="h-12 w-36 object-contain" />
            <button onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Menu */}
          <nav className="space-y-2 text-slate-700 font-semibold">
            <Link
              to="/"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              Home
            </Link>
            <Link
              to="/packages"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              Packages
            </Link>
            <Link
              to="/all-packages"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              All Packages
            </Link>
            <Link
              to="/services"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              Services
            </Link>
            <Link
              to="/ftp-server"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              FTP Server
            </Link>

            <Link
              to="/contact-us"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              Contact Us
            </Link>
            <Link
              to="/about-us"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              About Us
            </Link>
            <Link
              to="/refund-policy"
              onClick={closeDrawer}
              className="block border-b border-gray-400 pb-2"
            >
              Refund Policy
            </Link>
            <div className="border-b border-gray-400">
              <li className="flex gap-2 pb-2">
                <Link
                  to="/"
                  className="bg-orange-500 text-white text-sm rounded-3xl px-3 py-3"
                >
                  Quick Pay Bill
                </Link>
                {/* <Link
                  to="/"
                  className="bg-[#00719c] text-white text-sm rounded-3xl px-3 py-3"
                >
                  Bill Pay
                </Link> */}
              </li>
            </div>
            <p className="border-b border-gray-400 p-2">BTRC Approved Tariff</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
