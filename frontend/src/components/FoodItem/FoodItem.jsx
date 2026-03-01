import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Plus, Minus, Star } from 'lucide-react';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='glass-card p-6 flex flex-col items-center gap-5 text-center group cursor-pointer hover:shadow-[0_0_30px_rgba(255,81,47,0.2)] animate-fadeIn'>
      <div className='relative w-full aspect-square rounded-2xl overflow-hidden mb-2'>
        <img
          src={url + '/images/' + image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Restaurant Icon Overlay */}
        <div className='absolute top-4 left-4 w-12 h-12 rounded-xl bg-red-dark/80 backdrop-blur-md flex items-center justify-center border border-white/10'>
          <span className='text-xl'>🍽️</span>
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <h3 className='text-xl font-bold text-white group-hover:text-accent transition-colors'>{name}</h3>

        {/* Stars */}
        <div className='flex items-center justify-center gap-1 mb-2'>
          <Star size={16} fill="#FFD700" className='text-[#FFD700]' />
          <Star size={16} fill="#FFD700" className='text-[#FFD700]' />
          <Star size={16} fill="#FFD700" className='text-[#FFD700]' />
          <Star size={16} fill="#FFD700" className='text-[#FFD700]' />
          <Star size={16} fill="#FFD700" className='text-[#FFD700]' />
        </div>

        <div className='flex items-center justify-between mt-2 pt-4 border-t border-white/10'>
          <span className='text-accent font-bold text-xl'>${price}</span>
          <button
            onClick={(e) => { e.stopPropagation(); addToCart(id); }}
            className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all duration-300'
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
