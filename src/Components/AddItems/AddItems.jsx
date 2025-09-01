import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import add from "../../assets/add.json";
import useAuth from "../../hooks/useAuth";

const AddItems = () => {
  const { user } = useAuth();
  const { email } = user;

  const handleAddItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image_url = form.image_url.value;
    const weight = form.weight.value;
    const origin = form.origin.value;
    const price = form.price.value;
    const organic = "true";
    const description = form.description.value;
    const stock = form.stock.value;
    const in_stock = "true";

    const newItems = {
      name,
      email,
      image_url,
      price,
      weight,
      organic,
      origin,
      stock,
      in_stock,
      description,
    };

    fetch("https://parcel-management-server-sigma.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItems),
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
    <div className="grid justify-items-center mb-10">
      <Helmet>
        <title>Fast Food || AddItems</title>
      </Helmet>
      <div
  data-aos="fade-left"
  data-aos-anchor="#example-anchor"
  data-aos-offset="500"
  data-aos-duration="800"
  className="w-full max-w-md mx-auto shadow-2xl rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
>
  {/* Lottie Animation */}
  <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
    <Lottie style={{ height: "180px" }} animationData={add} loop={true} />
  </div>

  {/* Form */}
  <form
    onSubmit={handleAddItems}
    className="card-body p-6 space-y-5 animate-fadeIn"
  >
    {/* Food Name */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">
          Food Name
        </span>
      </label>
      <input
        name="name"
        type="text"
        placeholder="Food name"
        className="input input-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      />
    </div>

    {/* Image */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">Image</span>
      </label>
      <input
        name="image_url"
        type="text"
        placeholder="Image URL"
        className="input input-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      />
    </div>

    {/* Weight */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">Weight</span>
      </label>
      <input
        name="weight"
        type="number"
        placeholder="Weight"
        className="input input-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      />
    </div>

    {/* Origin */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">Origin</span>
      </label>
      <input
        name="origin"
        type="text"
        placeholder="Category Name"
        className="input input-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      />
    </div>

    {/* Price */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">Price</span>
      </label>
      <input
        name="price"
        type="number"
        placeholder="Price"
        className="input input-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      />
    </div>

    {/* Stock */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">Stock</span>
      </label>
      <input
        name="stock"
        type="number"
        placeholder="Quantity"
        className="input input-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      />
    </div>

    {/* Description */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-gray-800">
          Description
        </span>
      </label>
      <textarea
        name="description"
        placeholder="Write a short description..."
        className="textarea textarea-bordered rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        required
      ></textarea>
    </div>

    {/* Button */}
    <div className="form-control mt-6">
      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
        ➕ Add Product
      </button>
    </div>
  </form>
</div>
    </div>
  );
};

export default AddItems;
