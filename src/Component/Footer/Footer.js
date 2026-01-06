import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        Experience the joy of fresh, flavorful meals made with love and delivered right to your doorstep.
                        Your satisfaction is our top priority — taste the difference with every bite!
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9883649774</li>
                        <li>mondalrakib977@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">2025 FoodieHub. All rights reserved.</p>
        </div>
    )
}

export default Footer
