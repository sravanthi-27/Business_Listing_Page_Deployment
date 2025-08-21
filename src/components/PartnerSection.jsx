import React from 'react';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';

const PartnerSection = () => {
  return (
    <>
      {/* Desktop Version (xl and above) - 3 images in one row */}
      <div className="hidden xl:block relative w-full h-[305.455px] my-[95.44px]">
        <div className="flex justify-center gap-[22px] font-['Sukhumvit_Set','Kanit',sans-serif]">
          {/* Wide banner image */}
          <div
            className="flex-shrink-0 w-[630px] h-[305.455px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${b1})` }}
          />

          {/* Square image 1 */}
          <div
            className="flex-shrink-0 w-[305px] h-[305px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${b2})` }}
          />

          {/* Square image 2 */}
          <div
            className="flex-shrink-0 w-[305px] h-[305px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${b3})` }}
          />
        </div>
      </div>

      {/* Laptop and Tablet Version (md & lg) - Aligned layout */}
      <div className="hidden md:block xl:hidden w-full py-8">
        <div className="flex flex-col gap-5 mx-auto w-[90%] max-w-[1200px]">
          {/* First image */}
          <div
            className="w-full aspect-[33/16] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${b1})` }}
          />
          
          {/* Second and Third images */}
          <div className="flex gap-5 w-full">
            <div
              className="w-[calc(50%-10px)] aspect-square bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${b2})` }}
            />
            <div
              className="w-[calc(50%-10px)] aspect-square bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${b3})` }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Version (sm and below) - Stacked layout */}
      <div className="block md:hidden w-full py-6 px-4">
        <div className="flex flex-col items-center gap-5 mx-auto max-w-[95vw]">
          {/* Top banner */}
          <div
            className="w-full aspect-[33/16] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${b1})` }}
          />

          {/* Bottom images */}
          <div className="flex gap-4 justify-between w-full">
            <div
              className="w-[48%] aspect-square bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${b2})` }}
            />
            <div
              className="w-[48%] aspect-square bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${b3})` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;