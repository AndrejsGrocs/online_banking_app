import React from 'react';
import susecoimage from '../../assets/images/sustainableenergy.jpg'
import link from "../BankPrioritiesPage/BankPrioritiesPage"

function BankPriorities() {
  return <div className='bank-priorities'>
   <img className='section-image1'src={susecoimage} />
   
            <div className='bppflex'>
            
            <h1 className='bpph1'>Bank priorities Page</h1>
            <p className='bppp1'>Most banks use your money and invest it in guns, coal and other harmful industries - without your consent. We only invest your money sustainably.</p>
            <button className='sectionButton1' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/mission';
      }}>More Details</button>
           
            </div>
           
            
        </div>
}

export default BankPriorities;
