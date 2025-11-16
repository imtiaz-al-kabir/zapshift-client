import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Pricing from "../Pages/Pricing/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/services", Component: Services },
      { path: "/about-us", Component: AboutUs },
      { path: "/pricing", Component: Pricing },
    ],
  },
]);
