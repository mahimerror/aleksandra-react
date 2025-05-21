import { ForwardIcon } from "@/icons/Icon";
import { Link, useParams } from "react-router-dom";
import banner from "@/images/banner.png";
import Container from "@/components/Container";
import useFetchData from "@/hooks/useFetchData";
import parse from 'html-react-parser';

const DynamicPage = () => {
  const { slug } = useParams();
  const { data, isPending, isError, error } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/dynamic-page/show/${slug}`
  );

  return (
    <div className="min-h-screen">
      <section className="banner relative py-[300px] mb-[120px] min-h-[650px]">
        <Container className="z-10 relative">
          <h1 className="text-white text-[58px] font-extrabold text-center">
            {isPending && <p>- - - </p>}
            {isError && <p>ERROR 404!!</p>}
            {data && data.data.page_title}
          </h1>
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
        <Container>{data && parse(data.data.page_content)}</Container>
      </section>
    </div>
  );
};

export default DynamicPage;
