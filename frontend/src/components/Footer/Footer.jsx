import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-[8vw] py-5 pt-20 mt-24" id="footer">
      <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-20">
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" className="cursor-pointer" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            molestiae? Quaerat id aspernatur dolorem harum ut nobis qui. In,
            debitis. Temporibus quo molestiae aut placeat, harum qui et?
            Aliquid, nulla!
          </p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="" className="w-10 mr-4 cursor-pointer hover:scale-110 transition-transform" />
            <img src={assets.twitter_icon} alt="" className="w-10 mr-4 cursor-pointer hover:scale-110 transition-transform" />
            <img src={assets.linkedin_icon} alt="" className="w-10 mr-4 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-xl font-bold">COMPANY</h2>
          <ul className="flex flex-col gap-2.5">
            <li className="list-none mb-2.5 cursor-pointer hover:text-white transition-colors">Home</li>
            <li className="list-none mb-2.5 cursor-pointer hover:text-white transition-colors">About us</li>
            <li className="list-none mb-2.5 cursor-pointer hover:text-white transition-colors">Delivery</li>
            <li className="list-none mb-2.5 cursor-pointer hover:text-white transition-colors">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-xl font-bold">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2.5">
            <li className="list-none mb-2.5 cursor-pointer hover:text-white transition-colors">+91 984538497</li>
            <li className="list-none mb-2.5 cursor-pointer hover:text-white transition-colors">yummy@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-5 bg-gray-500 border-none" />
      <p className="footer-copyright text-center">Copyright 2024 Yummy.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
