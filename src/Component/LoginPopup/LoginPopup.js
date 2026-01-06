import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setLoginPopup}) => {
  const [currState,setcurrState] =  useState("Sign Up")

  return (
    <div className='login-popup'>
      <from className="login-popup-container">
        <div className="login-popup-titel">
          <h2>{currState}</h2>
          <img onClick={()=>setLoginPopup(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"?<p>Create a new account?<span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
        :<p>Already create a account?<span onClick={()=>setcurrState("Login")}>Login here</span></p>}
        
      </from>
    </div>

  )
}

export default LoginPopup
