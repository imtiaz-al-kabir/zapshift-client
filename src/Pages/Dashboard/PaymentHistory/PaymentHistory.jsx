import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="container mx-auto py-10">
      <h2>payment history {payments.length} </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tracking Number</th>
              <th>Payment info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, ind) => (
              <tr key={ind}>
                <th>{ind+1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.trackingId}</td>
                <td>{payment.amount} ({payment.paymentStatus})</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
