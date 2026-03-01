import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalConstAmount, url, setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalConstAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2.00;
  const tax = subtotal * 0.08; // 8% tax example

  return (
    <div className="pt-24 pb-20 mt-10 animate-fadeIn">
      <div className="app-container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
          <p className="text-white/60 text-lg">Review Your Cart and Place Your Order</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Cart Items */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-6 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-red-mid p-1 rounded-md">
                  <Trash2 size={16} className="text-white" />
                </div>
                <span className="text-white font-bold">Subtotal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <CartItem
                      key={item._id}
                      item={item}
                      quantity={cartItems[item._id]}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      url={url}
                    />
                  );
                }
                return null;
              })}
            </div>

            {subtotal > 0 && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 glass-card">
                <button
                  onClick={() => setCartItems({})}
                  className="text-white/60 hover:text-white font-semibold transition-colors bg-white/5 px-6 py-2 rounded-lg"
                >
                  Clear Cart
                </button>
                <div className="flex items-center gap-4">
                  <span className="text-white/60 font-bold uppercase tracking-wider">Total: ${subtotal.toFixed(2)}</span>
                  <div className="bg-red-mid text-white px-6 py-2 rounded-lg font-bold shadow-lg">
                    Total: ${subtotal.toFixed(2)}
                  </div>
                </div>
              </div>
            )}

            {subtotal === 0 && (
              <div className="text-center py-20 glass-card">
                <p className="text-2xl text-white/40 font-bold">Your cart is empty</p>
                <button
                  onClick={() => navigate('/')}
                  className="btn-gradient mt-6"
                >
                  Back to Menu
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <OrderSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              navigate={navigate}
            />
          </div>
        </div>

        {/* Big Step Indicator at Bottom */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className='flex items-center justify-between px-2 relative'>
            {/* Connection Line Background */}
            <div className="absolute top-4 left-10 right-10 h-1 bg-white/10 z-0"></div>
            {/* Connection Line Active */}
            <div className="absolute top-4 left-10 w-1/4 h-1 bg-gradient-to-r from-green-500 to-accent z-0"></div>

            <div className='flex flex-col items-center gap-4 z-10'>
              <div className='w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]'>
                <div className='w-3 h-3 rounded-full bg-white'></div>
              </div>
              <span className='text-sm text-white font-bold uppercase'>Shopping Cart</span>
            </div>

            <div className='flex flex-col items-center gap-4 z-10'>
              <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20'>
                <div className='w-3 h-3 rounded-full bg-white/20'></div>
              </div>
              <span className='text-sm text-white/40 font-bold uppercase'>Checkout</span>
            </div>

            <div className='flex flex-col items-center gap-4 z-10'>
              <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20'>
                <div className='w-3 h-3 rounded-full bg-white/20'></div>
              </div>
              <span className='text-sm text-white/40 font-bold uppercase'>Order Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
