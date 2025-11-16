import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Faq from "../FAQ/Faq";
import Features from "../Features/Features";
import HowItWorks from "../HowItWorks/HowItWorks";
import Merchant from "../Merchant/Merchant";
import OurServices from "../OurServices/OurServices";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <Features />
      <Merchant />
      <Review />
      <Faq/>
    </div>
  );
};

export default Home;
