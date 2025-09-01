
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import add from '../../assets/add.json'
import useAuth from "../../hooks/useAuth";



const AddItems = () => {
  const {user} = useAuth();
  const {email} = user;

  

const handleAddItems = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image_url = form.image_url.value;
    const weight = form.weight.value;
    const origin = form.origin.value;
    const price = form.price.value;
    const organic = 'true';
    const description = form.description.value;
    const stock = form.stock.value;
    const in_stock = 'true';

   const newItems = {name, email, image_url, price, weight, organic, origin, stock, in_stock, description}



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




}




  return (
    <div className="grid justify-items-center mb-10">
      <Helmet>
                <title>Fast Food || AddItems</title>
            </Helmet>
      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
       className=" w-full max-w-sm shadow-2xl bg-base-100">
      <div>
        <Lottie style={{height:'200px'}} animationData={add} loop={true} />
        </div>
        <form onSubmit={handleAddItems} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input name="name"
              type="text"
              placeholder="Food name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name="image_url"
              type="text"
              placeholder="Image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <input name="weight"
              type="number"
              placeholder="weight"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Origin</span>
            </label>
            <input name="origin"
              type="text"
              placeholder="Category Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input name="stock"
              type="number"
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button  className="btn btn-primary">Add Product</button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default AddItems;
