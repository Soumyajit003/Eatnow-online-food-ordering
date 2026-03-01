import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='py-12' id='food-display'>
      <div className='flex flex-col gap-4 mb-10'>
        <h2 className="text-white font-bold text-3xl sm:text-4xl tracking-tight">Top Restaurants</h2>
        <div className='w-20 h-1.5 bg-accent rounded-full'></div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-8 gap-y-12 animate-fadeIn">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
