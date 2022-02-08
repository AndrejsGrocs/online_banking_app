

import React from 'react';
import creditcardimage from '../../assets/images/db-bank-Card-BG.png'


function CreditCards() {
  return <div className='credit-cards'>
  
            <div className='bppflex'>
            <h1 className='bpph1'>Credit Cards Page</h1>
            <p className='bppp1'>Most banks use your money and invest it in guns, coal and other harmful industries - without your consent. We only invest your money sustainably.</p>
            <button className='bannerButton1' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/account';
      }}>More Details</button>
            </div>
            <img className='section-image1' src={creditcardimage} />
        </div>
}

export default CreditCards;