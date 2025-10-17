import './App.css'
import {Link,Router, Routes, Route} from 'react-router-dom'
import Zephyr from './Component/Zephyr'
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import { useState } from 'react'
import Header from './Component/Header'


function App() {

  // const [theme, setTheme] = useState('light');

  return (
    <>
    {/* <Header theme={theme} setTheme={setTheme} /> */}

      <Routes>
       <Route path='/' element={<Zephyr/>} />
       <Route path='/About' element={<About/>} />
       <Route path='/Services' element={<Services/>} />
       <Route path='/Contact' element={<Contact/>} />
      </Routes>

    </>
  )
}

export default App
