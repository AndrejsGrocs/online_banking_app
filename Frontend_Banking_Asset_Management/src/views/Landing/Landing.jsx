import React from 'react'
import image1 from '../../assets/images/assetmanagement1.jpeg'
import image2 from '../../assets/images/ecoocean.jpg'
import image3 from '../../assets/images/ocean1.jpg'
import image4 from '../../assets/images/sustainableenergy.jpg'

import BankPriorities from '../BankPriorities/BankPriorities'
import CreditCards from '../CreditCards/CreditCrads'
import Investment from '../InvestmentAssets/InvestmentAssets'
import Loan from '../Loan/Loan'
import SiteMapAndContacts from '../SiteMapAndContacts/SiteMapAndContacts'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Landing() {
    return (
        <div className='box-element   Landing'>
          
       
         
          <div className='banner'>
                    
                 
                   {/* <img className='bannerImg' src={image3} /> */}
                     <div className='bannerContent'>
                     <div className=''>
                       <h1 className="bannerHeader1">Save the Ocean Environment</h1>
                       <p className="bannerText1">Open your environmental friendly account in just 5 minutes</p>
                       </div>
                        <button className='bannerButton1'>Open bank account</button>
                    </div>
                    <div>
                    
                       <div >
                      
                         <h1 className="">Save the Ocean Environment</h1>
                       <p className="bannerText1">Open your environmental friendly account in just 5 minutes</p>
                       </div>
                       <div >
                         <h1 className="">Save the Ocean Environment</h1>
                       <p className="bannerText1">Open your environmental friendly account in just 5 minutes</p>
                       </div>

                       </div>

               
                    
         </div>
               
               
                   
           
           
      
        
           
        
            <BankPriorities/>
            <CreditCards/>
            <Loan/>
            <Investment/>
            <SiteMapAndContacts/>
            
        </div>
        
           
        

        
    )
}
