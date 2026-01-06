import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Cart from './Pages/Cart/Cart';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Component/LoginPopup/LoginPopup';



function App() {
  const [ShowLogin,setLoginPopup]= useState(false);
  return (
    <>
    {ShowLogin?<LoginPopup setLoginPopup={setLoginPopup}/>:<></>}
    <div className="App">
      <Navbar setLoginPopup={setLoginPopup}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path ='/order' element ={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
