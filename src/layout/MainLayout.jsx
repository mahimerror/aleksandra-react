import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar/Navbar"
import Footer from "../shared/Footer/Footer"


function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout