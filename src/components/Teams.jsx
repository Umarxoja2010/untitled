import React from 'react'
import teames_im from '../img/teames1.png'
import teames_im1 from '../img/teames2.png'
import teames_img1 from '../img/chap.png'
import teames_img2 from '../img/ong.png'

function Teams() {
  return (
 <section className='teams'>
<div className="container">
    <h1>Trusted by top teams</h1>
    <div className="teames_wrapper">
        <img className= "tea_img" src={teames_im} alt="" />
        <p>“HyperComply has enabled us to complete questionnaires quickly and accurately, and has had a hugely positive effect on speeding up our sales cycle.”</p>
        <div className="team_content">
            <img className='tea_img2' src={teames_im1} alt="" />
            <span>Desiree R, Sr. Director of Information Security</span>
        </div>
    </div>
    <div className="teames_img">
<img src={teames_img1} alt="" />
<img src={teames_img2} alt="" />
    </div>
</div>
 </section>
  )
}

export default Teams
