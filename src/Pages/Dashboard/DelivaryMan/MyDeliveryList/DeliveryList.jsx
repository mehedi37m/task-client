import { useEffect, useState } from "react";
import useGetAllUsers from "../../../../hooks/useGetAllUsers";

const DeliveryList = () => {
  const [user] = useGetAllUsers();

  const [carts, setCarts] = useState([]);
  

  useEffect(() => {
    fetch("https://parcel-management-server-sigma.vercel.app/itemsCart")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const deliveryMan = carts.filter((man) => man.deliveryMan_id == user._id);
  console.log(deliveryMan);

  return <div>
    {deliveryMan.length}


    <div>
            <div className='flex justify-around mb-10 gap-5'>
                
                <h1 className='text-3xl font-bold'>Total User : {deliveryMan.length} </h1>
            </div>

            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Book User Name</th>
        <th>Receiver Name</th>
        <th>Book User Number</th>
        <th>Requested Delivery Date</th>
        <th>Receiver phone number</th>
        <th>Receivers Address</th>
        <th>Location</th>
        <th>Action</th>
        <th>Deliver</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        deliveryMan.map((user, index) =>  <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.displayName}</td>
        <td>{user.receiver_name}</td>
        <td>{user.number}</td>
        <td>{user.delivery_date}</td>
        <td>{user.receiver_number}</td>
        <td>{user.delivery_address}</td>
        <td>{user.delivery_address_latitude} 
        <br />
        {user.delivery_address_longitude}
        </td>
        <td><button className="btn">Cancel</button></td>
        <td><button className="btn">Deliver</button></td>
       
       
      
      </tr>)
      }
     
    </tbody>
  </table>
</div>
            </div>

        </div>


    </div>;
};

export default DeliveryList;
