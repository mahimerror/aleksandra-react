import Container from "@/components/Container";
import Cta from "@/components/shared/Cta";
import CustomVideoPlayer from "@/components/shared/CustomVideoPlayer ";
import useFetchData from "@/hooks/useFetchData";
import { AboutBanner } from "@/icons/Icon";
import banner from "@/images/banner.png";
import { useState } from "react";

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { data } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/about-us/show/1`
  );

  return (
    <>
      <section className="banner relative pt-[220px] pb-[300px] mb-[120px] min-h-[650px]">
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
      </section>

      <section className="-mt-[200px] mb-[160px] relative">
        <Container className={""}>
          <h3 className="mb-32 text-center text-4xl text-[#212B36] font-semibold pt-[160px]">
            {data?.data?.video_title
              ? data.data.video_title
              : "Driven by Purpose, Guided by Vision"}
          </h3>

          <div className="w-fit mx-auto relative">
            {isVideoOpen ? (
              <div className="relative h-[600px] aspect-video rounded-2xl overflow-hidden z-10">
                {data?.data?.video ? (
                  <CustomVideoPlayer videoUrl={data.data.video} />
                ) : (
                  <div className="h-full aspect-video flex justify-center items-center bg-[#1B365D] text-primary text-3xl font-semibold">
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
            <div className=" absolute -top-[50px] -left-[120px] rounded-[88px] bg-[#F7C441] w-[446px] h-[261px]"></div>
            <div
              className=" absolute -bottom-[74px] -right-[74px] rounded-[88px] bg-[#F7C441] size-[190px]"
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
