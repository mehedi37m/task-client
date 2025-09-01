import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import useAuth from "../../hooks/useAuth";



const CardDetails = () => {
  const allDetails = useLoaderData();
  const { id } = useParams();

  const {user} = useAuth();
  const {email, displayName} = user;
 
   
 

  const card = allDetails.find((card) => card._id == id);

  const {  name, image_url, price, description } = card;





  const handleBookParcel = (e) => {
    e.preventDefault();
    const form = e.target;

    // Access form data using the names assigned to each input
    const number = form.number.value;
    const parcel_type = form.parcel_type.value;
    const parcel_weight = form.parcel_weight.value;
    const receiver_name = form.receiver_name.value;
    const receiver_number = form.receiver_number.value;
    const delivery_address = form.delivery_address.value;
    const delivery_date = form.delivery_date.value;
    const delivery_address_latitude = form.delivery_address_latitude.value;
    const delivery_address_longitude = form.delivery_address_longitude.value;
    const price = form.price.value;

    const userData ={
      email,
      number,
      parcel_type,
      parcel_weight,
      receiver_name,
      receiver_number,
      delivery_address,
      delivery_date,
      delivery_address_latitude,
      delivery_address_longitude,
      price,
      displayName,
      image_url,
      status: 'pending'
    };


    fetch("https://parcel-management-server-sigma.vercel.app/itemsCart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(result);
      });

    // Rest of your logic...
  };






  return (
  <div className="min-h-screen md:min-h-[80vh] bg-gradient-to-br from-sky-100 via-white to-sky-200">
  <Helmet>
    <title>Fast Food || ItemsDetails</title>
  </Helmet>

  {/* Item Details Section */}
  <div className="p-6 md:p-16">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 backdrop-blur-xl bg-white/70 shadow-2xl rounded-3xl overflow-hidden border border-sky-100"
    >
      {/* Text Section */}
      <div className="p-10 flex flex-col justify-center text-center md:text-left">
        <h2 className="font-extrabold mb-5 text-sky-800 text-4xl drop-shadow-sm">
          {name}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          {description}
        </p>
        <p className="text-3xl font-bold">
          <span className="text-sky-700">Price</span> :
          <span className="text-sky-900 ml-2">${price}</span>
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="overflow-hidden"
      >
        <img
          className="h-96 w-full object-cover"
          src={image_url}
          alt="Item"
        />
      </motion.div>
    </motion.div>
  </div>

  {/* Booking Form Section */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto mb-20"
  >
    <div className="shadow-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 rounded-3xl p-10 text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-sky-400 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-300 rounded-full blur-2xl opacity-40"></div>

      <form onSubmit={handleBookParcel} className="relative z-10">
        <h3 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg">
          Book Your Parcel
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side Inputs */}
          <div className="space-y-5">
            <div className="form-control">
              <label className="label font-semibold">Email</label>
              <input type="email" defaultValue={email} className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Name</label>
              <input type="text" defaultValue={displayName} className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Phone Number</label>
              <input type="number" name="number" placeholder="Phone Number" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Parcel Type</label>
              <input type="text" name="parcel_type" placeholder="Parcel Type" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Parcel Weight</label>
              <input type="number" name="parcel_weight" placeholder="Parcel Weight" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Receiver Name</label>
              <input type="text" name="receiver_name" placeholder="Receiver Name" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="space-y-5">
            <div className="form-control">
              <label className="label font-semibold">Receiver Phone Number</label>
              <input type="number" name="receiver_number" placeholder="Receiver Phone Number" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Delivery Address</label>
              <input type="text" name="delivery_address" placeholder="Delivery Address" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Delivery Date</label>
              <input type="date" name="delivery_date" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Latitude</label>
              <input type="number" name="delivery_address_latitude" placeholder="Latitude" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Longitude</label>
              <input type="number" name="delivery_address_longitude" placeholder="Longitude" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Price</label>
              <input type="number" name="price" placeholder="Price" className="input input-bordered w-full text-black rounded-xl shadow-md" required />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-12">
          <motion.input
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-white text-sky-700 border-none px-12 py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-sky-50 transition-all"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  </motion.div>
</div>

  );
};

export default CardDetails;
