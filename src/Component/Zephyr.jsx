import React from 'react'
import './Zephyr.css'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Header from './Header'
import Hero from './Hero'


const Zephyr = () => {
  return (
    <div>
       <Header/>
       <Hero/>
       <About/>
       <Services/>
       <Contact/>

        
        <footer className="footer">
            <p>&copy; All Rights Reserved, Zephyr Inc. 2025</p>
        </footer>
    </div>
  )
}

export default Zephyr
