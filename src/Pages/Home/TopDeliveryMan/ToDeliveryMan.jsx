import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import Marquee from "react-fast-marquee";


const ToDeliveryMan = () => {


  const [user] = useGetAllUsers();
   

  const deliveryMan = user.filter(man => man.role==='deliveryMan' );
  console.log(deliveryMan)

console.log(deliveryMan)


    return (
        <div>
            <SectionTitle heading={'Top Delivery man'} subHeading={'Fast'}></SectionTitle>


            <Marquee>
            <div className="flex justify-center gap-5">
              {
                deliveryMan.slice(0,5).map(user =>  <div key={user._id}>
                  <div className="card w-96 h-72 bg-fuchsia-300 shadow-xl mr-5">
        <figure className="px-10 pt-10">
          <img src={user.image} alt={user.name} className="h-36 w-44 rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Name : {user.name}</h2>
          <p> Phone Number : {user.phoneNumber}</p>
        
        </div>
      </div>
                  </div>)
              }
            </div>

            </Marquee>

            
           
        </div>
    );
};

export default ToDeliveryMan;