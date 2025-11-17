import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import RootLayout from "../Layouts/RootLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import Home from "../Pages/Home/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/services", Component: Services },
      { path: "/about-us", Component: AboutUs },
      { path: "/pricing", Component: Pricing },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () =>
          fetch("./data/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);
