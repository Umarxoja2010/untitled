import React from 'react'
import hero from "../img/hero1.png"
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_wrapper">
            <div className="hero_content">
                <h1>Security <br />reviews, <br /> solved</h1>
                <p>Using AI and a team of experts, HyperComply automates security reviews and accelerates due diligence, so you can onboard new tools and partners with confidence.</p>
                <button>Get a Demo</button>
            </div>
            <div className="hero_img">
                <img src={hero} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
