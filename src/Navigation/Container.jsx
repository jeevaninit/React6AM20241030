import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Career from './Career'
import Contact from './Contact'
import ReduxApi from '../Redux/ReduxApi'
import Courses from './Courses'

const Container = () => {
  return (
    <div>
        <h1>Container</h1>
        <div className='container'>
            <Routes>
                <Route path='/' element={<ReduxApi />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/services' element={<Services />}/>
                <Route path='/career' element={<Career />}/>
                <Route path='/courses' element={<Courses />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </div>
        </div>
  )
}

export default Container