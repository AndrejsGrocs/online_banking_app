import React from 'react'
import image1 from '../../assets/images/assetmanagement1.jpeg'
import BankPriorities from '../BankPriorities/BankPriorities'
import CreditCards from '../CreditCards/CreditCrads'
import Loan from '../Loan/Loan'
import SiteMapAndContacts from '../SiteMapAndContacts/SiteMapAndContacts'

export default function Landing() {
    return (
        <div className='Landing'>
        <div className='banner'>
            
            <h1>New Era Bank</h1>
        </div>
           <></>
            <h1>New Era Bank</h1>
            <p>Few lines of text ...</p>
        
            <BankPriorities/>
            <CreditCards/>
            <Loan/>
            <SiteMapAndContacts/>
        </div>
        
           
        

        
    )
}
