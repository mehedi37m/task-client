import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const MyBooking = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const {displayName, photoURL} = user;

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/itemsCart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleRatingChange = (event) => {
    const newRating = Math.min(
      5,
      Math.max(1, parseInt(event.target.value, 10))
    );
    setRating(newRating);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const submitReview = (deliveryManName, deliveryManEmail) => {
    const reviewItem = {
        rating,
        description,
        deliveryManName, 
        deliveryManEmail, 
        displayName,
        photoURL 
      };

    fetch("https://parcel-management-server-sigma.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "user added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Items: {cart.length}</h2>

      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>DeliveryMan Name</th>
              <th>Action</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td>{item.deliveryMan_name}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
                <td>
                  <div>
                        <div>
                         <p>Rating</p>
                          <input className="p-3"
                          placeholder="type rating"
                            type="number"
                            id="rating"
                            min="1"
                            max="5"
                            value={rating}
                            onChange={handleRatingChange}
                          />
                        </div>
                        <div>
                         
                          <textarea
                          placeholder="description"
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                          />
                        </div>
                        <button className="btn" onClick={() => submitReview(item.deliveryMan_name, item.deliveryMan_email)}>Submit Review</button>
                      </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between my-8">
        <h2 className="text-4xl font-bold">Total Price: ${totalPrice}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
