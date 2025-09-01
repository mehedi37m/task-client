import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Menu = () => {
    const {setLoading} = useAuth();

const [cards, setCards] = useState([])
console.log(cards)

useEffect(() =>{
    fetch('https://parcel-management-server-sigma.vercel.app/items')
    .then(res => res.json())
    .then(data => setCards(data))
},[])







    return (
        <div >
           <Helmet>
        <title>Fast Food | Menu</title>
      </Helmet>
            <SectionTitle heading={'All Menu List'} subHeading={'Fast Food'}></SectionTitle>
            {cards.length}

            <div data-aos="fade-down"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    cards.map(card=><div key={card._id}>

<div className="card card-compact h-[450px] glass w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64 w-full' src={card.image_url} alt="Food" /></figure>
  <div className="card-body">
    <div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <h2 className="card-title text-2xl font-bold">{card.name}</h2>
    <p className='text-xl font-bold text-blue-900 '>{}</p>
    <p className='text-xl font-bold text-blue-900 '>Stock : {}</p>
    <p className='text-2xl font-bold'> Price : ${card.price}</p>
    </div>
    <div className="card-actions justify-start">
     <Link to={`/details/${card._id}`}> <button className="btn btn-primary">Details</button></Link>
     
    </div>
  </div>
</div>

                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Menu;