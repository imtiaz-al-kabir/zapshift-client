import { Outlet } from "react-router";
import Logo from "../Components/Logo";
import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-10">
        <Logo />

        <div className="min-h-screen flex items-center container mx-auto">
          <div className="flex-1 flex justify-center items-center">
            <Outlet />
          </div>
          <div className="flex-1 bg-[#fafdf0] min-h-screen w-full flex items-center justify-center">
            <img src={authImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
