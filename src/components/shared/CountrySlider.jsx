import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const CountrySlider = ({ data }) => {
  console.log(data);

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
        breakpoints={{
          520: {
            spaceBetween: 15,
          },
          1024: {
            spaceBetween: 25,
          },
          1400: {
            spaceBetween: 30,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-[20px] overflow-hidden relative">
              <figure className="w-full h-[440px] md:h-[350px] lg:h-[480px] xl:h-[620px] relative">
                <img
                  src={item.image || "https://i.ibb.co/MDND8TwP/country1.png"}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </figure>
              <div className="bg-black/50 p-5 pb-[60px] flex flex-col justify-end absolute top-0 left-0 right-0 bottom-0">
                <h2 className="text-center md:text-left text-white text-lg md:text-base lg:text-xl xl:text-2xl font-bold">
                  {item.title}
                </h2>
                <p className="text-center md:text-left text-[#DFE3E8] text-sm leading-[22px] md:hidden lg:block md:mt-4">
                  {item.sub_title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CountrySlider;
