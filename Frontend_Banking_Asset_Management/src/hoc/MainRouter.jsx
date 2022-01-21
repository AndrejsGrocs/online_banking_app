import React from 'react'
import { BrowserRouter as Router, Route ,Routes, Redirect, Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import AboutUs from '../views/AboutUs/AboutUs'
import Analytics from '../views/Analytics/Analytics'
import Landing from '../views/Landing/Landing'
import Login from '../views/Login/Login'
import Logout from '../../src/views/Logout/Logout'
import Profile from '../views/Profile/Profile'
import SignUp from '../views/SignUp/SignUp'
import BankPrioritiesPage from '../views/BankPrioritiesPage/BankPrioritiesPage'
import AccountPage from '../views/AccountPage/AccountPage'
import Investment from '../views/InvestmentAssets/InvestmentAssets'
import InvestmentPage from '../views/InvestmentPage/InvestmentPage'

export default function MainRouter() {
    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/investment' element = {<InvestmentPage/>}/>
              <Route path='/mission' element = {<BankPrioritiesPage/>}/>
              <Route path='/account' element = {<AccountPage/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/logout' element={<Logout/>}/>



        

        </Routes>
          
           <Footer/>
        </Router>
    )
}
