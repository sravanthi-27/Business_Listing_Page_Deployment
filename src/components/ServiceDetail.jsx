import React from "react";


const ServiceDetail = () => {
  return (
    <div className="pt-10 flex mx-auto flex-col">
      {/* Desktop Version - Yoga services offerings */}
      <div className="hidden md:block relative mt-8 ml-[100px] mr-[100px]">
        <h2 className="text-black mt-30 font-inter font-semibold text-[32px] mb-6">
          Main Offerings
        </h2>

        <div className="w-full rounded-2xl bg-[#F3D0A1] p-8 mb-12">
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
                <div className="max-w-4xl">
                  <h3 className="text-[#121212] font-montserrat text-[24px] font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[#121212] font-montserrat text-[16px] mt-2">
                    {service.desc}
                  </p>
                </div>
                <button className="bg-white text-black rounded-lg font-montserrat text-[16px] font-semibold py-4 mt-6 w-[200px] flex-shrink-0 hover:bg-gray-100 transition">
                  BOOK NOW
                </button>
              </div>
              {idx < 3 && <div className="w-full h-px bg-white my-8"></div>}
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-[#A2A2A2] mb-10"></div>
      </div>

      {/* Mobile Version - Compact services listing */}
      <div className="block md:hidden px-4">
        <h2 className="text-black font-inter font-bold text-[20px] mb-4">
          Main Offerings
        </h2>
        <div className="bg-[#F3D0A1] rounded-lg p-4 space-y-4">
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
                <h3 className="text-[#121212] font-montserrat text-[18px] font-bold uppercase">
                  {service.title}
                </h3>
                <p className="text-[#121212] font-montserrat text-[14px]">
                  {service.desc}
                </p>
                <button className="bg-white text-black rounded-md text-sm font-semibold px-12 py-2 w-max hover:bg-gray-100 transition">
                  BOOK NOW
                </button>
              </div>
              {idx < 3 && <div className="h-px bg-white"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="w-full h-px bg-[#A2A2A2] mt-6"></div>
      </div>

      
    </div>
  );
};

export default ServiceDetail;