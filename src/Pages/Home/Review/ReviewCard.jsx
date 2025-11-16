import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quoteIcon from "../../../assets/reviewQuote.png";
const ReviewCard = ({ reviews }) => {
  console.log(reviews);
  return (
    <Swiper
      loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={40}
      coverflowEffect={{
        rotate: 30,
        stretch: "50%",
        depth: 200,
        modifier: 1,
        scale: 0.75,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide>
          <div className=" p-6 bg-white rounded-2xl shadow-md">
            {/* icon  */}
            <img src={quoteIcon} alt="" />

            {/* Message */}
            <p className="text-base-100 leading-relaxed mb-6">
              {review.review}
            </p>

            <hr className="border-dashed border-base-200 mb-4" />

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src={review.user_photoURL}
                alt="user image"
                className="rounded-full size-20"
              />
              <div>
                <h3 className="font-semibold text-secondary">
                  {review.userName}
                </h3>
                <p className="text-base-100 text-sm">{review.user_email}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
