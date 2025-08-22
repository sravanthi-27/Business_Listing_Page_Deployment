import React, { useEffect, useRef, useState } from "react";
import LogoLeaf from "../assets/Group 1000001874.svg";
import IconArrow from "../assets/weui_arrow-filled (1).svg";
import IconLocation from "../assets/mdi_location.svg";
import MorselvImage from "../assets/Group 1000001876 copy.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuSlideIn, setMenuSlideIn] = useState(false);

  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [categoriesMounted, setCategoriesMounted] = useState(false);
  const [categoriesSlideIn, setCategoriesSlideIn] = useState(false);

  const [openNested, setOpenNested] = useState([]); // desktop nested dropdowns open state
  const [mobileOpenNested, setMobileOpenNested] = useState([]); // mobile nested toggles

  const [showDesktopCategories, setShowDesktopCategories] = useState(false);

  const menuRef = useRef(null);
  const categoriesRef = useRef(null);
  const desktopDiscoverRef = useRef(null);
  const logoRef = useRef(null);

  const categories = [
    {
      name: "Skin, hair & beauty",
      subcategories: [
        "Skin care clinic and dermatologists",
        "Hair Treatments & Salons",
        "Beauty Therapists & Makeup Artists",
        "Clean Beauty Products and DIY Tips",
      ],
    },
    {
      name: "Body Therapies",
      subcategories: [
        "Spa & Massage Therapists",
        "Physiotherapy & Pain Relief",
        "Ayurveda & Traditional Therapies",
        "Postpartum Body Care",
      ],
    },
    {
      name: "Fitness & Body Movement",
      subcategories: [
        "Personal Trainers & Gym Programs",
        "Yoga & Pilates Instructors",
        "Dance & Zumba classes",
        "Pre/Postnatal Fitness Programs",
      ],
    },
    {
      name: "Diet & Weight Management",
      subcategories: [
        "Nutritionists & Dieticians",
        "Weight Loss Programs",
        "PCOS/Thyroid Diet Plans",
        "Healthy Recipes & Meal Planning",
      ],
    },
    {
      name: "Health & Wellness",
      subcategories: [
        "Gynecologists & Intimate Health Clinics",
        "Hormonal Health Experts",
        "Preventive Screenings & Diagnostics",
        "Sexual Wellness & Hygiene Products",
      ],
    },
    {
      name: "Mental & Emotional Wellness",
      subcategories: [
        "Psychologists & Therapists",
        "Stress, Anxiety & Burnout Coaching",
        "Support Groups (e.g., postpartum, grief)",
        "Mindfulness & Meditation Sessions",
      ],
    },
    {
      name: "Career & Money Management",
      subcategories: [
        "Career Coaching & Mentorship",
        "Resume Help & Job Search Support",
        "Personal Finance & Budgeting Tools",
        "Small Business & Startup Support",
      ],
    },
    {
      name: "Travel & Relaxation",
      subcategories: [
        "Solo Travel for Women",
        "Wellness Retreats & Staycations",
        "Safe Travel Planning & Tips",
        "Travel Insurance & Emergency Help",
      ],
    },
    {
      name: "Friend, Fun & Community",
      subcategories: [
        "Local Meetups & Women's Circles",
        "Book Clubs, Hobby Groups & Events",
        "Volunteering & Social Impact",
        "Online Communities & Safe Forums",
      ],
    },
    {
      name: "Legal Services",
      subcategories: [
        "Women's Rights & Protection Lawyers",
        "Divorce, Custody & Property Legal Help",
        "Workplace Harassment Advisors",
        "Online Legal Consultations",
      ],
    },
    {
      name: "Parenting & Childcare",
      subcategories: [
        "Parenting Coaches & Workshops",
        "Pediatricians & Child Therapists",
        "Nanny & Babysitting Services",
        "Schooling & Learning Resources",
      ],
    },
    {
      name: "Other Services",
      subcategories: [
        "Emergency Helplines (Mental, Medical, Legal)",
        "Domestic Help & Elder Care",
        "Safe Commute & Cab Services",
        "Women-Friendly Home Maintenance",
      ],
    },
  ];

  const mainNavItems = [
    { name: "Home" },
    { name: "Discover services" },
    { name: "Deals & offers" },
    { name: "Contact" },
  ];

  const toggleNestedDropdown = (index) => {
    setOpenNested((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleMobileNested = (index) => {
    setMobileOpenNested((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    setMenuMounted(true);
    requestAnimationFrame(() => {
      setTimeout(() => setMenuSlideIn(true), 20);
    });
  };

  const closeMenu = () => {
    setMenuSlideIn(false);
    setCategoriesSlideIn(false);
    setTimeout(() => {
      setMenuMounted(false);
      setIsMenuOpen(false);
      setShowMobileCategories(false);
      setCategoriesMounted(false);
      setMobileOpenNested([]);
    }, 420);
  };

  const toggleMenu = () => {
    if (!menuMounted) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const openCategories = () => {
    setShowMobileCategories(true);
    setCategoriesMounted(true);
    requestAnimationFrame(() => {
      setTimeout(() => setCategoriesSlideIn(true), 10);
    });
  };

  const closeCategories = () => {
    setCategoriesSlideIn(false);
    setTimeout(() => {
      setCategoriesMounted(false);
      setShowMobileCategories(false);
      setMobileOpenNested([]);
    }, 420);
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      // Mobile menu will open and close if click is outside
      if (menuMounted && menuRef.current && !menuRef.current.contains(e.target) && !logoRef.current.contains(e.target)) {
        closeMenu();
      }

      // Desktop dropdown is open and close if click is outside
      if (showDesktopCategories && desktopDiscoverRef.current && !desktopDiscoverRef.current.contains(e.target)) {
        setShowDesktopCategories(false);
        setOpenNested([]);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuMounted, showDesktopCategories]);

  const menuTransitionStyle = {
    transition:
      "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.42s ease",
    transform: menuSlideIn ? "translateX(0)" : "translateX(-100%)",
    opacity: menuSlideIn ? 1 : 0,
  };

  const categoriesTransitionStyle = {
    transition:
      "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.42s ease",
    transform: categoriesSlideIn ? "translateX(0)" : "translateX(100%)",
    opacity: categoriesSlideIn ? 1 : 0,
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212] z-50 shadow-md backdrop-blur-[20px]">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between w-full h-[90px] px-8">
        {/* Logo */}
        <div
          className="flex items-center"
          style={{ display: "flex", alignItems: "flex-start", gap: "9.594px" }}
        >
          <img
            src={LogoLeaf}
            alt="Mor-Selv Logo"
            className="w-[63px] h-[29px]"
          />
          <img
            src={MorselvImage}
            alt="Mor-Selv Text"
            className="h-[20px] w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-[60px] md:gap-[30px] lg:gap-[60px] relative">
          <span className="text-white text-[16px] font-montserrat cursor-pointer hover:text-gray-300">
            Home
          </span>

          {/* Discover Services Dropdown */}
          <div className="relative" ref={desktopDiscoverRef}>
            <div
              className="flex items-center gap-1 cursor-pointer select-none"
              onClick={() => {
                setShowDesktopCategories(!showDesktopCategories);
                setOpenNested([]);
              }}
              style={{ textDecoration: "none" }}
            >
              <span className="text-white text-[16px] font-montserrat hover:text-gray-300">
                Discover services
              </span>
              <img
                src={IconArrow}
                alt="Arrow Icon"
                className={`w-[14px] h-[14px] transition-transform duration-200 rotate-90`}
              />
            </div>

            {showDesktopCategories && (
              <div
                className="absolute left-0 mt-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                style={{ borderRadius: "12px", padding: "8px", width: "300px" }}
              >
                {categories.map((category, index) => (
                  <React.Fragment key={category.name}>
                    <div
                      className={`flex items-center justify-between cursor-pointer px-3 py-2 rounded-md select-none ${
                        openNested.includes(index)
                          ? "bg-purple-200 text-purple-900"
                          : "hover:bg-purple-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleNestedDropdown(index);
                      }}
                    >
                      <span className="text-[#202020] font-montserrat text-[15px]">
                        {category.name}
                      </span>
                      {category.subcategories.length > 0 && (
                        <img
                          src={IconArrow}
                          alt="Arrow"
                          className="w-[14px] h-[12px] transition-transform duration-200"
                          style={{
                            transform: openNested.includes(index)
                              ? "rotate(270deg)"
                              : "rotate(90deg)",
                            filter: openNested.includes(index)
                              ? "invert(25%) sepia(75%) saturate(630%) hue-rotate(250deg) brightness(90%) contrast(85%)"
                              : "invert(40%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(60%) contrast(80%)",
                          }}
                        />
                      )}
                    </div>

                    {/* Submenu with smooth transition */}
                    <div
                      className={`overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
                        openNested.includes(index)
                          ? "max-h-[400px] opacity-100 py-2"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                      style={{ paddingLeft: "14px" }}
                    >
                      {category.subcategories.map((subcat) => (
                        <div
                          key={subcat}
                          className="flex items-center justify-between cursor-pointer text-[#606060] font-montserrat text-[14px] py-2 px-2 rounded-md hover:bg-purple-200 hover:text-purple-900 transition-colors"
                        >
                          {subcat}
                          <img
                            src={IconArrow}
                            alt="Arrow"
                            className="w-[12px] h-[12px] opacity-70"
                            style={{ transform: "rotate(90deg)" }}
                          />
                        </div>
                      ))}
                    </div>

                    {category.name === "Legal Services" && (
                      <div className="h-px bg-gray-200 my-1 mx-3"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <span className="text-white text-[16px] font-montserrat cursor-pointer hover:text-gray-300">
            Deals & offers
          </span>
          <span className="text-white text-[16px] font-montserrat cursor-pointer hover:text-gray-300">
            Contact
          </span>
        </nav>

        {/* Location */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={IconLocation}
            alt="Location Icon"
            className="w-[20px] h-[20px]"
          />
          <span className="text-white font-montserrat text-[16px] font-medium hover:text-gray-300">
            Gurugram, India
          </span>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between w-full h-[70px] px-4">
        <div
          className="flex items-center"
          onClick={() => {
            openMenu();
          }}
          ref={logoRef}
          style={{ display: "flex", alignItems: "flex-start", gap: "6.908px" }}
        >
          <img
            src={LogoLeaf}
            alt="Mor-Selv Logo"
            className="w-[50px] h-[23px]"
          />
          <img
            src={MorselvImage}
            alt="Mor-Selv Text"
            className="h-[18px] w-auto"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              toggleMenu();
            }}
            className="p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuMounted && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-[70px] left-0 bg-white px-4 py-3 space-y-2 z-50 shadow-lg"
          style={{
            width: "100vw",
            maxWidth: 280,
            maxHeight: "calc(100vh - 70px)",
            ...menuTransitionStyle,
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Main menu panel */}
          {!showMobileCategories && (
            <>
              {mainNavItems.map((item) => {
                if (item.name === "Discover services") {
                  return (
                    <div
                      key={item.name}
                      className="flex items-center justify-between cursor-pointer py-2 px-2 hover:bg-purple-200 hover:text-purple-900 rounded font-medium text-[#121212] text-[15px] font-montserrat"
                      onClick={() => {
                        openCategories();
                      }}
                    >
                      <span>{item.name}</span>
                      <img
                        src={IconArrow}
                        alt="Arrow Icon"
                        className="w-[12px] h-[12px] object-contain invert"
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </div>
                  );
                }
                return (
                  <span
                    key={item.name}
                    className="block text-[#121212] text-[15px] font-montserrat cursor-pointer font-medium py-2 px-2 rounded hover:text-gray-700"
                    onClick={() => {
                      // you can add click handling here if needed
                    }}
                  >
                    {item.name}
                  </span>
                );
              })}

              {/* Location appears at the bottom of main mobile menu */}
              <div className="flex items-center gap-2 cursor-pointer py-2 hover:text-gray-700">
                <img
                  src={IconLocation}
                  alt="Location Icon"
                  className="w-[20px] h-[20px] object-contain invert"
                />
                <span className="text-[#121212] font-montserrat text-[16px] font-medium">
                  Gurugram, India
                </span>
              </div>
            </>
          )}

          {/* Categories / Discover services panel */}
          {showMobileCategories && categoriesMounted && (
            <div
              ref={categoriesRef}
              style={{
                width: 260,
                ...categoriesTransitionStyle,
              }}
            >
              {/* Cross mark to go back */}
              <div
                className="flex items-center gap-2 cursor-pointer py-2 px-2 mb-2 rounded font-medium text-[#121212] text-[15px] font-montserrat hover:bg-gray-100"
                onClick={() => {
                  closeCategories();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="opacity-0">hidden</span>
              </div>

              {/* Categories list */}
              <div>
                {categories.map((category, index) => (
                  <div key={category.name} className="mb-2">
                    <div
                      className="flex items-center justify-between cursor-pointer py-2 px-2 hover:bg-purple-200 rounded font-medium text-[#121212] text-[15px] font-montserrat"
                      onClick={() => toggleMobileNested(index)}
                    >
                      <span>{category.name}</span>
                      {category.subcategories.length > 0 && (
                        <img
                          src={IconArrow}
                          alt="Arrow"
                          className="w-[12px] h-[12px] object-contain transition-transform duration-200"
                          style={{
                            transform: mobileOpenNested.includes(index)
                              ? "rotate(270deg)"
                              : "rotate(90deg)",
                          }}
                        />
                      )}
                    </div>

                    {/* Subcategories */}
                    <div
                      className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out px-4 ${
                        mobileOpenNested.includes(index)
                          ? "max-h-[300px] opacity-100 py-2"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      {category.subcategories.map((subcat) => (
                        <div
                          key={subcat}
                          className="flex items-center justify-between cursor-pointer text-[#606060] font-montserrat text-[14px] py-1 px-2 rounded hover:bg-purple-200 hover:text-purple-900 transition-colors"
                        >
                          {subcat}
                          <img
                            src={IconArrow}
                            alt="Arrow"
                            className="w-[10px] h-[10px] opacity-70 text-black"
                            style={{ transform: "rotate(90deg)" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;