import React from 'react';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';


const PartnerSection = () => {
  return (
    <>
      {/* Desktop Version (1280px+) - 3 images in one row */}
      <div className="hidden xl:block relative pl-80 pr-80 w-full h-[305.455px] my-[95.44px]">
        <div className="flex justify-center gap-[20px] font-['Sukhumvit_Set','Kanit',sans-serif]">
          {/* Wide banner image */}
          <div
            className="flex-shrink-0 w-[630px] h-[305.455px] bg-cover bg-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200 aspect-[2/1]"
            style={{ backgroundImage: `url(${b1})` }}
          />

          {/* Square image 1 */}
          <div
            className="flex-shrink-0 w-[305px] h-[305px] bg-cover bg-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200 aspect-square"
            style={{ backgroundImage: `url(${b2})` }}
          />

          {/* Square image 2 */}
          <div
            className="flex-shrink-0 w-[305px] h-[305px] bg-cover bg-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200 aspect-square"
            style={{ backgroundImage: `url(${b3})` }}
          />
        </div>
      </div>

      {/* Tablet Version (768px-1279px) - 1 banner + 2 squares below */}
      <div className="hidden md:block xl:hidden w-full py-8">
        <div className="mx-auto px-6 max-w-5xl">
          {/* Top banner */}
          <div className="w-full h-full mb-6 rounded-xl overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.1)] border border-gray-200 aspect-[2/1]">
            <img
              src={b1}
              alt="Banner"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom images */}
          <div className="flex gap-6 justify-between">
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.1)] border border-gray-200">
              <img
                src={b2}
                alt="Content 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.1)] border border-gray-200">
              <img
                src={b3}
                alt="Content 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version (<768px) - Stacked layout */}
      <div className="block md:hidden w-full -mt-2 mb-6 px-4">
        {/* Top banner */}
        <div className="w-full aspect-[33/16] mb-4 rounded-xl overflow-hidden shadow-[0_1.88px_8.8px_rgba(0,0,0,0.1)] border border-gray-200">
          <img
            src={b1}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom images */}
        <div className="flex gap-4 w-full">
          <div className="w-1/2 aspect-square rounded-xl overflow-hidden shadow-[0_1.88px_8.8px_rgba(0,0,0,0.1)] border border-gray-200">
            <img
              src={b2}
              alt="Content 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 aspect-square rounded-xl overflow-hidden shadow-[0_1.88px_8.8px_rgba(0,0,0,0.1)] border border-gray-200">
            <img
              src={b3}
              alt="Content 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;