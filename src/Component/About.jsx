import React from 'react'
import './Zephyr.css'
import about_img from '../assets/hero1.jpg'

const About = () => {
  return (
    <div>
      <section id="about">
         <div className="about-img">
            <img src={about_img} alt="about Zephyr"/>
         </div>
         <div className='about-text'>
            <h3>
               The best way to relax
            </h3>
             <p>
               Meditation is a practice in which an individual uses a technique to train attention and awareness and detach from reflexive, "discursive thinking", achieving a mentally clear and emotionally calm and stable state while not judging the meditation process itself. Techniques are broadly classified into focused and open monitoring methods.
             </p>
          </div>
      </section>
    </div>
  )
}

export default About
