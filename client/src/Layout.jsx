import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
