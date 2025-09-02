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
  const user = allCarts.map((user) => user.status);

  const allDelivery = user.filter((delivery) => delivery === "On The Way");

  console.log(allDelivery);

  return (
    <div>
      <SectionTitle
        heading={"Our Features"}
        subHeading={"New Produce"}
      ></SectionTitle>

      <div
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="800"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
      >
        {/* Booked Parcels */}
        <div className="relative group w-80 h-52 [perspective:1200px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 opacity-90 blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div
            className="relative w-full h-full bg-white/20 backdrop-blur-xl border border-white/30 
      rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center 
      text-center text-white space-y-3 transition-all duration-500 transform-gpu group-hover:-translate-y-3 group-hover:rotate-x-6 group-hover:rotate-y-6"
          >
            <div className="flex justify-center text-7xl text-pink-300 animate-bounce">
              <CiDeliveryTruck />
            </div>
            <h1 className="text-4xl font-extrabold drop-shadow-md">
              {allCarts.length}
            </h1>
            <h1 className="text-lg font-medium opacity-90">
              Number of Parcel Booked
            </h1>
          </div>
        </div>

        {/* Delivered Parcels */}
        <div className="relative group w-80 h-52 [perspective:1200px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 opacity-90 blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div
            className="relative w-full h-full bg-white/20 backdrop-blur-xl border border-white/30 
      rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center 
      text-center text-white space-y-3 transition-all duration-500 transform-gpu group-hover:-translate-y-3 group-hover:rotate-x-6 group-hover:rotate-y-6"
          >
            <div className="flex justify-center text-7xl text-green-300 animate-pulse">
              <FaBook />
            </div>
            <h1 className="text-4xl font-extrabold drop-shadow-md">
              {allDelivery.length}
            </h1>
            <h1 className="text-lg font-medium opacity-90">
              Number of Parcel Delivered
            </h1>
          </div>
        </div>

        {/* Users */}
        <div className="relative group w-80 h-52 [perspective:1200px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 opacity-90 blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div
            className="relative w-full h-full bg-white/20 backdrop-blur-xl border border-white/30 
      rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center 
      text-center text-white space-y-3 transition-all duration-500 transform-gpu group-hover:-translate-y-3 group-hover:rotate-x-6 group-hover:rotate-y-6"
          >
            <div className="flex justify-center text-7xl text-indigo-300 animate-spin-slow">
              <FaUsers />
            </div>
            <h1 className="text-4xl font-extrabold drop-shadow-md">
              {users.length}
            </h1>
            <h1 className="text-lg font-medium opacity-90">
              Number of People Using Your App
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
