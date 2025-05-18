import Container from "@/components/Container";
import Cta from "@/components/shared/Cta";
import { Button } from "@/components/ui/button";
import { ArrowIcon, BelowTitleIcon } from "@/icons/Icon";
import banner from "@/images/banner.png";
import logo from "@/images/logo.png";

function Home() {
  return (
    <>
      <section className="banner relative pt-[190px] pb-[300px] mb-[120px]">
        <Container className="flex items-center justify-between gap-24 z-10 relative">
          <div className="w-[35%]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <div className="w-[870px] flex flex-col items-end">
            <Button variant="secondary" className="py-2 px-4 mb-4">
              Powering Your Success
            </Button>
            <div className="relative">
              <h1 className="text-white text-[58px] text-right font-extrabold">
                Trusted Partners in Financial & Operational Leadership
              </h1>
              <BelowTitleIcon className=" absolute -bottom-2 right-1/2 -z-10" />
            </div>
            <p className="text-white text-right mt-6 mb-12 w-[80%]">
              Running a business is difficult enough without overpaying for
              essential utility services like gas, electricity, water, insurance
              and more.
            </p>
            <Button>
              Explore Our Services <ArrowIcon />
            </Button>
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

      <section className="banner relative pt-[190px] pb-[300px] mb-[120px]">
        <Container className="flex items-center justify-between gap-24 z-10 relative">
          <div className="w-[35%]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <div className="w-[870px] flex flex-col items-end">
            <Button variant="secondary" className="py-2 px-4 mb-4">
              Powering Your Success
            </Button>
            <div className="relative">
              <h1 className="text-white text-[58px] text-right font-extrabold">
                Trusted Partners in Financial & Operational Leadership
              </h1>
              <BelowTitleIcon className=" absolute -bottom-2 right-1/2 -z-10" />
            </div>
            <p className="text-white text-right mt-6 mb-12 w-[80%]">
              Running a business is difficult enough without overpaying for
              essential utility services like gas, electricity, water, insurance
              and more.
            </p>
            <Button>
              Explore Our Services <ArrowIcon />
            </Button>
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

      <Cta />
    </>
  );
}

export default Home;
