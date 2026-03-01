import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching list");
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error removing item");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='flex-1 p-8 bg-gray-50/50 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 tracking-tight'>All Foods List</h2>
          <div className='w-12 h-1 bg-primary rounded-full'></div>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-4 py-4 px-6 bg-gray-50 border-b border-gray-100 font-bold text-gray-600 text-sm uppercase tracking-wider">
            <span>Image</span>
            <span>Name</span>
            <span>Category</span>
            <span>Price</span>
            <span className='text-center'>Action</span>
          </div>

          <div className='flex flex-col'>
            {list.map((item, index) => {
              return (
                <div key={index} className="grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-4 py-4 px-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-0 group">
                  <div className='w-16 h-16 rounded-xl overflow-hidden border border-gray-100 shadow-sm'>
                    <img src={`${url}/images/` + item.image} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  </div>
                  <p className='font-semibold text-gray-800'>{item.name}</p>
                  <p className='text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-xs w-fit'>{item.category}</p>
                  <p className='font-bold text-primary'>${item.price}</p>
                  <div className='flex justify-center'>
                    <button
                      onClick={() => removeFood(item._id)}
                      className='w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm'
                      title="Remove Item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {list.length === 0 && (
            <div className='p-20 text-center flex flex-col items-center gap-4'>
              <div className='w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center'>
                <span className='text-4xl grayscale opacity-20'>🍽️</span>
              </div>
              <p className='text-gray-400 font-medium'>No items found in the menu.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default List
