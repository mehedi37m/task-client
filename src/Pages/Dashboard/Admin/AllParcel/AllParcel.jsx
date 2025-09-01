import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useGetAllUsers from "../../../../hooks/useGetAllUsers";

const AllParcel = () => {
  const [allCarts, setAllCarts] = useState([]);
  const [selectedDeliveryManEmail, setSelectedDeliveryManEmail] = useState("");
  const [selectedDeliveryManName, setSelectedDeliveryManName] = useState("");
  
  console.log(selectedDeliveryManEmail);

  const [user] = useGetAllUsers();
  const deliveryMan = user.filter((man) => man.role === "deliveryMan");

  useEffect(() => {
    fetch("https://parcel-management-server-sigma.vercel.app/itemsCart")
      .then((res) => res.json())
      .then((data) => setAllCarts(data));
  }, []);

  const handleMakeManage = (user) => {
    const updatedUser = {
      ...user,
      status: "On The Way",
      deliveryMan_email: selectedDeliveryManEmail,
      deliveryMan_name: selectedDeliveryManName,
      
    };
    // console.log(updatedUser)

    fetch(`https://parcel-management-server-sigma.vercel.app/itemsCart/onTheWay/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error("Failed to update status.");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };
  const handleDeliveryManChange = (event) => {
    const { value } = event.target;
    const [deliveryManEmail, deliveryManName  ] = value.split(":");
    setSelectedDeliveryManEmail(deliveryManEmail);
    setSelectedDeliveryManName(deliveryManName);
    
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">
        {" "}
        Total : {allCarts.length}
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Users Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Booking Date</th>
                <th>Delivery Date</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Select DeliveryMan</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allCarts.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user?.delivery_date}</td>
                  <td>{user?.delivery_date}</td>
                  <td>{user.price}</td>
                  <td>
                    {user.status !== "pending" ? (
                      "On The Way"
                    ) : (
                      <button
                        onClick={() => handleMakeManage(user)}
                        className="btn btn-lg bg-orange-600"
                      >
                        <span className="text-white text-xl">manage </span>
                      </button>
                    )}
                  </td>
                  <td>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      onChange={handleDeliveryManChange}
                    >
                      <option disabled selected>
                        Manage DeliveryMan
                      </option>
                      {deliveryMan.map((deliveryMan) => (
                        <option
                          key={deliveryMan._id}
                          value={`${deliveryMan.email}:${deliveryMan.name}`}
                        >
                          {deliveryMan.name}
                        </option>
                      ))}
                    </select>
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

export default AllParcel;
