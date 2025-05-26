import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

function MainLayout() {
  const location = useLocation().pathname;
  return (
    <div>
      <ScrollRestoration />
      {location !== "/team" && <Navbar></Navbar>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
