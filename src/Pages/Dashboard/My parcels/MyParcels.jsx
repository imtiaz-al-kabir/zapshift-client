import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineSearchCircle } from "react-icons/hi";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res);

          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.assign(res.data.url);
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold pb-5"> My Parcels: {parcels.length}</h1>

      <div className="bg-white rounded-2xl">
        <div className="overflow-x-auto px-5">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Cost</th>
                <th>Payment</th>
                <th>Delivery Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {parcels.map((parcel, i) => (
                <tr key={parcel._id}>
                  <th>{i + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.cost} taka</td>
                  <td>
                    {parcel.paymentStatus === "paid" ? (
                      <span className="text-green-400">Paid</span>
                    ) : (
                      <button
                        onClick={() => handlePayment(parcel)}
                        className="btn btn-sm bg-primary "
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                  <td>{parcel.deliveryStatus}</td>
                  <td>
                    <button className="btn  btn-square bg-white hover:bg-primary">
                      <FaEdit size={20} />{" "}
                    </button>
                    <button className="btn mx-5 btn-square bg-white hover:bg-primary">
                      <HiOutlineSearchCircle />{" "}
                    </button>

                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn  btn-square bg-white hover:bg-primary"
                    >
                      <FaRegTrashAlt />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
