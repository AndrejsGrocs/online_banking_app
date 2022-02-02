import React from 'react';
import { useEffect, useState, useContext } from "react";
import axios from '../../util/axiosInstance';
import {AppContext} from '../../App'



export default function MoneyTransfer(){
    
     const {user, recipient} = useContext(AppContext)
     const [trasactionCompleted, setTransactionCompleted] = useState(false)
     console.log(user)
      const moneyTransfer = async(e)=>{
          e.preventDefault()
          console.log(e);
          const formData = new FormData(e.target)

          const data = {accountNumber: formData.get('recipientaccount'), transmittedValue: formData.get('transferamount')}

          const res = await axios.post('/api/user/transaction', data)
          console.log(res);
          setTransactionCompleted(true)
      }
    

    return (
      <div className="transfer-page">
       <h1>Money Transfer</h1>
        {
            user != null 
            ?
            <>
            
            <h2>Sender Name: {user.firstname} {user.lastname}</h2>
            <h2>Available Funds: {user.accountBalance}</h2>
            <h2>Recipient Account: {}</h2>
            <form onSubmit={moneyTransfer}>
            <label>
                 
                 <input name='recipientaccount' type='recipientaccount' required={true}/>
               </label>



            <h2>Transfer amount:</h2>
            <label>
                 
                 <input name='transferamount' type='transferamount' required={true}/>
               </label>
          
           
            <button >Send</button>
            </form>
            </>
            :
            <p>No user found</p>
  
           
        }
        {trasactionCompleted?<p>Transaction Completed</p>:null}
  
      </div>
    )
}