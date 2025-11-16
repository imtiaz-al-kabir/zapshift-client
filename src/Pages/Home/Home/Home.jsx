import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <HowItWorks/>
      <OurServices/>
      <Brands/>
    </div>
  );
};

export default Home;
