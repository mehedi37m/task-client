import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img from '../../../assets/food.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-7 my-14">
            <SectionTitle heading={'Featured Item'} subHeading={'check it out'}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 md:pb-20 pt-10 md:px-36">
               <div>
               <img className='md:h-full h-20' src={img} alt="" />
               </div>
               <div className="md:ml-10 md:h-full h-80">
                
                <p className="uppercase text-4xl font-bold text-blue-900">Vegetables</p>
                <p>Vegetables are essential components of a balanced and nutritious diet, offering a plethora of health benefits. Rich in vitamins, minerals, and dietary fiber, vegetables contribute to overall well-being and play a crucial role in maintaining optimal bodily functions. From leafy greens like spinach and kale, packed with iron and antioxidants, to vibrant bell peppers, abundant in vitamin C, the variety of vegetables allows for a diverse and colorful plate. Root vegetables such as carrots and sweet potatoes provide essential nutrients and a natural sweetness.  </p>
                
               </div>
            </div>
        </div>
    );
};

export default Featured;