import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/SetContext';
function FoodItem({id,name,description,price,image}) {
 
  const {certItem,addTocart,removeFromecart} =useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!certItem[id]
          ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" />
          :<div className='food-iten-counter'>
            <img onClick={()=>removeFromecart(id)} src={assets.remove_icon_red} alt="" />
            <p>{certItem[id]}</p>
            <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
          </div>
                  }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
