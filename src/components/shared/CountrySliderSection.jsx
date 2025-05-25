import useFetchData from "@/hooks/useFetchData";
import Container from "../Container";
import CountrySlider from "./CountrySlider";

const CountrySliderSection = () => {
  const { data } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/place-slider/list`
  );

  console.log("CountrySliderSection data:", data);
  return (
    <section className="my-[120px]">
      <Container className={"grid grid-cols-3 gap-5"}>
        {data?.data?.map((item) => (
          <CountrySlider key={item.id} />
        ))}
        {/* <>
          <CountrySlider />
          <CountrySlider />
          <CountrySlider />
        </> */}
      </Container>
    </section>
  );
};

export default CountrySliderSection;
