import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();

  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => console.log(res.data));
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h2 className="text-4xl">Payment Successful</h2>
    </div>
  );
};

export default PaymentSuccess;
