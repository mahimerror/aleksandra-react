import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Services from "@/pages/Services";
import AboutUs from "@/pages/AboutUs";
import Team from "./../pages/Team";
import ContactUs from "@/pages/ContactUs";

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
        element: <Team />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
