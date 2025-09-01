import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div >
                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/hZwPQDG/sharon-pittaway-KUZnfk-2-DSQ-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          
          <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/WpnM4kv/ashkan-forouzani-AFyk-Ei-Jspto-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/jrHVQRR/elle-hughes-s-FU3-fw-Z6n-Q-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/9VT6Qdg/mockup-graphics-Ox-u9-F-Uq-PI-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/PD5xCyr/peter-wendt-r5-KSMkyo-Sc-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/km3NgN9/dan-cristian-padure-m-Iy-ZDPhuy-Y0-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/hZwPQDG/sharon-pittaway-KUZnfk-2-DSQ-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/j3PM9Lg/jeshoots-com-fp1x-X7-Dw-Ds-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img className='md:h-[600px] w-full' src="https://i.ibb.co/JyV5xQS/kelly-sikkema-XNy-Y0-Roxm-YE-unsplash.jpg" />
          <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
         className="text-white space-y-7 pl-12 md:w-1/2">
            <h1 className="text-6xl font-bold">Too Fast Product</h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
           <form action="" className='flex justify-between'>
           <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className='bg-white rounded-lg text-blue-700 btn ' value="Search" />
           </form>
               
            </div>
        </div>
    </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;