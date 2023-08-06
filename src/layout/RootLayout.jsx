import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import ArrowUp from "./arrowUp";
import ScrollToTop from "../component/scrollToTop";

export default RootLayout;

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ArrowUp />
    </>
  );
}
