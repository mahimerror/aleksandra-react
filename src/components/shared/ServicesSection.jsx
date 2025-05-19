import Container from "../Container";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SliderBackIcon, SliderForwardIcon } from "@/icons/Icon";

const ServicesSection = () => {
  return (
    <div className="my-[120px]">
      <Container className="">
        <h2 className="font-bold text-[#212B36] text-[48px] text-center">
          Our Services
        </h2>
        <div className="flex items-center justify-end gap-[10px] mb-6">
          <div className="size-12 bg-[#F5F5F5] rounded-full flex items-center justify-center swiper-button-prev cursor-pointer">
            <SliderBackIcon className="scale-75" />
          </div>
          <div className="size-12 bg-[#FBBF24] rounded-full flex items-center justify-center swiper-button-next cursor-pointer">
            <SliderForwardIcon className="scale-75" />
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {Array(9)
            .fill(null)
            .map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-6 rounded-[30px] bg-[#FCFCFC] border border-[#DFE3E8]">
                  <figure className="">
                    <img
                      src="https://i.ibb.co/4gCZ7QJv/Frame-2147227615.png"
                      alt=""
                      className="mx-auto"
                    />
                  </figure>
                  <h3 className="text-xl font-semibold text-center mt-6">
                    Service 1
                  </h3>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ServicesSection;
