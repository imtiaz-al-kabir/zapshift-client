import axios from "axios";
import { useEffect, useState } from "react";
import customer from "../../../assets/customer-top.png";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("./data/reviews.json").then((data) => setReviews(data.data));
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-3">
        <img src={customer} alt="customer logo" />
        <h1 className="font-bold text-secondary text-2xl">
          What our customers are sayings
        </h1>
        <p className="text-base-100 text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="max-w-6xl mx-auto py-8">
        {
          <ReviewCard reviews={reviews} />
        }
      </div>
    </div>
  );
};

export default Review;
