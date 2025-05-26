import banner from "@/images/cta.png";
import Container from "../Container";
import { Button } from "../ui/button";
import { ArrowIcon } from "@/icons/Icon";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="relative my-10 md:my-16 lg:my-20 xl:my-[120px]">
      <Container className="relative z-10 py-10 md:py-14 lg:py-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-0 items-center justify-between">
        <div className="lg:min-w-[700px] xl:min-w-[800px] max-w-[92%] md:max-w-[85%] lg:w-full mx-auto">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] mb-4 font-bold text-[#212B36] text-center lg:text-left ">
            Unlock Your Business Potential with a Virtual CFO
          </h3>
          <p className="text-[#454F5B] text-center lg:text-left text-sm md:text-base">
            Access top-tier financial expertise at your reach! Get the strategic
            guidance you need to achieve your growth goals.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Link to="/contact-us">
            <Button>
              Contact US <ArrowIcon />
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
    </div>
  );
};

export default Cta;
