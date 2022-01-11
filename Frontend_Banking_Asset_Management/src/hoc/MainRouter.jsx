import React from 'react'
import { BrowserRouter as Router, Route ,Routes, Redirect, Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import AboutUs from '../views/AboutUs/AboutUs'
import Analytics from '../views/Analytics/Analytics'
import Landing from '../views/Landing/Landing'
import Login from '../views/Login/Login'
import SignUp from '../views/SignUp/SignUp'

export default function MainRouter() {
    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/analytics' element = {<Analytics/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>



        

        </Routes>
          
           <Footer/>
        </Router>
    )
}
