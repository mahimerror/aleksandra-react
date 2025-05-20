import Container from "@/components/Container";
import { RingIcon } from "@/icons/Icon";
import person from "@/images/person.png";
import Navbar from "@/shared/Navbar/Navbar";

const Team = () => {
  return (
    <>
      <Navbar istrue={true} />
      <section className="mt-[230px] mb-[120px] relative">
        <Container className="flex items-center">
          <div className="left relative">
            <div className="relative overflow-hidden -translate-x-24">
              <figure>
                <img src={person} alt="" />
              </figure>
              <div className="bg-[#F3E8CD] rounded-t-xl py-8 relative">
                <div className="flex flex-col justify-center items-center text-[#212B36] relative z-10">
                  <h4 className="mb-2 text-3xl font-bold">Thomas Wilkinson</h4>
                  <p className="text-lg">FOUNDER</p>
                </div>
              </div>
              <div className="w-full aspect-square bg-white rounded-full absolute -bottom-[65%]"></div>
            </div>
            <RingIcon className="absolute bottom-1/2 right-1/2 -z-10 translate-y-40 translate-x-96 scale-75" />
          </div>

          <div className="right w-[60%] shrink-0">
            <h2 className="text-5xl text-[#212B36] font-bold mb-12">
              Our Team
            </h2>
            <h3 className="text-2xl font-semibold text-[#212B36] mb-4">
              Your Trusted Partners for Innovative Strategies and Unmatched
              Success
            </h3>
            <div className="">
              <p className="text-[#6D6B63] text-lg">
                Tom Wilkinson is a seasoned business leader and the founder of
                Coleridge Advisors. With an extensive career serving as CEO of
                three public companies and CFO for several public and private
                organizations, Tom has a proven track record of success in
                diverse roles.
              </p>
              <br />
              <p className="text-[#6D6B63] text-lg">
                He co-founded and led a regional accounting firm and is a
                licensed CPA in Texas. Tom is recognized for his expertise in
                fundraising for public and private enterprises and possesses
                significant international business experience. With bachelor’s
                and master’s degrees from the University of Texas, he has
                successfully managed multiple turnaround projects, executed
                significant mergers and acquisitions on both the buy and sell
                sides, and his advanced analytical skills in company
                profitability, planning, and cost reduction ensure informed
                financial decisions.
              </p>
              <br />
              <p className="text-[#6D6B63] text-lg">
                Under Tom&apos;s leadership, our fractional CFO and board
                advisory services provide expert guidance for your financial
                strategies.GG
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Team;
