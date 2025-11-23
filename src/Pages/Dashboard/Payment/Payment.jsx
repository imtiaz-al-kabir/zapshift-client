import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Loading from "../../../Components/Loading";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { parcelId } = useParams();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
 

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
  };
  return (
    <div className="container mx-auto py-10">
      <h1>
        please Pay ${parcel.cost} for: {parcel.parcelName}
      </h1>
      <button onClick={handlePayment} className="btn bg-primary">
        pay
      </button>
    </div>
  );
};

export default Payment;
