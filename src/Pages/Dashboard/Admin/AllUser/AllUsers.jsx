import { useQuery } from "react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { FcDatabase } from "react-icons/fc";
import Lottie from "lottie-react";
import user from "../../../../assets/user.json";

const AllUsers = () => {
  const { setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

 

  

  const handleDelete = (user) => {
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
        fetch(`https://parcel-management-server-sigma.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setLoading(true);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-around items-center gap-5 mb-10">
        <h1 className="text-3xl font-bold">Total User : {users.length} </h1>
        <div>
          <Lottie
            style={{ height: "200px" }}
            animationData={user}
            loop={true}
          />
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table text-black font-bold w-full">
            {/* head */}
            <thead>
              <tr className="text-black text-2xl">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Admin</th>
                <th>All users</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}
                    {user.role === "user" ? (
                      <p className="text-sm text-red-500">(delivery man)</p>
                    ) : (
                      <p></p>
                    )}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <p></p>
                        
                    )}
                  </td>
                  <td>
                    {user.role === "user" ? (
                      "user"
                    ) : (
                      <p></p>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
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

export default AllUsers;
