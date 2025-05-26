import Container from "@/components/Container";
import Cta from "@/components/shared/Cta";
import CustomVideoPlayer from "@/components/shared/CustomVideoPlayer ";
import useFetchData from "@/hooks/useFetchData";
import { AboutBanner, ForwardIcon } from "@/icons/Icon";
import banner from "@/images/banner.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { data } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/about-us/show/1`
  );

  return (
    <>
      <section className="banner relative py-40 md:py-48 lg:py-60 xl:py-[300px] mb-10 md:mb-16 lg:mb-20 xl:mb-[120px]">
        <Container className="z-10 relative">
          <h1 className="text-white text-[33px] md:text-[42px] lg:text-[50px] xl:text-[58px] font-extrabold text-center max-w-[850px] mx-auto">
            Empowering <span className="text-primary">Business Growth</span> &
            Performance
          </h1>
          <div className="mx-auto mt-3 md:mt-4 lg:mt-5 xl:mt-6 text-[#BDBDBD] flex items-center justify-center gap-1.5 md:gap-3">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ForwardIcon />
            <p>About Us</p>
          </div>
        </Container>

        <figure className="w-full h-full overflow-hidden absolute top-0 left-0 right-0">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </figure>
      </section>

      {/* <section className="banner relative pt-[220px] pb-[300px] mb-[120px] min-h-[650px]">
        <Container className="z-10 relative">
          <div className="max-w-[850px] mx-auto">
            <h1 className="text-white text-[58px] font-extrabold text-center">
              Empowering <span className="text-primary">Business Growth</span> &
              Performance
            </h1>
            <div className="mx-auto mt-6 text-[#BDBDBD] flex items-center justify-center gap-4">
              <p>
                We help businesses unlock their full potential with data-driven
                strategies
              </p>
            </div>
          </div>
        </Container>

        <figure className="w-full h-full overflow-hidden absolute top-0 left-0 right-0">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </figure>
      </section> */}

      <section className="-mt-[200px] md:mb-[100px] lg:mb-[130px] xl:mb-[160px] relative">
        <Container className="">
          <h3 className="mb-8 md:mb-24 lg:mb-28 xl:mb-32 max-w-[80%] mx-auto text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#212B36] font-semibold pt-[160px]">
            {data?.data?.video_title
              ? data.data.video_title
              : "Driven by Purpose, Guided by Vision"}
          </h3>

          <div className="md:w-fit mx-auto relative">
            {isVideoOpen ? (
              <div className="relative md:h-[350px] lg:h-[450px] xl:h-[600px] aspect-video rounded-2xl overflow-hidden z-10">
                {data?.data?.video ? (
                  <CustomVideoPlayer videoUrl={data.data.video} />
                ) : (
                  <div className="h-full aspect-video flex justify-center items-center bg-[#1B365D] text-primary text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                    Sorry, we couldn&apos;t find the video.
                  </div>
                )}
              </div>
            ) : (
              <figure className="relative h-[600px] aspect-video rounded-2xl overflow-hidden z-10">
                <img
                  src={
                    data?.data?.thumbnail
                      ? data.data.thumbnail
                      : "https://i.ibb.co/8Dvydg3H/service1.png"
                  }
                  alt="Video thumbnail"
                  className="w-full h-full object-cover brightness-50"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <div className="bg-yellow-500 group rounded-full size-24 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white size-20 hover:scale-105 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <polygon fill="white" points="9.5,7.5 9.5,16.5 16.5,12" />
                    </svg>
                  </div>
                </button>
              </figure>
            )}
            <div className=" absolute -top-[50px] -left-[50px] lg:-left-[80px] xl:-left-[120px] rounded-[60px] xl:rounded-[88px] bg-[#F7C441] h-[200px] xl:h-[261px] aspect-[446/261] hidden md:block"></div>
            <div
              className="absolute -bottom-[50px] lg:-bottom-[74px] -right-[40px] lg:-right-[74px] rounded-[88px] bg-[#F7C441] size-[160px] xl:size-[190px] hidden md:block"
              style={{ borderRadius: "96px 0px 96px 96px" }}
            ></div>
          </div>
        </Container>
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          <AboutBanner />
        </div>
      </section>

      <Cta />
    </>
  );
};

export default AboutUs;
