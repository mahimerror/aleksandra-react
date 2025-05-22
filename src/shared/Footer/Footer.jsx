import Container from "@/components/Container";
import useFetchData from "@/hooks/useFetchData";
import footerBg from "@/images/footer.png";
import { MainContext } from "@/provider/ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const { data, isPending } = useContext(MainContext);

  const { data: dynamicPages } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/dynamic-page/list`
  );

  return (
    <div className="relative w-full">
      <div className="relative z-10">
        <Container className="flex items-center gap-10 py-10">
          <p className="font-medium text-lg text-white">Find us</p>
          <Link
            to={isPending || !data?.facebook_link ? "#" : data.facebook_link}
            className="group flex gap-2 items-center"
          >
            <div className="size-[30px] flex justify-center items-center bg-white group-hover:bg-[#CBA135] rounded-full transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="fill-[#0B0D0F] group-hover:fill-white transition-all duration-300"
              >
                <path d="M11.2457 17.5V10.6689H13.7137L14.0806 7.99434H11.2457V6.29074C11.2457 5.51895 11.476 4.99053 12.6622 4.99053H14.1654V2.60599C13.434 2.53281 12.6989 2.49747 11.9633 2.50014C9.7818 2.50014 8.28401 3.74367 8.28401 6.02653V7.98934H5.83203V10.6639H8.28936V17.5H11.2457Z" />
              </svg>
            </div>
            <p className="text-white font-medium">Facebook</p>
          </Link>

          <Link
            to={isPending || !data?.linkedin_link ? "#" : data.linkedin_link}
            className="group flex gap-2 items-center"
          >
            <div className="size-[30px] flex justify-center items-center bg-white group-hover:bg-[#CBA135] rounded-full transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="fill-[#0B0D0F] group-hover:fill-white transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.07175 7.72675H10.8573V9.11425C11.2585 8.31625 12.2875 7.59925 13.8333 7.59925C16.7965 7.59925 17.5 9.18775 17.5 12.1023V17.5H14.5V12.766C14.5 11.1062 14.0988 10.1702 13.0773 10.1702C11.6605 10.1702 11.0717 11.179 11.0717 12.7653V17.5H8.07175V7.72675ZM2.9275 17.3725H5.9275V7.59925H2.9275V17.3725ZM6.35725 4.4125C6.35736 4.66396 6.30749 4.91293 6.21054 5.14494C6.11359 5.37695 5.97149 5.58738 5.7925 5.764C5.4298 6.12447 4.93886 6.32624 4.4275 6.325C3.91704 6.32466 3.42723 6.1234 3.064 5.76475C2.88566 5.58753 2.74404 5.37687 2.64726 5.14482C2.55048 4.91278 2.50043 4.66392 2.5 4.4125C2.5 3.90475 2.7025 3.41875 3.06475 3.06025C3.42766 2.70112 3.91768 2.49978 4.42825 2.5C4.93975 2.5 5.43025 2.70175 5.7925 3.06025C6.154 3.41875 6.35725 3.90475 6.35725 4.4125Z"
                />
              </svg>
            </div>
            <p className="text-white font-medium">Linkedin</p>
          </Link>
        </Container>

        <div className="border border-b border-[#FFFFFF]/10"></div>

        <Container className="flex items-center justify-between gap-10 py-7 text-sm">
          <p className=" text-[#FFFFFF]/70">
            {isPending || !data?.copyright_text
              ? "Copyright © 2025 Coleridge advisors LLC. All Rights Reserved."
              : data.copyright_text}
          </p>
          <div className="flex items-center gap-7 text-[#ffffff]/70">
            {dynamicPages?.data?.length > 0 &&
              dynamicPages?.data?.map((item, idx) => (
                <Link
                  to={`/${item.page_slug}`}
                  key={idx}
                  className="hover:underline transition-all duration-500"
                >
                  {item.page_title}
                </Link>
              ))}
            {/* 
            <Link
              to="/terms-conditions"
              className="hover:underline transition-all duration-500"
            >
              Terms of Service
            </Link> */}
          </div>
        </Container>
      </div>
      <figure className="w-full overflow-hidden h-full absolute top-0 left-0">
        <img
          src={footerBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </figure>
    </div>
  );
}

export default Footer;
