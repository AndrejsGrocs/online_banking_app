import React from 'react';
import susecoimage from '../../assets/images/suseco.jpeg'
import link from "../BankPrioritiesPage/BankPrioritiesPage"

function BankPriorities() {
  return <div className='bank-priorities'>
            <div className='bppflex'>
            <h1 className='bpph1'>Bank priorities Page</h1>
            <p className='bppp1'>Most banks use your money and invest it in guns, coal and other harmful industries - without your consent. We only invest your money sustainably.</p>
            <button className='section-button' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/mission';
      }}>Click Me!</button>
            
            </div>
            <img className='section-image'src={susecoimage} />
            
        </div>
}

export default BankPriorities;
