import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className='flex-1 p-8 bg-gray-50/50 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 tracking-tight'>Add New Item</h2>
          <div className='w-12 h-1 bg-primary rounded-full'></div>
        </div>

        <form className="glass-card p-10 flex flex-col gap-8" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-3">
            <p className='font-semibold text-gray-700'>Upload Image</p>
            <label htmlFor="image" className='cursor-pointer group'>
              <div className='w-40 h-40 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary/50 group-hover:bg-primary/5'>
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                  className={image ? 'w-full h-full object-cover' : 'w-12 opacity-40 group-hover:opacity-100 transition-opacity'}
                />
              </div>
            </label>
            <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} hidden required />
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-semibold text-gray-700'>Product Name</p>
            <input className="input-field" onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='e.g. Greek Salad' required />
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-semibold text-gray-700'>Product Description</p>
            <textarea className="input-field" onChange={onChangeHandler} value={data.description} name="description" rows='4' placeholder='Write a catchy description here...' required></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <p className='font-semibold text-gray-700'>Category</p>
              <select className="input-field cursor-pointer accent-primary" onChange={onChangeHandler} name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <p className='font-semibold text-gray-700'>Price ($)</p>
              <input className="input-field" onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' required />
            </div>
          </div>

          <div className='pt-4'>
            <button type='submit' className='btn-primary w-full md:w-auto !px-12'>ADD PRODUCT</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add
