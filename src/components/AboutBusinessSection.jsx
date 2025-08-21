import React from "react";

const AboutBusinessSection = () => {
  return (
    <>
      {/* Desktop Version - Business description section */}
      <div className="hidden md:block relative bg-white max-w-[1280px] mt-8 mr-[100px] ml-[100px]">
        <div className="w-full mb-12">
          <h2 className="text-black font-inter text-[32px] font-semibold mb-6">
            About the business
          </h2>
          <div className="text-[#585858] font-inter text-[16px] leading-normal max-w-7xl">
            <p className="mb-4">
              बीयां (Beeyan) a SEED of yoga. ‘Beeyan’ is derived from an Awadhi
              word 'beeya' that means ‘beej’ in Hindi & seed in English.{" "}
            </p>
            <p>
              An initiative by Sangeeta, a design graduate from NIFT and an
              advertising professional for nearly a decade. Having spent 10
              years in the industry, she intimately
            </p>
            <p>
              understands the unique struggles and stress that come with modern
              lifestyle.
            </p>{" "}
            <br />
            <p>
              She has now devoted her life to imparting classical Hatha yoga to
              the world, recognizing the transformative power it holds for
              individuals seeking balance amidst the <br />
              challenges of modern living.
            </p>
          </div>
        </div>
        <button className="bg-[#121212] text-white px-10 py-4 rounded-lg font-montserrat text-[20px] font-medium mb-8">
          Contact
        </button>
        <div className="w-[1300px] h-px bg-[#A2A2A2] mt-[51.98px]"></div>
      </div>

      {/* Mobile Version - Compact business info */}
      <div className="block md:hidden bg-white px-4">
        <h2 className="text-black font-inter text-[20px] font-semibold mt-6 mb-4">
          About the business
        </h2>
        <div className="text-[#585858] font-inter text-[14px] leading-normal space-y-2 mb-6">
          <p>
            बीयां (Beeyan) a SEED of yoga. 'Beeyan' is derived from an Awadhi
            word 'beeya' that means 'beej' in Hindi &amp; seed in English. An
            initiative by Sangeeta, a design graduate from NIFT and an
            advertising professional for nearly a decade.
          </p>
          <p>
            She has now devoted her life to imparting classical Hatha yoga to
            the world, recognizing the transformative power it holds for
            individuals seeking balance amidst the challenges of modern living.
          </p>
        </div>
        <button className="bg-black text-[12px] text-white px-6 py-3 rounded-md font-bold mb-8">
          Contact
        </button>
        <div className="w-[350px] h-px bg-[#A2A2A2] mb-8"></div>
      </div>
      <div
        className="absolute left-0 flex gap-[22px]"
        style={{
          top: "0",
          fontFamily: '"Sukhumvit Set", "Kanit", sans-serif',
          width: "100%",
          maxWidth: "1280px",
          padding: "0 120px",
          boxSizing: "border-box",
        }}
      ></div>
      <div className=" md:hidden w-[345px] ml-5  h-px bg-[#A2A2A2] "></div>
    </>
  );
};
export default AboutBusinessSection;
