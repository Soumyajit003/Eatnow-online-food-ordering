import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='py-12' id='explore-menu'>
      <div className='flex flex-col gap-4 mb-10'>
        <h1 className="text-white font-bold text-3xl sm:text-4xl tracking-tight">Popular Categories</h1>
        <div className='w-20 h-1.5 bg-accent rounded-full'></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className={`glass-card p-6 cursor-pointer flex flex-col items-center gap-4 transition-all duration-300 group hover:-translate-y-2 ${isActive ? "bg-white/20 border-accent shadow-[0_0_20px_rgba(254,180,123,0.3)]" : ""}`}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 ${isActive ? "bg-secondary-gradient" : "bg-white/5"}`}>
                <img
                  className="w-full h-full object-contain"
                  src={item.menu_image}
                  alt={item.menu_name}
                />
              </div>
              <p className={`font-semibold text-lg transition-colors ${isActive ? "text-accent" : "text-white/80 group-hover:text-white"}`}>
                {item.menu_name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
