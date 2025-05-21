import Container from "../Container";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PropagateLoader } from "react-spinners";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { RightIcon, SliderBackIcon, SliderForwardIcon } from "@/icons/Icon";
import { Button } from "../ui/button";
import useFetchData from "@/hooks/useFetchData";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { data } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/service/list`
  );

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

        <div className="rounded-[30px] overflow-hidden">
          {data?.data ? (
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              className="mySwiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {data?.data?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-6 rounded-[30px] bg-[#FCFCFC] border border-[#DFE3E8]">
                    <figure className="h-[160px]">
                      <img
                        src={
                          item?.illustration
                            ? item.illustration
                            : "https://i.ibb.co/4gCZ7QJv/Frame-2147227615.png"
                        }
                        alt=""
                        className="mx-auto"
                      />
                    </figure>
                    <h3 className="text-xl font-semibold text-center mt-6">
                      {item.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex items-center justify-center h-[262px]">
              <PropagateLoader color="#DDA923" size={40} />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Button to="/services" asChild>
            <Link className="max-w-[200px] w-full text-lg font-semibold">
              See All <RightIcon />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
