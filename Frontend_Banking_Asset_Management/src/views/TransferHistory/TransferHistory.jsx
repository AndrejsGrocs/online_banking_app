import React, { useContext, useReducer, useState } from 'react';
import {AppContext} from '../../App'
import link from "../BankPrioritiesPage/BankPrioritiesPage"

function TransactionHistory() {

             const {user} = useContext(AppContext)
             /* const {recipient} = useContext(AppContext) */
             console.log(user);

             const [seeHistory, setSeeHistory]=useState(false)

  return <div className='transaction-history'>
            <div className=''>
            <h1 className='bpph1'>Transaction History</h1>
            <button onClick={()=>setSeeHistory(!seeHistory)}>View History</button>
            <div>
            {
                seeHistory
                ?
                <>
                <p></p>
                <p>From:{user.firstname} {user.lastname}</p>
                <p>To</p>
                <p>Recipient data from api {}</p>
                <p>Amount {}</p>
                </>
                :
                <p>Press View History Button to see your previous transactions</p>
            }
            </div>
            {/* <button className='section-button' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/mission';
      }}>Click Me!</button> */}
            
            </div>
           
            
        </div>
}

export default TransactionHistory;