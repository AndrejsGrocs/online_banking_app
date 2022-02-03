import axios from "../../util/axiosInstance";
import React, { useContext, useReducer, useState } from 'react';
import {AppContext} from '../../App'
import link from "../BankPrioritiesPage/BankPrioritiesPage"
import TransferGrid from "./TransferGrid";





function TransactionHistory() {


/* 
            const {user} = useContext(AppContext)
            const {recipient} = useContext(AppContext)  */
        
              //Declaring state

             const [seeHistory, setSeeHistory]=useState(false)

             const[historyList, setHistoryList] =useState([])

             //Fetching transaction history

              const getHistory = async()=>{
                  const response = await axios.get('/api/user/history', {withCredentials:true})

                  console.log(response);
                  setSeeHistory(true)

                  setHistoryList(response.data)
              }
              

              //1. Store that data into some state (intialise with empty array)
              //2. Render that state -> using map
              // 3. Render using a new subcomponent for example "Entry"

            

  return <div className='transaction-history'>

              

            <div className=''>
            <h1 className='bpph1'>Transaction History</h1>
            <button onClick={()=>getHistory()}>View History</button>

            <div>
            {
                seeHistory
                ?
                <>
                <TransferGrid transactionList={historyList}></TransferGrid>
                 {historyList.map((transaction)=>(<div key={transaction._id}>
                     <p></p>
                <p>Date: 
                {`${new Date(transaction.createdOn).toLocaleDateString()} / ${new Date(transaction.createdOn).toLocaleTimeString()}`},
                
              
                </p>
                {/* <p>From:{user.firstname} {user.lastname}</p> */}
                <p>To</p>
                <p> {transaction.recipient.firstname} {transaction.recipient.lastname}</p>
                <p>Amount {transaction.transmittedValue}</p>
                </div>
            ))}
                
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