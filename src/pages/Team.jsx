import Container from "@/components/Container";
import useFetchData from "@/hooks/useFetchData";
import { RingIcon } from "@/icons/Icon";
import person from "@/images/person.png";
import Navbar from "@/shared/Navbar/Navbar";
import { PropagateLoader } from "react-spinners";
import parse from "html-react-parser";

const Team = () => {
  const { data, isPending } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/our-team/show/1`
  );

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="pt-[90px] md:pt-[120px] lg:pt-[200px] xl:pt-[230px] pb-10 md:pb-16 lg:pb-20 xl:pb-[120px] relative">
        {isPending ? (
          <div className="flex justify-center items-center py-48">
            <PropagateLoader color="#CBA135" size={40} />
          </div>
        ) : (
          <Container className="grid lg:grid-cols-2 xl:grid-cols-5 gap-10 lg:gap-0">
            <div className="xl:col-span-2 relative">
              <div className="h-full flex items-center">
                <div className="relative overflow-hidden lg:-translate-x-10 xl:-translate-x-24 sm:w-2/3 lg:w-full mx-auto">
                  <figure className="">
                    <img
                      src={data?.data?.image ? data.data.image : person}
                      alt=""
                      className="object-cover"
                    />
                  </figure>

                  <div className="bg-[#F3E8CD] rounded-t-xl relative">
                    <div className="flex flex-col justify-center items-center text-[#212B36] relative z-10 py-2.5 sm:py-4 md:py-5 lg:py-8 md:gap-1 lg:gap-2">
                      <h4 className="text-xl lg:text-3xl font-bold">
                        {data?.data?.name ? data.data.name : "Name"}
                      </h4>
                      <p className="lg:text-lg">
                        {data?.data?.designation
                          ? data.data.designation
                          : "Associate"}
                      </p>
                    </div>
                    <div className="w-full aspect-square bg-white rounded-full absolute -top-8 lg:-top-12"></div>
                  </div>
                </div>
                <RingIcon className="absolute bottom-1/2 right-1/2 -z-10 translate-y-40 translate-x-96 scale-75" />
              </div>
            </div>

            <div className="right xl:col-span-3">
              <div className="h-full flex items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl xl:text-5xl text-center lg:text-left text-[#212B36] font-bold mb-2 xl:mb-12">
                    {data?.data?.title ? data.data.title : "Our Team"}
                  </h2>
                  <h3 className="text-lg md:text-xl xl:text-2xl text-center lg:text-left font-semibold text-[#212B36] mb-3 lg:mb-4">
                    {data?.data?.sub_title
                      ? data.data.sub_title
                      : "Your Trusted Partners for Innovative Strategies and Unmatched Success"}
                  </h3>
                  <div className="text-[#6D6B63] text-sm md:text-base xl:text-lg text-center lg:text-left">
                    {data?.data?.description
                      ? parse(data.data.description)
                      : "We are a team of dedicated professionals committed to delivering exceptional results for our clients. With a wealth of experience and expertise, we work collaboratively to develop innovative strategies that drive success and growth."}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        )}
      </section>
    </div>
  );
};

export default Team;
