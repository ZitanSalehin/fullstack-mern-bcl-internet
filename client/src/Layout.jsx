// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import ScrollToTop from "./utils/ScrollToTop";

// const PASS_KEY = "1234";

const Layout = () => {
  // const [input, setInput] = useState("");
  // const [unlocked, setUnlocked] = useState(false);

  // const handleCheck = (e) => {
  //   e.preventDefault();
  //   if (input === PASS_KEY) {
  //     setUnlocked(true);
  //   }
  // };

  return (
    <div className="relative min-h-screen">
      {/* Under Construction Overlay */}
      {/* {!unlocked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm">
          <div className="rounded-2xl bg-white px-10 py-8 text-center shadow-2xl max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              🚧 Site Under Construction
            </h1>

            <p className="text-gray-600 mb-4">
              We’re working hard to bring you something amazing.
            </p>

            <form onSubmit={handleCheck} className="space-y-3">
              <input
                type="password"
                placeholder="Enter pass key"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-gray-800 py-2 text-white hover:bg-gray-700 transition"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      )} */}

      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
