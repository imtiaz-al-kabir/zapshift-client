import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <HowItWorks/>
      <OurServices/>
    </div>
  );
};

export default Home;
