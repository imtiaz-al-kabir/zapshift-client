import "swiper/css";
import amazon from "../../../assets/brands/amazon.png";
import amazonV from "../../../assets/brands/amazon_vector.png";

import { Swiper, SwiperSlide } from "swiper/react";
import casio from "../../../assets/brands/casio.png";
import monster from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandLogo = [
    amazon,
    casio,
    monster,
    star,
    randstad,
    starPeople,
    amazonV,
  ];
  return (
    <div className="pb-10 max-w-6xl mx-auto">
      <h1 className="text-secondary text-2xl font-bold text-center pb-20 pt-10">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
      >
        {brandLogo.map((logo) => (
          <SwiperSlide>
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
