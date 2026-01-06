import React from 'react'
import './Header.css'
import { assets } from '../../assets/frontend_assets/assets'

function Header() {
  return (

    <div className='header'
      style={{
        backgroundImage: `url(${assets.header_img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "38vw",
       
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise —
          one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>

  )
}

export default Header
