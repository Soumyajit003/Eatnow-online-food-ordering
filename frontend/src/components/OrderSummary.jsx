import React from 'react';
import { ShoppingCart } from 'lucide-react';

const OrderSummary = ({ subtotal, deliveryFee, tax, navigate }) => {
    const total = subtotal + deliveryFee + tax;

    return (
        <div className='glass-card p-8 flex flex-col gap-6 sticky top-24'>
            <div className='flex items-center justify-between mb-2'>
                <h2 className='text-2xl font-bold text-white tracking-tight'>Order Summary</h2>
                <div className='relative'>
                    <ShoppingCart size={28} className='text-white/80' />
                    <span className='absolute -top-2 -right-2 bg-accent text-red-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-red-mid'>
                        3
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex justify-between text-white/70 font-medium'>
                    <span>Subtotal</span>
                    <span className='text-white'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-white/70 font-medium'>
                    <span>Delivery Fee</span>
                    <span className='text-white'>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-white/70 font-medium'>
                    <span>Tax</span>
                    <span className='text-white'>${tax.toFixed(2)}</span>
                </div>
            </div>

            <div className='h-px bg-white/10 my-2'></div>

            <div className='flex justify-between items-center mb-4'>
                <span className='text-xl font-bold text-white'>Total</span>
                <span className='text-3xl font-bold text-accent'>${total.toFixed(2)}</span>
            </div>

            <button
                onClick={() => navigate('/order')}
                className='btn-gradient w-full py-4 text-lg'
            >
                Proceed to Checkout
            </button>

            {/* Step Indicator simplified for summary card */}
            <div className='mt-8 flex flex-col gap-4'>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(254,180,123,0.5)]'></div>
                        <span className='text-[10px] text-accent font-bold uppercase'>Shopping Cart</span>
                    </div>
                    <div className='flex-1 h-0.5 bg-white/20 mx-2 mb-6'></div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='w-4 h-4 rounded-full bg-white/20'></div>
                        <span className='text-[10px] text-white/40 font-bold uppercase'>Checkout</span>
                    </div>
                    <div className='flex-1 h-0.5 bg-white/20 mx-2 mb-6'></div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='w-4 h-4 rounded-full bg-white/20'></div>
                        <span className='text-[10px] text-white/40 font-bold uppercase'>Order Complete</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
