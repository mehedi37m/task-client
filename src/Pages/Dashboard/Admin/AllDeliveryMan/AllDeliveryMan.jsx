
import useGetAllUsers from "../../../../hooks/useGetAllUsers";


const AllDeliveryMan = () => {

   const [user] = useGetAllUsers();
   

   const deliveryMan = user.filter(man => man.role==='deliveryMan' );
   console.log(deliveryMan)


    return (
        <div>
            <div className='flex justify-around gap-5'>
                <h1 className='text-3xl font-bold'>All User : </h1>
                <h1 className='text-3xl font-bold'>Total User : {deliveryMan.length} </h1>
            </div>

            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Number of Parcel</th>
        <th>Review</th>
      </tr>
    </thead>
    <tbody>
      
      {
        deliveryMan.map((user, index) =>  <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
       
       <td>{user.role}</td>
        
      </tr>)
      }
     
    </tbody>
  </table>
</div>
            </div>

        </div>
    );
};

export default AllDeliveryMan;