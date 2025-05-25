import Container from "@/components/Container";
import CountrySliderSection from "@/components/shared/CountrySliderSection";
import Cta from "@/components/shared/Cta";
import ServicesSection from "@/components/shared/ServicesSection";
import { Button } from "@/components/ui/button";
import useFetchData from "@/hooks/useFetchData";
import { ArrowIcon, BelowTitleIcon } from "@/icons/Icon";
import banner from "@/images/banner.png";
import logo from "@/images/logo.png";
import { Link } from "react-router-dom";

function Home() {
  const { data } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/hero-section/show/1`
  );

  return (
    <>
      {/* <section className="banner relative pt-[240px] pb-[300px] mb-[120px]">
        <Container className="flex items-center justify-between gap-24 z-10 relative">
          <div className="w-[35%]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <div className="w-[870px] flex flex-col items-end">
            <Button
              variant="secondary"
              className="py-2 px-4 mb-4 pointer-events-none"
            >
              {data?.data?.header ? data.data.header : "Powering Your Success"}
            </Button>
            <div className="relative  mb-12">
              <h1 className="text-white text-[58px] text-right font-extrabold">
                {data?.data?.title
                  ? data.data.title
                  : "Trusted Partners in Financial & Operational Leadership"}
              </h1>
              <BelowTitleIcon className=" absolute -bottom-2 right-1/2 -z-10" />
            </div>
            <Link to="/services">
              <Button>
                Explore Our Services <ArrowIcon />
              </Button>
            </Link>
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

      {/* <CountrySliderSection /> */}
      <ServicesSection />
      <Cta />
    </>
  );
}

export default Home;
