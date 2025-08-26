// src/components/DealPopup.jsx
import React, { useState, useRef, useEffect } from "react";

const ServicePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: ""
  });

  const popupRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: "", email: "", phoneNumber: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else {
      // Regex to check if the string contains only digits (0-9)
      const numberRegex = /^\d+$/; 
      if (!numberRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid phone number with only numbers.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      onClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setFormData({ fullName: "", email: "", phoneNumber: "" });
      setErrors({ fullName: "", email: "", phoneNumber: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 mt-[70px] bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center w-[361px] md:w-[550px] p-[31px] md:px-[16px] md:p-[31px] rounded-[20px] border-2 border-[#7E7E7E] md:border-[#FECD8C] bg-[#FBFBFB] shadow-[-3px_0px_23.6px_0px_rgba(0,0,0,0.25)]"
      >
        <h2 className="text-[#4A4A4A] font-montserrat text-[24px] md:text-[28px] font-semibold mt-[31px]  text-center">
          Book Your Appointment
        </h2>

        <p className="text-[#5B5B5B] font-inter text-[12px] md:text-[14px] font-normal leading-[22px] text-center">
          Leave your details and we’ll get in touch to confirm.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-[11px]"
        >
          <div className="w-full mt-[43px]">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full p-[15px] px-[20px] rounded-[10px] border bg-white text-[#6D6D6D] font-inter text-[16px] font-medium placeholder-[#6D6D6D] focus:outline-none focus:ring-1 focus:ring-black ${
                errors.fullName ? "border-red-500" : "border-[#6D6D6D]"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-[15px] mt-[11px] px-[20px] rounded-[10px] border bg-white text-[#6D6D6D] font-inter text-[16px] font-medium placeholder-[#6D6D6D] focus:outline-none focus:ring-1 focus:ring-black ${
                errors.email ? "border-red-500" : "border-[#6D6D6D]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full p-[15px] mt-[11px] px-[20px] rounded-[10px] border bg-white text-[#6D6D6D] font-inter text-[16px] font-medium placeholder-[#6D6D6D] focus:outline-none focus:ring-1 focus:ring-black ${
                errors.phoneNumber ? "border-red-500" : "border-[#6D6D6D]"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex h-[60px] justify-center items-center rounded-[10px] bg-[#121212] px-[44px] py-[16px] text-[#FFF] font-montserrat text-[20px] font-medium leading-[22px] hover:bg-black transition-colors mt-[43px] mb-[31px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicePopup;
