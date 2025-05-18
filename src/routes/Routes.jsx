import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Services from "@/pages/Services";
import AboutUs from "@/pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "team",
        element: <Home></Home>,
      },
      {
        path: "contact-us",
        element: <Home></Home>,
      },
    ],
  },
]);
