import React from 'react'
import './Zephyr.css'
import journal_icon from '../assets/journal-light.png'
import med_icon from '../assets/calm-light.png'
import mindset_icon from '../assets/pos-think-light.png'
import exercise_icon from '../assets/exercise-light.png'

const Services = () => {
  return (
    <div>
         <section id="services">
                    <div className="box">
                        <div className="title">
                         <img src={med_icon} alt="meditation" />
                         <h2>Meditation</h2>
                        </div>
                        <p>Meditation is something everyone can do. It is definitely simpler (and harder) than most people think. Read these steps, make sure you’re somewhere where you can relax into this process, set a timer, and give it a shot.</p>
        
                    </div>

                     <div className="box">
                <div className="title">
                 <img src= {journal_icon} alt="journal" />
                 <h2>Journal</h2>
                </div>
                <p>Journaling helps to relieve stress by allowing one to unload private feelings and release tension. It helps improve writing skills and sharpen senses. It can also give one a record of cherished memories that will one day be forgotten if not written down. </p>

            </div>

            <div className="box">
                <div className="title">
                 <img src={exercise_icon} alt="exercise" />
                 <h2>Exercise</h2>
                </div>
                <p>Want to feel better, have more energy and even add years to your life? Just exercise. The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, no matter their age, sex or physical ability.</p>

            </div>

            <div className="box">
                <div className="title">
                 <img src={mindset_icon} alt="mindset" />
                 <h2>Mindfulness</h2>
                </div>
                <p> Mindfulness enhances focus and performance, reduces stress, deepens self-insight, and fosters compassion toward oneself and others. This is the practice of being fully present and aware of your current experience—without overreacting or getting lost in thoughts.</p>

            </div>
        </section>
    </div>
  )
}

export default Services