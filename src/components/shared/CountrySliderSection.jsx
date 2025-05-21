import Container from "../Container";
import CountrySlider from "./CountrySlider";

const CountrySliderSection = () => {
  return (
    <section className="my-[120px]">
      <Container className={"grid grid-cols-3 gap-5"}>
        <>
          <CountrySlider />
          <CountrySlider />
          <CountrySlider />
        </>
      </Container>
    </section>
  );
};

export default CountrySliderSection;
