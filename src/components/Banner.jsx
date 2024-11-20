import React from 'react'
import icons from "../img/icon1.png"
import icons1 from "../img/icon2.png"
import icons2 from "../img/icon3.png"
import icons3 from "../img/icon4.png"
import icons4 from "../img/icon5.png"
import icons5 from "../img/icon6.png"
function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner_wrapper">
            <p>We've saved 10,000+ hours for the smartest businesses in the world.</p>
            <img src={icons} alt="" />
            <img src={icons1} alt="" />
            <img src={icons2} alt="" />
            <img src={icons3} alt="" />
            <img src={icons4} alt="" />
            <img src={icons5} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Banner
