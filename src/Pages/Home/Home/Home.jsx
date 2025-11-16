import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Features from "../Features/Features";
import Brands from "../Brands/Brands";
import Merchant from "../Merchant/Merchant";



const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <Features />
      <Merchant/>
    </div>
  );
};

export default Home;
