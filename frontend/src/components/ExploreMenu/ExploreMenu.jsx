import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-5 py-4' id='explore-menu'>
      <h1 className="text-[#262626] font-medium text-2xl sm:text-3xl">Explore our menu</h1>
      <p className='max-w-full sm:max-w-[60%] text-[#808080] text-[14px] sm:text-base leading-relaxed'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden scroll-smooth">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className="min-w-[80px] cursor-pointer shrink-0 transition-transform hover:scale-105 active:scale-95 duration-200"
            >
              <img
                className={`w-[7.5vw] min-w-[80px] rounded-full object-cover transition-all duration-300 ${category === item.menu_name ? "border-4 border-primary p-0.5" : ""}`}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className={`mt-3 text-[#747474] text-[max(1.4vw,16px)] font-medium ${category === item.menu_name ? "text-primary border-b-2 border-primary inline-block pb-1" : ""}`}>
                {item.menu_name}
              </p>
            </div>
          )
        })}
      </div>
      <hr className="my-2 h-[2px] bg-slate-200 border-none" />
    </div>
  )
}

export default ExploreMenu
