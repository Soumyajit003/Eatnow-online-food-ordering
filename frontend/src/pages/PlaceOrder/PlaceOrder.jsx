import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalConstAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };


  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    // console.log(orderItems);

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalConstAmount() + 2,
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      // console.log(response.data.success); 

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error: " + (response.data.message || "Unknown error occurred"));
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order. Please try again.");
    }
  };

  return (
    <form onSubmit={placeOrder} className='mt-[200px] app-container flex flex-col md:flex-row justify-between gap-12 animate-fadeIn mb-4'>
      <div className="w-full max-w-[500px]">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="flex gap-2.5 mb-4">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email address' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors mb-4" />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors mb-4" />
        <div className="flex gap-2.5 mb-4">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
        </div>
        <div className="flex gap-2.5 mb-4">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' className="w-full bg-transparent p-2.5 text-white border border-slate-300 rounded focus:border-white outline-none transition-colors" />
      </div>

      <div className="w-full max-w-[500px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold ">Cart Totals</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between ">
              <p>Subtotal</p>
              <p>${getTotalConstAmount()}</p>
            </div>
            <hr className="border-slate-200" />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getTotalConstAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="border-slate-200" />
            <div className="flex justify-between text-lg font-bold">
              <b>Total</b>
              <b>${getTotalConstAmount() === 0 ? 0 : getTotalConstAmount() + 2}</b>
            </div>
          </div>
          <button type='submit' className="mt-8 bg-primary text-white w-[max(15vw,200px)] py-3 rounded-lg font-medium cursor-pointer transition-all hover:bg-secondary hover:shadow-lg active:scale-95 border-none self-start">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder