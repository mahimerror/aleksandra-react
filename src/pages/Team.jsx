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
    <div className="min-h-screen">
      <Navbar istrue={true} />
      <section className="py-[230px] relative">
        {isPending ? (
          <div className="flex justify-center items-center py-48">
            <PropagateLoader color="#E2C98B" size={40} />
          </div>
        ) : (
          <Container className="flex items-center">
            <div className="left relative">
              <div className="relative overflow-hidden -translate-x-24">
                <figure className="min-w-[480px] min-h-[380px]">
                  <img
                    src={data?.data?.image ? data.data.image : person}
                    alt=""
                    className="object-cover"
                  />
                </figure>
                <div className="bg-[#F3E8CD] rounded-t-xl relative">
                  <div className="flex flex-col justify-center items-center text-[#212B36] relative z-10 py-8">
                    <h4 className="mb-2 text-3xl font-bold">
                      {data?.data?.name ? data.data.name : "Name"}
                    </h4>
                    <p className="text-lg">
                      {data?.data?.designation
                        ? data.data.designation
                        : "Associate"}
                    </p>
                  </div>
                  <div className="w-full aspect-square bg-white rounded-full absolute -top-12"></div>
                </div>
              </div>
              <RingIcon className="absolute bottom-1/2 right-1/2 -z-10 translate-y-40 translate-x-96 scale-75" />
            </div>

            <div className="right w-[60%] shrink-0">
              <h2 className="text-5xl text-[#212B36] font-bold mb-12">
                {data?.data?.title ? data.data.title : "Our Team"}
              </h2>
              <h3 className="text-2xl font-semibold text-[#212B36] mb-4">
                {data?.data?.sub_title
                  ? data.data.sub_title
                  : "Your Trusted Partners for Innovative Strategies and Unmatched Success"}
              </h3>
              <div className="text-[#6D6B63] text-lg">
                {data?.data?.description
                  ? parse(data.data.description)
                  : "We are a team of dedicated professionals committed to delivering exceptional results for our clients. With a wealth of experience and expertise, we work collaboratively to develop innovative strategies that drive success and growth."}
              </div>
            </div>
          </Container>
        )}
      </section>
    </div>
  );
};

export default Team;
