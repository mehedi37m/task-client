import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBook, FaUsers } from "react-icons/fa";
import useGetAllUsers from "../../../hooks/useGetAllUsers";


const Features = () => {

    const [allCarts, setAllCarts] = useState([]);

const [users] = useGetAllUsers();

useEffect(() => {
    fetch("https://parcel-management-server-sigma.vercel.app/itemsCart")
      .then((res) => res.json())
      .then((data) => setAllCarts(data));
  }, []);

//   On The Way
  const user = allCarts.map(user => user.status)

  const allDelivery = user.filter(delivery => delivery === 'On The Way')

console.log(allDelivery)

    return (
        <div>
            <SectionTitle heading={'Our Features'} subHeading={'New Produce'}></SectionTitle>

            <div data-aos="fade-down"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="grid grid-cols-1 space-y-5 md:grid-cols-3 justify-items-center">
            <div className=" bg-slate-500 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    
                    <div className="flex justify-center text-8xl">
                    <CiDeliveryTruck></CiDeliveryTruck>
                    </div>
                    <h1 className=" text-4xl font-bold">{allCarts.length}</h1>
                    <h1>Number of Parcel Booked</h1>
                </div>
                <div className=" bg-slate-500 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    
                    <div className="flex justify-center text-8xl">
                    <FaBook></FaBook>
                    </div>
                    <h1 className=" text-4xl font-bold">{allDelivery.length}</h1>
                    <h1>Number of Parcel Delivered</h1>
                </div>
                
                <div className=" bg-slate-500 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    <div className="flex justify-center text-8xl">
                    <FaUsers></FaUsers>
                    </div>
                    <h1 className=" text-4xl font-bold">{users.length}</h1>
                    <h1>Number of People Using Your App</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Features;