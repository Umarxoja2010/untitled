import React from 'react'
import review from "../img/review.png"
function Revi() {
  return (
    <section className="reviewes">
    <div className="container">
      <div className="reviewes_wrapper">
          <div className="reviewes_wrapper1">
          <p>For Sales teams at startup companies</p>
          <h2>Close deals faster</h2>
          <p>Don't let security reviews slow you down. We make sure you respond to security questionnaires in 1 day, guaranteed.</p>
          <button>Learn More</button>
          </div>
          <div className="reviewes_wrapper2">
           
              <div className="reviewes_w1">
              <span></span>
              <h2>Find and fill security gaps</h2>
              <span></span>
              <h2>Find and fill security gaps</h2>
              <span></span>
              <h2>Find and fill security gaps</h2>
              </div>
              <div className="reviewes_w2">
                  <img src={review} alt="" />
              </div>
          </div>
      </div>
    </div>
  </section>

  )
}

export default Revi
