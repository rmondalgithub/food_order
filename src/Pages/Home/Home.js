import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppStore from '../../Component/AppStore/AppStore'

function Home() {
  const [category,setCategory] = useState("All")
  return (
    <div>
     <Header/>
     <ExploreMenu categorys={category} setCategorys={setCategory}/>
     <FoodDisplay category={category}/>
     <AppStore/>
    </div>
  )
}

export default Home
