import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
    } else {
      toast.error("Error fetching orders")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='flex-1 p-8 bg-gray-50/50 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 tracking-tight'>Orders Management</h2>
          <div className='w-12 h-1 bg-primary rounded-full'></div>
        </div>

        <div className='flex flex-col gap-6'>
          {orders.map((order, index) => (
            <div key={index} className='glass-card p-6 md:p-8 grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-8 hover:shadow-2xl transition-shadow'>
              <div className='w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10'>
                <img src={assets.parcel_icon} alt="" className='w-8 opacity-70' />
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-bold text-gray-800 text-lg'>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity
                    } else {
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}
                </p>
                <div className='flex flex-col gap-1'>
                  <p className='text-gray-900 font-semibold'>{order.address.firstName + " " + order.address.lastName}</p>
                  <p className='text-gray-500 text-sm italic'>
                    {order.address.street + ", " + order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}
                  </p>
                </div>
                <p className='text-gray-900 font-medium'>{order.address.phone}</p>
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-xs uppercase tracking-wider text-gray-400 font-bold'>Items</p>
                <p className='text-xl font-bold text-gray-800'>{order.items.length}</p>
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-xs uppercase tracking-wider text-gray-400 font-bold'>Total Amount</p>
                <p className='text-xl font-bold text-primary'>${order.amount}</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p className='text-xs uppercase tracking-wider text-gray-400 font-bold'>Status</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className='input-field !py-2 bg-white font-medium cursor-pointer accent-primary'
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))}

          {orders.length === 0 && (
            <div className='glass-card p-20 text-center flex flex-col items-center gap-4'>
              <div className='w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100'>
                <span className='text-4xl grayscale opacity-30'>📦</span>
              </div>
              <div>
                <p className='text-gray-800 font-bold text-xl'>No orders to show</p>
                <p className='text-gray-400 font-medium'>Orders will appear here once customers start purchasing.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders
