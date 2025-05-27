import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

function MainLayout() {
  const location = useLocation().pathname;
  console.log("Current location:", location);
  return (
    <div>
      <ScrollRestoration />
      {location == "/team" ? <Navbar istrue={true} /> : <Navbar></Navbar>}
      <div className="-mt-[64px] md:-mt-[80px] lg:-mt-[96px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
