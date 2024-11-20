import React from 'react'
import banner5 from "../img/banner1.png"
function Banner2() {
  return (
    <section className="banner2">
      <div className="container">
        <div className="banner_wraper1">
            <p>For Sales teams at startup companies</p>
            <h2>Close deals faster</h2>
            <p>Don't let security reviews slow you down. We make sure you respond to security questionnaires in 1 day, guaranteed.</p>
            <button>Learn More</button>
        </div>
        <div className="banner_wraper2">

<div className="banner_w1">
<span></span>
<h4>Automation + human review</h4>
<span></span>
<h4>Always learning</h4>
<span></span>
<h4>Simple and flexible</h4>
</div>
<div className="banner_w2">
    <img src={banner5} alt="" />
</div>
        </div>
      </div>
    </section>
  )
}

export default Banner2
