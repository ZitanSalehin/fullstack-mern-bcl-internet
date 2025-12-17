import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="bg-[#00719C] text-white p-3 inline-block rounded">
                <div className="font-bold text-2xl">BCL</div>
                <div className="text-xs">Online Service Company</div>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">BCL Technologies Limited</h3>
            <p className="text-sm text-gray-600 mb-4">
              Police Plaza Concord, 13th Floor (Tower-1), Plot-02,
              <br />
              Road-144, Gulshan 1, Dhaka-1212
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">QUALITY POLICY</h4>
              <p className="text-sm text-gray-600 mb-2">
                Facilitate seamless information flow through innovative ICT
                infrastructure and services.
              </p>
              <p className="text-sm text-[#00719C]">
                BCL Technologies Limited is ISO 9001:2015 Certified Company
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">ISMS POLICY</h4>
              <p className="text-sm text-gray-600">
                BCL is committed to ensuring information security by complying
                applicable ISO 27001:2022 standard & regulatory requirements and
                continually improving the{" "}
                <span className="text-[#00719C]">ISMS</span> to support our
                business objectives.
              </p>
            </div>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4">Other Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › Business
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › News & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › Our Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › Self Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › BTRC Approved Tariff
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#00719C]">
                  › FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#00719C]" />
                <div>
                  <div className="font-semibold">16335</div>
                  <div className="text-sm">09678-123123</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#00719C]" />
                <div className="text-sm">info@BCL.net</div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center transition"
              >
                <Youtube className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          Copyright © 2025 BCL Technologies Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
