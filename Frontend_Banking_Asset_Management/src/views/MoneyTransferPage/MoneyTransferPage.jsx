import React from 'react';
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import {AppContext} from '../../App'



export default function MoneyTransfer(){
    
     const {user} = useContext(AppContext)
     console.log(user)



    return (
      <div className="transfer-page">
       <h1>Money Transfer</h1>
        {
            user != null 
            ?
            <>
            
            <h2>Sender Name: {user.firstname} {user.lastname}</h2>
            <h2>Available Funds: {user.accountBalance}</h2>
            <h2>Recipient Account: </h2>
            <label>
                 
                 <input name='email' type='email' required={true}/>
               </label>
            <h2>Amount of funds:</h2>
            <label>
                 
                 <input name='email' type='email' required={true}/>
               </label>
          
           
            <button>Send</button>
            </>
            :
            <p>No user found</p>
  
           
        }
  
      </div>
    )
}