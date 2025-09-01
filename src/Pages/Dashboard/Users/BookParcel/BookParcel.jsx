
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";


const BookParcel = () => {
    


      const handleBookParcel = (e) =>{
        e.preventDefault();
        const form = e.target;
        // const name = user.displayName;
        // const email = user.email;
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


        const bookParcel = { number, parcel_type, parcel_weight, receiver_name, receiver_number, delivery_address, delivery_date, delivery_address_latitude, delivery_address_longitude, price}

        console.table(bookParcel)

      }




    return (
        <div>

            <SectionTitle heading={'Book Now'} subHeading={'Add'}></SectionTitle>


      <div className="card w-full  shadow-2xl bg-base-100 ">
      <form onChange={handleBookParcel} className="card-body ">
        <div className="flex justify-around">
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"   className="input input-bordered" required /> 
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


          
        </div>
    );
};

export default BookParcel;