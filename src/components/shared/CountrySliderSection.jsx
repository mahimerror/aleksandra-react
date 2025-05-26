import useFetchData from "@/hooks/useFetchData";
import Container from "../Container";
import CountrySlider from "./CountrySlider";

const CountrySliderSection = () => {
  const { data } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/place-slider/list`
  );

  return (
    <section className="my-10 md:my-16 lg:my-20 xl:my-[120px]">
      <Container className={"grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5"}>
        {data?.data?.map((item) => {
          return <CountrySlider key={item.id} data={item.place_sliders} />;
        })}
      </Container>
    </section>
  );
};

export default CountrySliderSection;
