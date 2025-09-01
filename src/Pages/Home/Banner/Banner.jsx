import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";

const slides = [
  "https://i.ibb.co/hZwPQDG/sharon-pittaway-KUZnfk-2-DSQ-unsplash.jpg",
  "https://i.ibb.co/WpnM4kv/ashkan-forouzani-AFyk-Ei-Jspto-unsplash.jpg",
  "https://i.ibb.co/jrHVQRR/elle-hughes-s-FU3-fw-Z6n-Q-unsplash.jpg",
  "https://i.ibb.co/9VT6Qdg/mockup-graphics-Ox-u9-F-Uq-PI-unsplash.jpg",
  "https://i.ibb.co/PD5xCyr/peter-wendt-r5-KSMkyo-Sc-unsplash.jpg",
  "https://i.ibb.co/km3NgN9/dan-cristian-padure-m-Iy-ZDPhuy-Y0-unsplash.jpg",
  "https://i.ibb.co/j3PM9Lg/jeshoots-com-fp1x-X7-Dw-Ds-unsplash.jpg",
  "https://i.ibb.co/JyV5xQS/kelly-sikkema-XNy-Y0-Roxm-YE-unsplash.jpg",
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative">
              <img
                className="h-[300px] md:h-[600px] w-full object-cover rounded-xl"
                src={src}
                alt="Banner Slide"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center rounded-xl">
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1200"
                  className="text-white space-y-5 px-6 md:px-16 max-w-xl"
                >
                  <h1 className="text-3xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Too Fast Product
                  </h1>
                  <p className="text-sm md:text-lg opacity-90">
                    Discover a wide range of fresh and fast products delivered
                    right to your doorstep.
                  </p>

                  {/* Search Box */}
                  <form className="flex flex-col sm:flex-row gap-3 mt-4">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="input input-bordered w-full sm:w-72 text-black"
                    />
                    <button
                      type="submit"
                      className="btn bg-white text-blue-700 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
