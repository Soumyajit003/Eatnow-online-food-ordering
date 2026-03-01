import React from 'react';
import { Minus, Plus, Star } from 'lucide-react';

const CartItem = ({ item, quantity, addToCart, removeFromCart, url }) => {
    return (
        <div className='glass-card p-4 sm:p-6 mb-4 flex flex-col sm:flex-row items-center gap-6 animate-fadeIn'>
            <div className='flex items-center gap-4 flex-1 w-full'>
                {/* Restaurant Logo & Item Image */}
                <div className='relative shrink-0'>
                    <img
                        src={url + '/images/' + item.image}
                        alt={item.name}
                        className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border border-white/10'
                    />
                    <div className='absolute -top-2 -left-2 w-8 h-8 rounded-lg bg-red-dark border border-white/10 flex items-center justify-center text-[10px]'>
                        🍽️
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='text-muted text-xs uppercase tracking-wider font-semibold'>Chef's Delight</p>
                    <h3 className='text-lg sm:text-xl font-bold text-white'>{item.name}</h3>
                    <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="#FFD700" className='text-[#FFD700]' />
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between w-full sm:w-auto gap-8 sm:gap-12'>
                <p className='text-xl font-bold text-accent'>${item.price}</p>

                {/* Quantity Selector */}
                <div className='flex items-center gap-4 bg-white/5 rounded-full p-1 border border-white/10'>
                    <button
                        onClick={() => removeFromCart(item._id)}
                        disabled={quantity <= 1}
                        className='w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30'
                    >
                        <Minus size={18} />
                    </button>
                    <span className='text-lg font-bold w-4 text-center'>{quantity}</span>
                    <button
                        onClick={() => addToCart(item._id)}
                        className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-colors'
                    >
                        <Plus size={18} />
                    </button>
                </div>

                <p className='text-xl font-bold text-white hidden md:block'>${(item.price * quantity).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CartItem;
