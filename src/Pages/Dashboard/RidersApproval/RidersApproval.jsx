import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { HiOutlineUserRemove } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const RidersApproval = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = {
      status: status,
      email:rider.email
    };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">
        Riders Pending Approval :{riders.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Region</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {riders.map((rider, ind) => (
              <tr key={rider._id}>
                <th>{ind + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.region}</td>
                <td className="space-x-5">
                  <button
                    className="btn btn-square btn-sm bg-white"
                    
                  >
                    {" "}
                    <FaEye />{" "}
                  </button>
                  <button
                    className="btn btn-square btn-sm bg-white"
                    onClick={() => handleApproval(rider)}
                  >
                    {" "}
                    <FaUserCheck />{" "}
                  </button>
                  <button
                    className="btn btn-square btn-sm bg-white"
                    onClick={() => handleRejection(rider)}
                  >
                    {" "}
                    <HiOutlineUserRemove />{" "}
                  </button>
                  <button className="btn btn-square btn-sm bg-white">
                    {" "}
                    <FaTrashAlt />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RidersApproval;
