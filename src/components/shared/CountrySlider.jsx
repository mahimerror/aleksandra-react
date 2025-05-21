import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const CountrySlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet">${""}</span>`;
    },
  };

  return (
    <div className="rounded-[20px] overflow-hidden">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        spaceBetween={30}
        className="custom-swiper"
        loop={true}
      >
        <SwiperSlide>
          <div className="rounded-[20px] overflow-hidden relative">
            <figure className="w-full h-[620px] relative">
              <img
                src="https://i.ibb.co/MDND8TwP/country1.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="bg-black/50 p-5 pb-[60px] flex flex-col justify-end absolute top-0 left-0 right-0 bottom-0">
              <h2 className="mb-4 text-white text-2xl font-bold">Austin</h2>
              <p className="text-[#DFE3E8] text-sm leading-[22px]">
                At SEOC, we specialize in driving targeted traffic, and boosting
                conversions with our expert SEO and digital marketing services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-[20px] overflow-hidden relative">
            <figure className="w-full h-[620px] relative">
              <img
                src="https://i.ibb.co/vx5wprSR/country2.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="bg-black/50 p-5 pb-[60px] flex flex-col justify-end absolute top-0 left-0 right-0 bottom-0">
              <h2 className="mb-4 text-white text-2xl font-bold">Austin</h2>
              <p className="text-[#DFE3E8] text-sm leading-[22px]">
                At SEOC, we specialize in driving targeted traffic, and boosting
                conversions with our expert SEO and digital marketing services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-[20px] overflow-hidden relative">
            <figure className="w-full h-[620px] relative">
              <img
                src="https://i.ibb.co/ccbRy3pM/country3.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="bg-black/50 p-5 pb-[60px] flex flex-col justify-end absolute top-0 left-0 right-0 bottom-0">
              <h2 className="mb-4 text-white text-2xl font-bold">Austin</h2>
              <p className="text-[#DFE3E8] text-sm leading-[22px]">
                At SEOC, we specialize in driving targeted traffic, and boosting
                conversions with our expert SEO and digital marketing services.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CountrySlider;
