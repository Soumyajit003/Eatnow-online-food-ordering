import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-red-dark/30 backdrop-blur-xl border-t border-white/5 text-white/70 py-16 mt-24" id="footer">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-24 mb-16">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-3xl font-bold text-white tracking-tight">eatnow</h1>
            <p className="max-w-md leading-relaxed">
              We bring the best food from your favorite local restaurants right to your doorstep. Quality, speed, and taste are our priorities.
            </p>
            <div className="flex gap-5">
              {/* Social icons could be added here, using Lucide-react for consistency */}
              <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300'>
                <span className='text-sm'>FB</span>
              </div>
              <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300'>
                <span className='text-sm'>TW</span>
              </div>
              <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300'>
                <span className='text-sm'>LI</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Company</h2>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-accent transition-colors">Home</li>
              <li className="cursor-pointer hover:text-accent transition-colors">About us</li>
              <li className="cursor-pointer hover:text-accent transition-colors">Delivery</li>
              <li className="cursor-pointer hover:text-accent transition-colors">Privacy policy</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Get in touch</h2>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-accent transition-colors">+91 984538497</li>
              <li className="cursor-pointer hover:text-accent transition-colors">eatnow@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-8"></div>
        <p className="text-center text-sm font-medium">Copyright 2026 eatnow.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
