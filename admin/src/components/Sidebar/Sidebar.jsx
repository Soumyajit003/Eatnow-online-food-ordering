import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-1/5 min-h-[calc(100vh-80px)] border-r border-gray-100 p-6 flex flex-col gap-8'>
      <div className="flex flex-col gap-4">
        <NavLink to='/add' className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <img src={assets.add_icon} alt="" className="w-5" />
          <p className='hidden md:block font-medium'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <img src={assets.order_icon} alt="" className="w-5" />
          <p className='hidden md:block font-medium'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <img src={assets.order_icon} alt="" className="w-5" />
          <p className='hidden md:block font-medium'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
