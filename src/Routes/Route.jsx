import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import RootLayout from "../Layouts/RootLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import BeARider from "../Pages/BeARider/BeARider";
import Coverage from "../Pages/Coverage/Coverage";
import MyParcels from "../Pages/Dashboard/My parcels/Myparcels";


import Home from "../Pages/Home/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import SendParcel from "../Pages/SendParcel/SendParcel";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/services", Component: Services },
      { path: "/about-us", Component: AboutUs },
      {
        path: "/send-parcel",
        Component: SendParcel,

        loader: () =>
          fetch("./data/serviceCenters.json").then((res) => res.json()),
      },
      { path: "/be-a-rider", Component: BeARider },

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
    ],
  },
]);
