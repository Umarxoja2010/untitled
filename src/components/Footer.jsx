import React from 'react'
import footer_icon from "../img/footer_ico.png"
import footer_icon1 from "../img/twitter.png"
import footer_icon2 from "../img/linkiden.png"
function Footer() {
  return (
<footer className='footer'>
<div className="container">
    <div className="footer_wrapper">
        <div className="footer_w1">
            <img src={footer_icon} alt="" />
        </div>
        <div className="footer_w2">
            <h3>Legal</h3>
            <span>Privacy Policy</span>
        </div>
        <div className="footer_w3">
            <h3>Contact</h3>
            <span>Email us</span>
            <br />
            <span>Support</span>
        </div>
        <div className="footer_w4">
            <h3>About</h3>
            <span>Company</span>
            <br />
            <img src={footer_icon1} alt="" />
            <img src={footer_icon2} alt="" />
        </div>
    </div>
</div>
</footer>
  )
}

export default Footer
