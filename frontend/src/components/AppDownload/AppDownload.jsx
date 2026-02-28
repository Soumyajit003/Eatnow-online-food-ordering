import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='m-auto mt-24 text-[max(3vw,20px)] text-center font-medium' id='app-download'>
      <p className="text-slate-800 leading-tight">For Better Experience Download <br /> <span className="text-primary font-bold">Yummy App</span></p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img src={assets.play_store} alt="" className="w-[max(30vw,120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105" />
        <img src={assets.app_store} alt="" className="w-[max(30vw,120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105" />
      </div>
    </div>
  )
}

export default AppDownload
