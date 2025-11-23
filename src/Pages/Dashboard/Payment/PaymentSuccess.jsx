import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();

  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then((res) =>
      setPaymentInfo({
        transactionId: res.data.transactionId,
        trackingId: res.data.trackingId,
      })
    );
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h2 className="text-4xl">Payment Successful</h2>
      <p>Your transactionId = {paymentInfo.transactionId}</p>
      <p>Your trackingId = {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
