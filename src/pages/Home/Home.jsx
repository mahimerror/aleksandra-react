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
      <section className="banner relative pb-28 md:pb-32 lg:pt-32 lg:pb-40 xl:pt-[240px] xl:pb-[300px] mb-10 md:mb-16 lg:mb-20 xl:mb-[120px]">
        <Container className="flex flex-col md:flex-row items-center justify-betwee gap-8 lg:gap-12 z-10 relative">
          <div className="w-[70%] md:w-[40%] lg:w-[38%] xl:w-[33%] shrink-0 md:-translate-y-4">
            <img src={logo} alt="Logo" className="object-cover" />
          </div>
          <div className="flex flex-col items-center md:items-end">
            <Button
              variant="secondary"
              className="py-2 px-4 mb-4 pointer-events-none"
            >
              {data?.data?.header ? data.data.header : "Powering Your Success"}
            </Button>
            <div className="relative mb-8 md:mb-10 lg:mb-12">
              <h1 className="text-white text-[26px] md:text-[32px] lg:text-[40px] xl:text-[58px] font-extrabold text-center md:text-right">
                {data?.data?.title
                  ? data.data.title
                  : "Trusted Partners in Financial & Operational Leadership"}
              </h1>
              <BelowTitleIcon className="absolute md:-bottom-2 right-1/2 md:right-0 xl:right-1/2 translate-x-1/2 md:translate-x-0 -z-10" />
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
      </section>

      <CountrySliderSection />
      <ServicesSection />
      <Cta />
    </>
  );
}

export default Home;
