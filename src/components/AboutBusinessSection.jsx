import React from "react";

const AboutBusinessSection = () => {
  return (
    <>
      {/* Desktop Version (xl and above) - Business description section */}
      <div className="hidden xl:block relative bg-white mx-auto mt-10" style={{ maxWidth: '1280px', width: '100%' }}>
        <div className="w-full mb-12">
          <h2 className="text-black font-inter text-[32px] font-semibold mb-6">
            About the business
          </h2>
          <div className="text-[#585858] font-inter text-[16px] leading-normal max-w-7xl">
            <p className="mb-4">
              बीयां (Beeyan) a SEED of yoga. 'Beeyan' is derived from an Awadhi
              word 'beeya' that means 'beej' in Hindi & seed in English.{" "}
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
        <div className="w-full h-px bg-[#A2A2A2] mt-[51.98px]"></div>
      </div>

      {/* Laptop Version (lg) - For screens between 1024px and 1279px */}
      <div className="hidden lg:block xl:hidden relative bg-white mx-auto mt-8 w-full px-6">
        <div className="w-full mb-10">
          <h2 className="text-black font-inter text-[28px] font-semibold mb-5">
            About the business
          </h2>
          <div className="text-[#585858] font-inter text-[15px] leading-normal">
            <p className="mb-4">
              बीयां (Beeyan) a SEED of yoga. 'Beeyan' is derived from an Awadhi
              word 'beeya' that means 'beej' in Hindi & seed in English.{" "}
            </p>
            <p className="mb-4">
              An initiative by Sangeeta, a design graduate from NIFT and an
              advertising professional for nearly a decade. Having spent 10
              years in the industry, she intimately understands the unique struggles and stress that come with modern lifestyle.
            </p>
            <p>
              She has now devoted her life to imparting classical Hatha yoga to
              the world, recognizing the transformative power it holds for
              individuals seeking balance amidst the challenges of modern living.
            </p>
          </div>
        </div>
        <button className="bg-[#121212] text-white px-8 py-3 rounded-lg font-montserrat text-[18px] font-medium mb-8">
          Contact
        </button>
        <div className="w-full h-px bg-[#A2A2A2] mt-10"></div>
      </div>

      {/* Tablet Version (md) - For screens between 768px and 1023px */}
      <div className="hidden md:block lg:hidden bg-white px-6 mt-6">
        <h2 className="text-black font-inter text-[24px] font-semibold mt-6 mb-4">
          About the business
        </h2>
        <div className="text-[#585858] font-inter text-[15px] leading-normal space-y-3 mb-6">
          <p>
            बीयां (Beeyan) a SEED of yoga. 'Beeyan' is derived from an Awadhi
            word 'beeya' that means 'beej' in Hindi & seed in English.
          </p>
          <p>
            An initiative by Sangeeta, a design graduate from NIFT and an
            advertising professional for nearly a decade. Having spent 10
            years in the industry, she intimately understands the unique struggles and stress that come with modern lifestyle.
          </p>
          <p>
            She has now devoted her life to imparting classical Hatha yoga to
            the world, recognizing the transformative power it holds for
            individuals seeking balance amidst the challenges of modern living.
          </p>
        </div>
        <button className="bg-[#121212] text-white px-8 py-3 rounded-lg font-montserrat text-[16px] font-medium mb-8">
          Contact
        </button>
        <div className="w-full h-px bg-[#A2A2A2] mb-8"></div>
      </div>

      {/* Mobile Version (sm and below) - Compact business info */}
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
        <button className="bg-black text-white px-6 py-3 rounded-md font-montserrat text-[14px] font-bold mb-8">
          Contact
        </button>
        <div className="w-full h-px bg-[#A2A2A2] mb-8"></div>
      </div>
    </>
  );
};

export default AboutBusinessSection;