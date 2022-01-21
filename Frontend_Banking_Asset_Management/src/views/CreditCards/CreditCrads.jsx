

import React from 'react';
import susecoimage from '../../assets/images/suseco.jpeg'


function CreditCards() {
  return <div className='credit-cards'>
  <img className='section-image' src={susecoimage} />
            <div className='bppflex'>
            <h1 className='bpph1'>Credit Cards Page</h1>
            <p className='bppp1'>Most banks use your money and invest it in guns, coal and other harmful industries - without your consent. We only invest your money sustainably.</p>
            <button className='section-button' type="button">Click Me!</button>
            </div>
            
        </div>
}

export default CreditCards;