import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

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
    <div className="h-screen md:h-[80vh]">
      <Helmet>
        <title>Fast Food || ItemsDetails</title>
      </Helmet>
      <div className=" p-20">
        <div className="card grid grid-cols-1 md:grid-cols-2 card-side  bg-base-100 shadow-xl mb-5">
          <div className="p-10 bg-slate-50 text-center">
            <h2 className=" font-bold mb-5 text-blue-900 text-3xl">{name}</h2>
            <p className="mb-5 text-blue-900">{description}</p>
            <p className="text-2xl">
              <span className="text-blue-900 font-bold">Price</span> : ${price}
            </p>

            {/* <p className='text-blue-900 font-bold pt-4'>Category : <span className='text-red-500'>{category}</span></p>
                  <p className='text-blue-900 font-bold '>Made By : <span className='text-red-500'>{made_by}</span>  </p>
                  <p className='text-blue-900 font-bold pb-4'>Food Origin : <span className='text-red-500'>{food_origin}</span>  </p> */}

           
          </div>

          <img
            className="h-96 w-full rounded-r-lg"
            src={image_url}
            alt="Movie"
          />
        </div>
      </div>


      <div className="card w-full  shadow-2xl bg-sky-500">
      <form onSubmit={handleBookParcel} className="card-body ">
        <div className="flex justify-around">
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={displayName}  className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input type="number" name="number" placeholder="Phone Number" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Parcel Type</span>
          </label>
          <input type="text" name="parcel_type" placeholder="Parcel Type" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Parcel Weight</span>
          </label>
          <input type="number" name="parcel_weight" placeholder="Parcel Weight" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Receiver Name </span>
          </label>
          <input type="text" name="receiver_name" placeholder="Receiver Name" className="input input-bordered" required /> 
        </div>
        </div>
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Receiver Phone Number</span>
          </label>
          <input type="number" name="receiver_number" placeholder="Receiver Phone Number" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Delivery Address</span>
          </label>
          <input type="text" name="delivery_address" placeholder="Delivery Address" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Delivery Date</span>
          </label>
          <input type="date" name="delivery_date" placeholder="Delivery Date" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Delivery Address Latitude</span>
          </label>
          <input type="number" name="delivery_address_latitude" placeholder="Delivery Address Latitude" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Delivery Address Longitude</span>
          </label>
          <input type="number" name="delivery_address_longitude" placeholder="Delivery Address Longitude" className="input input-bordered" required /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" placeholder="Price" className="input input-bordered" required /> 
        </div>
       </div>
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>

      </div>

 <div>

 </div>
      
    </div>
  );
};

export default CardDetails;
