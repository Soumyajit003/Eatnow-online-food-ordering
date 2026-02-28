import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Plus, Minus } from 'lucide-react';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-[15px] shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white animate-fadeIn flex flex-col h-full overflow-hidden border border-slate-100'>
      <div className="relative w-full h-[240px] overflow-hidden">
        <img
          src={url + '/images/' + image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {!cartItems[id] ? (
          <div
            onClick={() => addToCart(id)}
            className='absolute bottom-4 right-4 cursor-pointer rounded-full bg-white p-2 shadow-md hover:scale-110 transition-transform w-[40px] h-[40px] flex items-center justify-center'
          >
            <Plus size={20} className="text-slate-700" />
          </div>
        ) : (
          <div className='absolute bottom-4 right-4 flex items-center gap-2 p-1 bg-white rounded-full shadow-md'>
            <div onClick={() => removeFromCart(id)} className="w-[30px] h-[30px] rounded-full bg-red-100 flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
              <Minus size={16} className="text-secondary" />
            </div>
            <p className="w-[20px] text-center font-medium text-slate-700">{cartItems[id]}</p>
            <div onClick={() => addToCart(id)} className="w-[30px] h-[30px] rounded-full bg-green-100 flex items-center justify-center cursor-pointer hover:bg-green-200 transition-colors">
              <Plus size={16} className="text-green-600" />
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2.5">
          <p className="text-xl font-medium text-slate-800 line-clamp-1">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">{description}</p>
        <p className="text-primary text-[22px] font-semibold">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
