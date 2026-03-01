import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='admin-navbar flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <div className='flex items-baseline gap-1'>
          <h1 className="text-2xl font-black text-primary tracking-tighter italic">eatnow</h1>
          <div className='w-1.5 h-1.5 rounded-full bg-primary mb-1'></div>
        </div>
        <div className='hidden sm:block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20'>
          Admin Panel
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <img className='w-10 h-10 rounded-full border-2 border-primary/20 p-0.5' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar
