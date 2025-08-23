import React from "react";

const ServiceDetail = () => {
  return (
    <div className="pt-10 flex mx-auto flex-col w-full px-3 sm:px-4 md:px-5">
      {/* Desktop Version (xl and above) - Yoga services offerings */}
      <div className="hidden xl:block relative mt-8  mx-auto" style={{ maxWidth: '1280px', width: '100%' }}>
        <h2 className="text-[#2D2D2D] mt-30 font-montserrat font-semibold text-[32px] mb-6" style={{ lineHeight: '44.8px' }}>
          Main Offerings
        </h2>

        <div className="rounded-[20px] bg-[#F3D0A1] p-8 mb-[100px]" style={{ width: '100%', height: '654px' }}>
          {[
            {
              title: "YOGASANAS WORKSHOP",
              desc: (
                <>
                  Yogasanas are physical postures that help transform the body
                  and mind into a possibility for wellbeing. Offered as
                  <br />a set of 21 powerful postures, they enhance health and
                  inner balance.
                </>
              ),
            },
            {
              title: "SERVICE 2 – ₹499",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹699",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹1299",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
          ].map((service, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start gap-4">
                <div className="max-w-4xl">
                  <h3 className="text-[#121212] font-montserrat text-[24px] font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[#121212] font-montserrat text-[16px] mt-[14px]">
                    {service.desc}
                  </p>
                </div>
                <button className="bg-white text-black rounded-lg font-montserrat text-[16px] font-semibold py-4 mt-6 w-[200px] flex-shrink-0 hover:bg-gray-100 transition">
                  BOOK NOW
                </button>
              </div>
              {idx < 3 && <div className="w-full h-px bg-white my-[38px]"></div>}
            </div>
          ))}
        </div>
        <div className="h-px bg-[#A2A2A2] mb-10 " style={{ width: '100%' }}></div>
      </div>

      {/* Laptop Version (lg) - For screens between 1024px and 1279px */}
      <div className="hidden lg:block xl:hidden relative mt-8 mx-auto w-full px-2">
        <h2 className="text-[#2D2D2D] mt-30 font-montserrat font-semibold text-[28px] mb-6">
          Main Offerings
        </h2>

        <div className="rounded-[20px] bg-[#F3D0A1] p-8 mb-12 w-full">
          {[
            {
              title: "YOGASANAS WORKSHOP",
              desc: (
                <>
                  Yogasanas are physical postures that help transform the body
                  and mind into a possibility for wellbeing. Offered as
                  <br />a set of 21 powerful postures, they enhance health and
                  inner balance.
                </>
              ),
            },
            {
              title: "SERVICE 2 – ₹499",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹699",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹1299",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
          ].map((service, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start mb-4">
                <div className="max-w-3xl">
                  <h3 className="text-[#121212] font-montserrat text-[20px] font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[#121212] font-montserrat text-[14px] mt-[13px]">
                    {service.desc}
                  </p>
                </div>
                <button className="bg-white text-black rounded-lg font-montserrat text-[14px] font-semibold py-3 px-6 mt-6 flex-shrink-0 hover:bg-gray-100 transition whitespace-nowrap">
                  BOOK NOW
                </button>
              </div>
              {idx < 3 && <div className="w-full h-px bg-white my-[35px]"></div>}
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-[#A2A2A2] mb-10"></div>
      </div>

      {/* Tablet Version (md) */}
      <div className="hidden md:block lg:hidden w-full">
        <h2 className="text-black font-inter font-bold text-[24px] mb-6">
          Main Offerings
        </h2>
        <div className="bg-[#F3D0A1] rounded-xl p-6 space-y-6 w-full">
          {[
            {
              title: "YOGASANAS WORKSHOP",
              desc: "Yogasanas are physical postures that help transform the body and mind into a possibility for wellbeing. Offered as a set of 21 powerful postures, they enhance health and inner balance.",
            },
            {
              title: "SERVICE 2 – ₹499",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹699",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹1299",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
          ].map((service, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#121212] font-montserrat text-[18px] font-bold uppercase">
                  {service.title}
                </h3>
                <p className="text-[#121212] font-montserrat text-[14px] mt-[12px]">
                  {service.desc}
                </p>
                <button className="bg-white text-black rounded-lg text-sm font-semibold px-8 py-2 w-max hover:bg-gray-100 transition">
                  BOOK NOW
                </button>
              </div>
              {idx < 3 && <div className="my-[30px] h-px bg-white"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="w-full h-px bg-[#A2A2A2] mt-8"></div>
      </div>

      {/* Mobile Version (sm and below) - Compact services listing */}
      <div className="block md:hidden w-full">
        <h2 className="text-black font-inter font-bold text-[20px] mb-4">
          Main Offerings
        </h2>
        <div className="bg-[#F3D0A1] rounded-lg p-4 space-y-4 w-full min-h-[869px] h-auto">
          {[
            {
              title: "YOGASANAS WORKSHOP",
              desc: "Yogasanas are physical postures that help transform the body and mind into a possibility for wellbeing. Offered as a set of 21 powerful postures, they enhance health and inner balance.",
            },
            {
              title: "SERVICE 2 – ₹499",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹699",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
            {
              title: "SERVICE 3 – ₹1299",
              desc: "A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.",
            },
          ].map((service, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#121212] font-montserrat text-[18px] font-bold uppercase mt-[29px]">
                  {service.title}
                </h3>
                <p className="text-[#121212] font-montserrat text-[14px] mt-2">
                  {service.desc}
                </p>
                <button className="bg-white text-black rounded-md text-sm font-semibold px-12 py-2 w-max hover:bg-gray-100 transition mb-[29px]">
                  BOOK NOW
                </button>
              </div>
              {idx < 3 && <div className="my-2 h-px bg-white"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="w-full h-px bg-[#A2A2A2] mt-6"></div>
      </div>
    </div>
  );
};

export default ServiceDetail;