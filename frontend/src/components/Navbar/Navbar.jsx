import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { Search, ShoppingBasket, User, LogOut, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalConstAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Menu', path: '#explore-menu', id: 'menu' },
    { name: 'Mobile App', path: '#app-download', id: 'mobile-app' },
    { name: 'Contact Us', path: '#footer', id: 'contact-us' },
  ];

  return (
    <nav className={`floating-pill-navbar ${isScrolled ? 'top-4 py-3' : 'top-6 py-4'} `}>
      <div className='app-container flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center group'>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter cursor-pointer transition-transform group-hover:scale-105 font-outfit">
            eat<span className="text-accent underline decoration-primary decoration-4 underline-offset-4">now</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2 text-white/80 font-semibold font-outfit">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.path.startsWith('#') ? (
                <a
                  href={link.path}
                  className={`nav-link-glow ${location.hash === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link-glow ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6">

          <div className="relative group p-2 hover:bg-white/5 rounded-full transition-all">
            <Link to='/cart'>
              <ShoppingBasket size={24} className="text-white/80 group-hover:text-white transition-colors" />
            </Link>
            {getTotalConstAmount() !== 0 && (
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center cart-pulse border-2 border-red-dark">
                {/* Dynamically calculate count if possible, or just the dot */}
              </span>
            )}
          </div>

          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className='btn-gradient !px-6 !py-2.5 !text-sm !font-bold'
            >
              Sign In
            </button>
          ) : (
            <div className='relative group'>
              <button className='flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all'>
                <div className='w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white'>
                  <User size={18} />
                </div>
              </button>

              {/* Dropdown */}
              <ul className="absolute right-0 top-full mt-4 w-52 bg-[#3a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 hidden group-hover:flex flex-col z-50 animate-fadeIn">
                <li className='flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl cursor-pointer text-white/80 hover:text-white transition-all' onClick={() => navigate('/myorders')}>
                  <ShoppingBag size={18} className='text-accent' />
                  <span className='font-medium'>My Orders</span>
                </li>
                <div className='h-px bg-white/5 my-1'></div>
                <li onClick={logout} className='flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 rounded-xl cursor-pointer text-white/80 hover:text-red-400 transition-all'>
                  <LogOut size={18} />
                  <span className='font-medium'>Logout</span>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-white/5 rounded-xl transition-all text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full mt-4 px-4 z-50 animate-slideDown">
          <div className='bg-[#2a0808]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold px-4 py-2 rounded-xl transition-all ${menu === link.id ? 'bg-primary/20 text-primary' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                {link.name}
              </a>
            ))}
            {!token && (
              <button
                onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false) }}
                className='w-full btn-gradient mt-2 py-4'
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
