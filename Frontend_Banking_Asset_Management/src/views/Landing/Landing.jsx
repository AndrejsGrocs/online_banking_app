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

        <Carousel infiniteLoop autoPlay emulateTouch={true}transitionTime={1000} showArrows={false} showStatus={false}  showThumbs={false}>
         
          <div className='banner'>
                 
                   <img className='bannerImg' src={image3} />
                     <div className='bannerContent'>
                     <div>
                       <h1 className="bannerHeader1">Save the ocean environment</h1>
                       <p className="bannerText1">Investment in to the Eco ocean saving projects and more and more an more info in this sentence</p>
                       </div>
                        <button className='bannerButton1'>Click here</button>
                    </div>
                    
         </div>
                <div className='banner'>
                
                   <img className='bannerImg' src={image2} />
                     <div className='bannerContent'>
                     <div>
                       <h1 className="bannerHeader2">Save the ocean environment</h1>
                       <p className="bannerText2">Investment in to the Eco ocean saving projects and more and more an more info in this sentence</p>
                       </div>
                        <button className='bannerButton2'>Click here</button>
                    </div>
                    
                </div>
                <div className='banner'>
                
                    <img className='bannerImg' src={image4} />
                     <div className='bannerContent'>
                     <div>
                       <h1 className="bannerHeader3">Save the ocean environment</h1>
                       <p className="bannerText3">Investment in to the Eco ocean saving projects and more and more an more info in this sentence</p>
                       </div>
                        <button className='bannerButton3'>Click here</button>
                    </div>

                    </div>
                    <div className='banner'>
                
                   <iframe  height="800px" src="https://www.youtube.com/embed/IlFRPkT-hVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     <div className='bannerContent'>
                     <div>
                       <h1 className="bannerHeader3">Save the ocean environment</h1>
                       <p className="bannerText3">Investment in to the Eco ocean saving projects and more and more an more info in this sentence</p>
                       </div>
                        <button className='bannerButton3'>Click here</button>
                    </div>

                    


                      
                    
                    
                </div>
            </Carousel>
           
      
        
           
        
            <BankPriorities/>
            <CreditCards/>
            <Loan/>
            <Investment/>
            <SiteMapAndContacts/>
            
        </div>
        
           
        

        
    )
}
