import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeUser = (user) => {
    const roleInfo = {
      role: "admin",
    };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} marked as an admin`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  const handleRemoveUser = (user) => {
    const roleInfo = {
      role: "user",
    };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} remove from  admin`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl py-4">Manage Users ({users.length})</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, ind) => (
              <tr>
                <th>
                  <label>{ind + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} alt="image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  <br />
                </td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                    onClick={()=>handleRemoveUser(user)}
                    className="btn btn-square btn-sm bg-red-500">
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeUser(user);
                      }}
                      className="btn btn-square btn-sm bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
