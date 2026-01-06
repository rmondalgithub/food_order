import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

function ExploreMenu({categorys,setCategorys}) {
    
    return (
        <div className='explore-menu' id='explore-menu'>
            <h2>Explore our menu</h2>
            <p className='explore-menu-text'>
                Choose from a diverse menu featuring a delectable array of dishes
                crafted with the finest ingredients and culinary expertise — 
                one delicious meal at a time.
            </p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategorys(pre=>pre===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={categorys===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu
