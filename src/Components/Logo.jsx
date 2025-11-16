import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end ">
      <img src={logo} alt="logo" />
      <h1 className="text-2xl font-bold -ms-3">Zap<span className="text-primary">S</span>hift</h1>
    </div>
  );
};

export default Logo;
