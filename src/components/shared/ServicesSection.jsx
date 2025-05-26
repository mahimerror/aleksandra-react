import Container from "../Container";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PropagateLoader } from "react-spinners";

import "swiper/css";
import "swiper/css/pagination";
import { RightIcon, SliderBackIcon, SliderForwardIcon } from "@/icons/Icon";
import { Button } from "../ui/button";
import useFetchData from "@/hooks/useFetchData";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { data, isPending } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/service/list`
  );

  return (
    <div className="my-10 md:my-16 lg:my-20 xl:my-[120px]">
      <Container className="">
        <h2 className="font-bold text-[#212B36] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-center">
          Our Services
        </h2>
        <div className="flex items-center justify-center lg:justify-end gap-[10px] mb-3 md:mb-6 mt-1.5 md:mt-2 lg:mt-0">
          <div className="size-9 md:size-10 lg:szie-11 xl:size-12 bg-[#F5F5F5] rounded-full flex items-center justify-center swiper-button-prev cursor-pointer">
            <SliderBackIcon className="scale-[0.6] md:scale-75" />
          </div>
          <div className="size-9 md:size-10 lg:szie-11 xl:size-12 bg-[#FBBF24] rounded-full flex items-center justify-center swiper-button-next cursor-pointer">
            <SliderForwardIcon className="scale-[0.6] md:scale-75" />
          </div>
        </div>

        <div className="rounded-[20px] md:rounded-[30px] overflow-hidden">
          {data?.data ? (
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              modules={[Navigation]}
              className="mySwiper h-auto"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {data?.data?.map((item, idx) => (
                <SwiperSlide key={idx} className="!h-auto">
                  <div className="p-6 rounded-[20px] md:rounded-[30px] bg-[#FCFCFC] border border-[#DFE3E8] h-full flex flex-col items-center justify-center gap-6">
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
                    <h3 className="text-lg xl:text-xl font-semibold text-center">
                      {item.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : isPending ? (
            <div className="flex items-center justify-center h-[262px]">
              <PropagateLoader color="#CBA135" size={40} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-[262px]">
              <p className="text-red-500">Something went wrong!</p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-5 md:mt-7 xl:mt-10">
          <Button to="/services" asChild>
            <Link className="max-w-[163px] lg:max-w-[200px] w-full text-lg font-semibold">
              See All <RightIcon />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
