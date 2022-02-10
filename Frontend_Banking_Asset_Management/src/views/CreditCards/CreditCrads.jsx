

import React from 'react';
import creditcardimage from '../../assets/images/db-bank-Card-BG.png'


function CreditCards() {
  return <div className='credit-cards'>
  
            <div className='bppflex2'>
            <h1 className='bpph2'>Account and Card</h1>
            <p className='bppp2'>Most banks use your money and invest it in guns, coal and other harmful industries - without your consent. We only invest your money sustainably.</p>
            <button className='sectionButton2' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/account';
      }}>More Details</button>
            </div>
            <img className='section-image2' src={creditcardimage} />
        </div>
}

export default CreditCards;