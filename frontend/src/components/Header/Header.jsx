import React from 'react';

const Header = () => {
  return (
    <div
      className='h-[34vw] my-8 mx-auto bg-no-repeat bg-contain relative rounded-2xl overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn md:max-w-[45%] sm:max-w-[65%]">
        <h2 className="font-medium text-white text-[max(4.5vw,22px)] leading-tight">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] hidden sm:block">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum vero possimus expedita fugiat, tenetur modi neque accusamus. Error impedit repellat voluptatibus adipisci cumque accusantium similique harum ipsam? Magni, corporis omnis!
        </p>
        <button className="border-none text-slate-700 font-medium px-6 py-2 sm:px-8 sm:py-3 bg-white rounded-full text-[max(1vw,13px)] hover:bg-slate-100 transition-colors shadow-md">
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header
