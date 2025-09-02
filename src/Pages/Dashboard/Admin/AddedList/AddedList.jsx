import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const AddedList = () => {
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://parcel-management-server-sigma.vercel.app/myAddedItems/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [loading]);

  const handleDelete = (_id) => {
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
        fetch(
          `https://parcel-management-server-sigma.vercel.app/items/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    <div className="h-screen md:h-[80vh]">
      <SectionTitle heading={"All Items"} subHeading={"new"}></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td></td>
              <th>Image</th>
              <th>Food Name</th>

              <th>Price</th>

              <th>Stock</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={food.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{food.name}</div>
                    </div>
                  </div>
                </td>
                <td>{food.stock}</td>
                <td>{food.price}</td>
                <td>
                  <Link to={`/updateItems/${food._id}`}>
                    {" "}
                    <button className="btn btn-primary">update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-accent btn-xs"
                  >
                    X
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

export default AddedList;
