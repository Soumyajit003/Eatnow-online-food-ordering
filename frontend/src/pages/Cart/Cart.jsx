import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalConstAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="mt-24 app-container animate-fadeIn">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-slate-500 text-[max(1vw,12px)] font-medium bg-slate-50 p-4 rounded-lg shadow-sm">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="border-slate-200" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-slate-800 text-[max(1vw,13px)] py-3 px-4 hover:bg-slate-50 transition-colors rounded-lg">
                  <img src={url + '/images/' + item.image} alt="" className="w-12 h-12 object-cover rounded-md" />
                  <p className="font-medium">{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p className="font-semibold">${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cursor-pointer text-red-400 hover:text-red-600 transition-colors bg-red-50 p-1.5 rounded-full w-fit">
                    <Trash2 size={16} />
                  </p>
                </div>
                <hr className="border-slate-100 my-2" />
              </div>
            );
          }
        })}
      </div>

      <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-slate-800">Cart Totals</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-slate-600">
              <p>Subtotal</p>
              <p>${getTotalConstAmount()}</p>
            </div>
            <hr className="border-slate-200" />
            <div className="flex justify-between text-slate-600">
              <p>Delivery Fee</p>
              <p>${getTotalConstAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="border-slate-200" />
            <div className="flex justify-between text-slate-900 text-lg font-bold">
              <b>Total</b>
              <b>${getTotalConstAmount() === 0 ? 0 : getTotalConstAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate('/order')}
            className="border-none bg-primary text-white w-[max(15vw,200px)] py-3 rounded-lg font-medium cursor-pointer transition-all hover:bg-secondary hover:shadow-lg active:scale-95"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1">
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
            <p className="text-slate-600 mb-3">If you have a promo code, Enter it here</p>
            <div className="mt-2 flex justify-between items-center bg-white rounded-lg border border-slate-200 overflow-hidden pl-3 shadow-inner">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent border-none outline-none w-full py-3 text-slate-700 placeholder:text-slate-400"
              />
              <button className="w-[max(10vw,150px)] py-3 bg-black text-white px-8 font-medium hover:bg-slate-800 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
