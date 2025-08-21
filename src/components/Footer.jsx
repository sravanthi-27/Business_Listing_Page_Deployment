import React from "react";
import IconFacebook from "../assets/Vector.svg?url";
import IconInstagram from "../assets/mdi_instagram.svg?url";
import IconLinkedIn from "../assets/mdi_linkedin.svg?url";

const Footer = () => (
  <footer className="w-full bg-[#222] text-[#E0E0E0] font-montserrat pt-20 pb-10 px-15">
    <div className="hidden md:flex justify-start max-w-[1300px] mx-auto space-x-[145px] pl-[15px]">
      <div className="w-[156px]">
        <h3 className="text-[#E5E5E5] font-semibold text-[18px] mb-6">About Morselv</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-3">
          <p>About Us</p>
          <p>Careers</p>
          <p>Help & Support</p>
          <p>Blog</p>
        </div>
      </div>

      <div className="w-[153px]">
        <h3 className="text-[#E5E5E5] font-semibold text-[18px] mb-6">For Business</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-3">
          <p>List your business</p>
          <p>FAQs</p>
          <p>Pricing</p>
          <p>Support</p>
        </div>
      </div>

      <div className="w-[153px]">
        <h3 className="text-[#E5E5E5] font-semibold text-[18px] mb-6">Legal</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-3">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cancellation Policy</p>
          <p>Refund Policy</p>
        </div>
      </div>

      <div className="w-[500px]">
        <h3 className="text-[#E5E5E5] font-semibold text-[18px] mb-6">Contact Info</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-3">
          <p>+91-9818257300 | +91-8800802349</p>
          <p>hello@morselv.com</p>
          <p className="text-[#ADADAD] text-[12px] font-inter leading-relaxed">
            Corporate Office: Forntech Sphere Tech Pvt. Ltd.<br />
            TR-242, Sunefly Success Tower, Golf Course Extn Rd, Badenjanpur, Sec-65,<br />
            Gurdgram, Hayana Phn-123101
          </p>
        </div>
      </div>
    </div>

    <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-6 px-4 pt-0">
      <div className="pl-10">
        <h3 className="text-[#E5E5E5] font-semibold text-[16px] mb-3">About Morselv</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-1">
          <p>About Us</p>
          <p>Careers</p>
          <p>Help & Support</p>
          <p>Blog</p>
        </div>
      </div>

      <div className="pl-6">
        <h3 className="text-[#E5E5E5] font-semibold text-[16px] mb-3">For Business</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-1">
          <p>List your business</p>
          <p>FAQs</p>
          <p>Pricing</p>
          <p>Support</p>
        </div>
      </div>

      <div className="pl-10">
        <h3 className="text-[#E5E5E5] font-semibold text-[16px] mb-3 pt-6">Legal</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-1">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cancellation Policy</p>
          <p>Refund Policy</p>
        </div>
      </div>

      <div className="pl-6">
        <h3 className="text-[#E5E5E5] font-semibold text-[16px] mb-3 pt-6">Contact Info</h3>
        <div className="text-[#E0E0E0] font-normal text-[14px] space-y-1">
          <p>+91-9818257300 | +91-8800802349</p>
          <p>hello@morselv.com</p>
          <p className="text-[#ADADAD] text-[12px] font-inter leading-tight">
            Corporate Office: Forntech Sphere Tech Pvt. Ltd.<br />
            TR-242, Sunefly Success Tower, Golf Course Extn<br />
            Rd, Badenjanpur, Sec-65, Gurdgram, Hayana<br />
            Phn-123101
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center space-x-8 mt-10 md:mt-16 pt-6">
      <img src={IconFacebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
      <img src={IconInstagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
      <img src={IconLinkedIn} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
    </div>

    <p className="md:hidden text-[#ADADAD] text-[12px] font-inter text-center mt-6">
      Copyright © 2025
    </p>

    <div className="hidden md:block">
      <p className="text-[#ADADAD] text-[12px] font-inter text-center mt-8">
        © 2025 Mor-Selv | Femtech Sphere Tech Pvt. Ltd. | All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;