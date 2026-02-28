import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { Search, ShoppingBasket, User, LogOut, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalConstAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className='w-full z-50 bg-white/80 backdrop-blur-md sticky top-0 shadow-sm transition-all duration-300'>
      <div className='app-container flex justify-between items-center py-4'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <img src={assets.logo} alt="Logo" className="h-8 sm:h-10 w-auto object-contain cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-600 font-medium text-lg">
          <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer hover:text-primary transition-colors ${menu === "home" ? "text-primary border-b-2 border-primary" : ""}`}>home</Link>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={`cursor-pointer hover:text-primary transition-colors ${menu === "menu" ? "text-primary border-b-2 border-primary" : ""}`}>menu</a>
          <a href='#app-download' onClick={() => setMenu("mobile-app")} className={`cursor-pointer hover:text-primary transition-colors ${menu === "mobile-app" ? "text-primary border-b-2 border-primary" : ""}`}>mobile app</a>
          <a href='#footer' onClick={() => setMenu("contact-us")} className={`cursor-pointer hover:text-primary transition-colors ${menu === "contact-us" ? "text-primary border-b-2 border-primary" : ""}`}>contact us</a>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className='cursor-pointer hover:text-primary transition-colors hidden sm:block'>
            <Search size={24} className="text-slate-700 hover:text-primary" />
          </div>

          <div className="relative cursor-pointer">
            <Link to='/cart'>
              <ShoppingBasket size={24} className="text-slate-700 hover:text-primary transition-colors" />
            </Link>
            {getTotalConstAmount() !== 0 && (
              <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              </div>
            )}
          </div>

          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className='hidden sm:block border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium'
            >
              sign in
            </button>
          ) : (
            <div className='relative group'>
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='p-2 bg-primary/10 rounded-full'>
                  <User size={20} className='text-primary' />
                </div>
              </div>

              {/* Dropdown */}
              <ul className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:flex flex-col border border-slate-100 z-50 animate-fadeIn">
                <li className='flex items-center gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-600 hover:text-primary transition-colors'>
                  <ShoppingBag size={18} />
                  <p>Orders</p>
                </li>
                <hr className='border-slate-100' />
                <li onClick={logout} className='flex items-center gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-600 hover:text-primary transition-colors'>
                  <LogOut size={18} />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-full z-40 animate-slideDown">
          <Link to='/' onClick={() => { setMenu("home"); toggleMobileMenu() }} className={`${menu === "home" ? "text-primary font-bold" : "text-slate-600"}`}>Home</Link>
          <a href='#explore-menu' onClick={() => { setMenu("menu"); toggleMobileMenu() }} className={`${menu === "menu" ? "text-primary font-bold" : "text-slate-600"}`}>Menu</a>
          <a href='#app-download' onClick={() => { setMenu("mobile-app"); toggleMobileMenu() }} className={`${menu === "mobile-app" ? "text-primary font-bold" : "text-slate-600"}`}>Mobile App</a>
          <a href='#footer' onClick={() => { setMenu("contact-us"); toggleMobileMenu() }} className={`${menu === "contact-us" ? "text-primary font-bold" : "text-slate-600"}`}>Contact Us</a>

          {!token && (
            <button
              onClick={() => { setShowLogin(true); toggleMobileMenu() }}
              className='w-full border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium mt-2'
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
