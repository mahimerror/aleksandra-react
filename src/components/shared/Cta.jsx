import banner from "@/images/cta.png";
import Container from "../Container";
import { Button } from "../ui/button";
import { ArrowIcon } from "@/icons/Icon";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="relative my-[120px]">
      <Container className="relative z-10 py-16 flex items-center justify-between">
        <div className="min-w-[800px]">
          <h3 className="text-[48px] mb-4 font-bold text-[#212B36]">
            Unlock Your Business Potential with a Virtual CFO
          </h3>
          <p className="text-[#454F5B]">
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
