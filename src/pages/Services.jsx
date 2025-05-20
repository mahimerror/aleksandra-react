import Container from "@/components/Container";
import Cta from "@/components/shared/Cta";
import { ForwardIcon } from "@/icons/Icon";
import banner from "@/images/banner.png";

const Services = () => {
  return (
    <>
      <section className="banner relative py-[300px] mb-[120px] min-h-[650px]">
        <Container className="z-10 relative">
          <h1 className="text-white text-[58px] font-extrabold text-center">
            Our Services
          </h1>
          <div className="mx-auto mt-6 text-[#BDBDBD] flex items-center justify-center gap-4">
            <p>Home</p>
            <ForwardIcon />
            <p>Services</p>
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

      <section className="my-[120px]">
        <Container className="grid grid-cols-2 gap-12">
          {Array(9)
            .fill(null)
            .map((_, idx) => (
              <div
                className="bg-[#FBFBFB] p-5 rounded-3xl"
                key={idx}
                style={{ boxShadow: "-8px 8px 24px 0px rgba(0, 0, 0, 0.18)" }}
              >
                <figure className="w-full aspect-[70/42] rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://i.ibb.co/8Dvydg3H/service1.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <h2 className="text-4xl font-bold mb-4">Growth Acceleration</h2>
                <p className="text-[#6D6B63] text-lg">
                  We create content strategies that don’t just sound good—they
                  rank. While many SEO providers chase competitive keywords
                  without considering rankability, we focus on smart
                  opportunities that your site can realistically win.
                </p>
              </div>
            ))}
        </Container>
      </section>
      <Cta />
    </>
  );
};

export default Services;
