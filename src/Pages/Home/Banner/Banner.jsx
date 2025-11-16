import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  const images = [banner1, banner2, banner3];
  return (
    <div className="py-10">
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {images.map((image, ind) => (
          <div key={ind} className="">
            <img className="relative" src={image} />
            <div className="absolute bottom-30 left-25 space-x-6">
              <button className="btn rounded-full bg-primary">
                Tack Your Parcel
              </button>
              <button className="btn">Be A Rider</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
