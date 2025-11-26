import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const AssignRiders = () => {
  const [selectedParcel, setSelectedParcel] = useState();
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();
  const { data: parcels, refetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedParcel?.senderWarehouse, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&warehouse=${selectedParcel.senderWarehouse}&workStatus=available`
      );
      return res.data;
    },
  });
 
  const assignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    riderModalRef.current.show();
  };

  const handleAssignRider = (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: selectedParcel._id,
    };
    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          riderModalRef.current.close();

          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Riders has been assigned `,
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl">Assign Rider:{riders?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>CreatedAt</th>
              <th>pickup warehouse</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels?.map((parcel, ind) => (
              <tr>
                <th>{ind + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.senderWarehouse}</td>
                <td>
                  <button
                    onClick={() => assignRiderModal(parcel)}
                    className="btn bg-primary"
                  >
                    Find Riders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle "
      >
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Riders : {riders.length}</h3>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {riders.map((rider, i) => (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{rider.name}</td>
                    <td>{rider.email}</td>
                    <td>
                      <button
                        onClick={() => handleAssignRider(rider)}
                        className="btn bg-primary"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
