import React from 'react';
import maillogo from "../../assets/images/mail.png"
import instalogo from "../../assets/images/instagram.png"
import telegramlogo from "../../assets/images/telegram.png"
import linkedinlogo from "../../assets/images/linkedin.png"
import facebooklogo from "../../assets/images/facebook.png"

function SiteMapAndContacts() {
  return <div className='sitemap'>
             
             <h1 className='bpph1'>Site Map Page</h1>
            <p className='bppp1'>Most banks use your money and invest it in guns, coal and other harmful industries - without your consent. We only invest your money sustainably.</p>
            <div className='list-flex'>
            
            

            <ul className='link-list'>
            <p>Customers</p>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>

               <ul className='link-list'>
               <p>Partners</p>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>


             <ul className='link-list'>
               <p>Reports</p>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>


                <ul className='link-list'>
                <p>Contacts</p>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
             
         
            </div>
    <div className='icon-list'>
              <img className='socmediaicon' src={maillogo}/>
               <img className='socmediaicon' src={instalogo} />
               <img className='socmediaicon' src={telegramlogo}/>
               <img className='socmediaicon' src={linkedinlogo}/>
               <img className='socmediaicon' src={facebooklogo}/>
            </div>
          
            
        </div>
        
}

export default SiteMapAndContacts;