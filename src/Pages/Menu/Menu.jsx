import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const { setLoading } = useAuth();

  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    fetch("https://parcel-management-server-sigma.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Fast Food | Menu</title>
      </Helmet>
      <SectionTitle
        heading={"All Menu List"}
        subHeading={"Fast Food"}
      ></SectionTitle>
      {cards.length}

      <div
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
      >
        {cards.map((card) => (
          <div key={card._id}>
           <div className="w-96 h-[520px] [perspective:1500px]">
  <div
    className="relative w-full h-full rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 
    shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-700 transform-gpu group 
    hover:rotate-x-6 hover:rotate-y-6 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
  >
    {/* Gradient Border Glow */}
    <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
      <div className="w-full h-full rounded-3xl bg-white/90 backdrop-blur-2xl"></div>
    </div>

    {/* Inner Content */}
    <div className="relative z-10 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
        <img
          src={card.image_url}
          alt={card.name}
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-bounce">
          ✨ New
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {card.name}
          </h2>
          <p className="text-lg font-medium text-gray-600 mb-1">
            Category:{" "}
            <span className="text-gray-800">{card.origin || "N/A"}</span>
          </p>
          <p className="text-lg font-medium text-gray-600 mb-1">
            Stock:{" "}
            <span
              className={`${
                card.stock > 0 ? "text-green-600" : "text-red-500"
              } font-semibold`}
            >
              {card.stock > 0 ? card.stock : "Out of Stock"}
            </span>
          </p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mt-2">
            ${card.price}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Link to={`/details/${card._id}`} className="w-full">
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 hover:shadow-[0_10px_30px_rgba(99,102,241,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              View Cart 🚀
            </button>
          </Link>
          <button className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/70 backdrop-blur-md hover:bg-white text-gray-700 hover:text-pink-600 shadow-lg hover:shadow-[0_10px_20px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
            ❤️
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
