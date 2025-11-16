import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="bg-[#eaeced]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
