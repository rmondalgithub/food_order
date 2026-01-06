import React from 'react'
import './AppStore.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppStore = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>
            For Better Experience Download <br/> Tomato_App
        </p>
        <div className="app-download-platfroms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppStore
