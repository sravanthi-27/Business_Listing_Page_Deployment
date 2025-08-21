import React, { useState } from "react";
import image1 from "../assets/1a42454ed0b5f558b2ab7f2478aefbb4d03a89c7.jpg";
import image2 from "../assets/LunaHeal.jpg";
import image3 from "../assets/Bloom Haven.jpg";

const HeaderSectionService = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: image1 },
    { image: image2, special: true },
    { image: image3 },
  ];

  const goToNextSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));
  };

  const goToPrevSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((s) => Math.max(s - 1, 0));
  };

  const goToSlide = (i) => setCurrentSlide(i);

  return (
    <div className="w-full flex justify-center">
      {/* Desktop Version (lg and above) */}
      <div className="hidden lg:block relative bg-white w-full max-w-[1280px] mt-[125px] px-6 lg:-ml-6">
        <div className="flex w-full items-start justify-center pt-8">
          {/* Image Slider Container */}
          <div className="w-[432px] h-[432px] flex-shrink-0 rounded-[20px] border border-[#888] overflow-hidden">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
                >
                  <img
                    src={slide.image}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              ))}
              {/* Increased z-index to ensure arrows are visible on all images */}
              <button
                onClick={goToPrevSlide}
                aria-label="Previous slide"
                className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full ${currentSlide === 0 ? "opacity-60 cursor-default" : "hover:scale-105"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                  <path d="M3.18811 18.5369L11.4379 26.7866L13.5 24.7246L6.2812 17.5058L13.5 10.2871L11.4379 8.22498L3.18811 16.4748C2.91466 16.7482 2.76111 17.1191 2.76111 17.5058C2.76111 17.8925 2.91466 18.2634 3.18811 18.5369Z" fill="white"/>
                </svg>
              </button>
              <button
                onClick={goToNextSlide}
                aria-label="Next slide"
                className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full ${currentSlide === slides.length - 1 ? "opacity-60 cursor-default" : "hover:scale-105"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                  <path d="M14.8119 18.5369L6.56208 26.7866L4.5 24.7246L11.7188 17.5058L4.5 10.2871L6.56208 8.22498L14.8119 16.4748C15.0853 16.7482 15.2389 17.1191 15.2389 17.5058C15.2389 17.8925 15.0853 18.2634 14.8119 18.5369Z" fill="white"/>
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${i === currentSlide ? "w-3 h-3 bg-white" : "w-2.5 h-2.5 bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-grow ml-12">
            <h1 className="text-[#2D2D2D] font-montserrat uppercase font-bold text-[48px] leading-[67.2px] mb-6 text-left">
              Beeyan | Classical Hatha Yoga Center
            </h1>
            <p className="text-[#4D4D4D] font-montserrat text-base font-semibold underline underline-offset-2 mb-4">
              Fitness &amp; Body Movement / Yoga
            </p>
            <div className="flex items-center gap-2 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.5003 16.7708C16.5334 16.7708 15.6061 16.3867 14.9223 15.703C14.2386 15.0192 13.8545 14.0919 13.8545 13.125C13.8545 12.158 14.2386 11.2307 14.9223 10.547C15.6061 9.86324 16.5334 9.47913 17.5003 9.47913C18.4673 9.47913 19.3946 9.86324 20.0783 10.547C20.762 11.2307 21.1462 12.158 21.1462 13.125C21.1462 13.6037 21.0519 14.0778 20.8686 14.5202C20.6854 14.9625 20.4169 15.3644 20.0783 15.703C19.7398 16.0415 19.3379 16.3101 18.8955 16.4933C18.4532 16.6765 17.9791 16.7708 17.5003 16.7708ZM17.5003 2.91663C14.7929 2.91663 12.1964 3.99214 10.2819 5.90658C8.36751 7.82101 7.29199 10.4175 7.29199 13.125C7.29199 20.7812 17.5003 32.0833 17.5003 32.0833C17.5003 32.0833 27.7087 20.7812 27.7087 13.125C27.7087 10.4175 26.6331 7.82101 24.7187 5.90658C22.8043 3.99214 20.2077 2.91663 17.5003 2.91663Z" fill="#D4AF37"/>
              </svg>
              <p className="text-[#4D4D4D] font-montserrat text-base font-normal leading-[110%]">
                Sector 45, Gurugram, Haryana 122018, India
              </p>
            </div>
            <button className="inline-flex h-[60px] px-[44px] py-[20px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[10px] bg-[#121212] text-white font-montserrat text-[20px] font-medium leading-[110%] hover:bg-gray-800 transition">
              Contact
            </button>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="flex-shrink-0 mt-8">
          <h2 className="text-[#2D2D2D] font-montserrat font-semibold text-[20px] leading-[110%] uppercase mb-2">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat text-base font-normal leading-[140%] mb-4">
            Female Staff Available | Air Conditioned | Free Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
          <div className="w-full max-w-[1280px] mt-[61.98px] h-px bg-[#A2A2A2]"></div>
        </div>
      </div>

      {/* Tablet Version (md to lg) */}
      <div className="hidden md:flex lg:hidden flex-col items-center w-full max-w-[950px] mt-[125px] px-6">
        <div className="flex flex-col md:flex-row w-full items-start gap-8">
          {/* Image container for 769px to 1024px screens */}
          <div className="w-full md:w-[320px] min-w-[280px] h-auto aspect-square rounded-[20px] border border-[#888] overflow-hidden">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div key={index} className="absolute inset-0 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}>
                  <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover object-bottom"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              ))}
              <button onClick={goToPrevSlide} aria-label="Previous" className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full ${currentSlide === 0 ? "opacity-60 cursor-default" : "hover:scale-105"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                  <path d="M3.18811 18.5369L11.4379 26.7866L13.5 24.7246L6.2812 17.5058L13.5 10.2871L11.4379 8.22498L3.18811 16.4748C2.91466 16.7482 2.76111 17.1191 2.76111 17.5058C2.76111 17.8925 2.91466 18.2634 3.18811 18.5369Z" fill="white"/>
                </svg>
              </button>
              <button onClick={goToNextSlide} aria-label="Next" className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full ${currentSlide === slides.length - 1 ? "opacity-60 cursor-default" : "hover:scale-105"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                  <path d="M14.8119 18.5369L6.56208 26.7866L4.5 24.7246L11.7188 17.5058L4.5 10.2871L6.56208 8.22498L14.8119 16.4748C15.0853 16.7482 15.2389 17.1191 15.2389 17.5058C15.2389 17.8925 15.0853 18.2634 14.8119 18.5369Z" fill="white"/>
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, i) => (<button key={i} onClick={() => goToSlide(i)} className={`transition-all duration-300 rounded-full ${i === currentSlide ? "w-3 h-3 bg-white" : "w-2.5 h-2.5 bg-white/60"}`}/>))}
              </div>
            </div>
          </div>
          <div className="flex-grow pt-4">
            <h1 className="text-[#2D2D2D] font-montserrat uppercase font-bold text-[32px] leading-tight mb-4">
              Beeyan | Classical Hatha Yoga Center
            </h1>
            <p className="text-[#4D4D4D] font-montserrat text-sm font-semibold underline underline-offset-2 mb-3">
              Fitness &amp; Body Movement / Yoga
            </p>
            <div className="flex items-start gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.5003 16.7708C16.5334 16.7708 15.6061 16.3867 14.9223 15.703C14.2386 15.0192 13.8545 14.0919 13.8545 13.125C13.8545 12.158 14.2386 11.2307 14.9223 10.547C15.6061 9.86324 16.5334 9.47913 17.5003 9.47913C18.4673 9.47913 19.3946 9.86324 20.0783 10.547C20.762 11.2307 21.1462 12.158 21.1462 13.125C21.1462 13.6037 21.0519 14.0778 20.8686 14.5202C20.6854 14.9625 20.4169 15.3644 20.0783 15.703C19.7398 16.0415 19.3379 16.3101 18.8955 16.4933C18.4532 16.6765 17.9791 16.7708 17.5003 16.7708ZM17.5003 2.91663C14.7929 2.91663 12.1964 3.99214 10.2819 5.90658C8.36751 7.82101 7.29199 10.4175 7.29199 13.125C7.29199 20.7812 17.5003 32.0833 17.5003 32.0833C17.5003 32.0833 27.7087 20.7812 27.7087 13.125C27.7087 10.4175 26.6331 7.82101 24.7187 5.90658C22.8043 3.99214 20.2077 2.91663 17.5003 2.91663Z" fill="#D4AF37"/>
              </svg>
              <p className="text-[#4D4D4D] font-montserrat text-base">
                Sector 45, Gurugram, Haryana 122018, India
              </p>
            </div>
            <button className="inline-flex px-6 py-3 justify-center items-center gap-2 rounded-[10px] bg-[#121212] text-white font-montserrat text-base font-medium leading-[110%] mb-6">
              Contact
            </button>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-[#2D2D2D] font-montserrat font-semibold text-[18px] leading-[110%] uppercase mb-1">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat text-sm mb-6">
            Female Staff Available | Air Conditioned | Free Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
          <div className="w-full h-px bg-[#A2A2A2] mb-6"></div>
        </div>
      </div>

      {/* Mobile Version (sm and below) */}
      <div className="block md:hidden bg-white w-full">
        <div className="relative w-full overflow-hidden">
          <div className="w-full aspect-square flex-shrink-0 overflow-hidden">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div key={index} className="absolute inset-0 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}>
                  <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover object-bottom"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              ))}
              <button onClick={goToPrevSlide} aria-label="Previous" className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full ${currentSlide === 0 ? "opacity-60 cursor-default" : "hover:scale-105"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                  <path d="M3.18811 18.5369L11.4379 26.7866L13.5 24.7246L6.2812 17.5058L13.5 10.2871L11.4379 8.22498L3.18811 16.4748C2.91466 16.7482 2.76111 17.1191 2.76111 17.5058C2.76111 17.8925 2.91466 18.2634 3.18811 18.5369Z" fill="white"/>
                </svg>
              </button>
              <button onClick={goToNextSlide} aria-label="Next" className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full ${currentSlide === slides.length - 1 ? "opacity-60 cursor-default" : "hover:scale-105"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                  <path d="M14.8119 18.5369L6.56208 26.7866L4.5 24.7246L11.7188 17.5058L4.5 10.2871L6.56208 8.22498L14.8119 16.4748C15.0853 16.7482 15.2389 17.1191 15.2389 17.5058C15.2389 17.8925 15.0853 18.2634 14.8119 18.5369Z" fill="white"/>
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, i) => (<button key={i} onClick={() => goToSlide(i)} className={`transition-all duration-300 rounded-full ${i === currentSlide ? "w-3 h-3 bg-white" : "w-2 h-2 bg-white/60"}`}/>))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4">
          <h1 className="text-[#2D2D2D] font-montserrat uppercase font-bold text-[24px] leading-[33.6px] mb-2">
            Beeyan | Classical Hatha Yoga Center
          </h1>
          <p className="text-[#4D4D4D] font-montserrat text-[12px] font-semibold underline underline-offset-2 mb-3">
            Fitness &amp; Body Movement / Yoga
          </p>
          <div className="flex items-start gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 17" fill="none">
              <path d="M8.4 8.05002C7.93587 8.05002 7.49075 7.86565 7.16256 7.53746C6.83437 7.20927 6.65 6.76415 6.65 6.30002C6.65 5.8359 6.83437 5.39078 7.16256 5.06259C7.49075 4.7344 7.93587 4.55002 8.4 4.55002C8.86413 4.55002 9.30925 4.7344 9.63744 5.06259C9.96563 5.39078 10.15 5.8359 10.15 6.30002C10.15 6.52984 10.1047 6.7574 10.0168 6.96972C9.92884 7.18204 9.79994 7.37496 9.63744 7.53746C9.47494 7.69996 9.28202 7.82887 9.0697 7.91681C8.85738 8.00476 8.62981 8.05002 8.4 8.05002ZM8.4 1.40002C7.10044 1.40002 5.85411 1.91627 4.93518 2.8352C4.01625 3.75413 3.5 5.00046 3.5 6.30002C3.5 9.97503 8.4 15.4 8.4 15.4C8.4 15.4 13.3 9.97503 13.3 6.30002C13.3 5.00046 12.7838 3.75413 11.8648 2.8352C10.9459 1.91627 9.69956 1.40002 8.4 1.40002Z" fill="#D4AF37"/>
            </svg>
            <p className="text-[#4D4D4D] font-montserrat text-[12px] font-normal leading-[110%]">
              Sector 45, Gurugram (Area)
            </p>
          </div>
          <button className="inline-flex px-[30px] py-3 justify-center items-center gap-2 rounded-[10px] bg-[#121212] text-white font-montserrat text-[14px] font-medium leading-[110%] mb-6">
            Contact
          </button>
          <h2 className="text-[#2D2D2D] font-montserrat font-semibold text-[16px] leading-[110%] font-variant-all-small-caps mb-1">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat text-[12px] mb-6">
            Female Staff Available | Air Conditioned | Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
          <div className="w-full h-px bg-[#A2A2A2] lg:mb-6 "></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSectionService;