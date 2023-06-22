import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Outlet allow set the constant Header and Footer for all pages
function Layout () {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};

export default Layout;