import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className='relative pt-20 pb-32 mt-20 overflow-hidden'>
      <div className='app-container flex flex-col md:flex-row items-center gap-12'>
        {/* Left Content */}
        <div className='flex-1 flex flex-col gap-8 animate-fadeIn text-center md:text-left z-10'>
          <h2 className="font-bold text-white text-[max(4.5vw,40px)] leading-[1.1] tracking-tight">
            Order Your Favourite <br /> Food Anytime
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-xl">
            Craving delicious food? We've got you covered! Order now and enjoy your favorite meals delivered to your door.
          </p>

          <div className='relative max-w-2xl w-full mx-auto md:mx-0'>
            <div className='bg-white rounded-full p-2 flex items-center shadow-2xl'>
              <input
                type="text"
                placeholder="Search for restaurants or dishes"
                className='flex-1 px-6 bg-transparent outline-none text-red-dark placeholder:text-gray-400 font-medium'
              />
              <button className='btn-gradient !px-6 !py-3 !rounded-full shrink-0 flex items-center gap-2'>
                <Search size={20} />
                <span className='hidden sm:inline'>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Food Collage */}
        <div className='flex-1 relative animate-fadeIn' style={{ animationDelay: '200ms' }}>
          <div className='relative w-full aspect-square max-w-md mx-auto'>
            {/* Using a placeholder for the collage as requested */}
            <img
              src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148708212.jpg"
              alt="Food Collage"
              className='w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/10'
            />
            {/* Floating elements for effect */}
            <div className='absolute -top-6 -right-6 glass-card p-4 animate-bounce' style={{ animationDuration: '3s' }}>
              <span className='text-3xl'>🍕</span>
            </div>
            <div className='absolute -bottom-6 -left-6 glass-card p-4 animate-bounce' style={{ animationDuration: '4s' }}>
              <span className='text-3xl'>🍔</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180'>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block w-[calc(100%+1.3px)] h-[80px]'>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(0,0,0,0.15)"></path>
        </svg>
      </div>
    </div>
  )
}

export default Header
