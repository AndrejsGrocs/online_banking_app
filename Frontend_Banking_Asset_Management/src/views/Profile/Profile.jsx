import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import {AppContext} from '../../App'
import TransactionHistory from "../TransferHistory/TransferHistory";
import MoneyTransfer from "../MoneyTransferPage/MoneyTransferPage";
export default function Profile(){
    /* const [user, setUser] = useState(null); */
     const {user} = useContext(AppContext)
     console.log(user)

     const [profileToggle, setProfileToggle] = useState(true)

     const [buttonText, setButtonText] = useState(true)
    //load the profile information
    /* const getProfile = async() => { */


          
/*         try {
            //making a get request to fetch the profile information
            const response = await axios.get("http://localhost:3001/api/user/profile");
            console.log(response)
            if(response.status === 200){
                setUser(response.data.user);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        //fetch profile information when component renders.
        getProfile();
    }, []) */


    return (
      <div className="profile-page">
      
        {
            user != null 
            ?
            <>
            

             <div className="account-number">
            <p>Account Number</p>
            <p>{user.accountNumber}</p>
            </div>
              
              <div className="acc-user-data">
            <p className="profile-greeting">Hi  {user.firstname},</p>
            <p className="total-balance-text">TOTAL BALANCE </p>
            <p className="account-balance">{user.accountBalance.toFixed(2)} EUR</p>
               </div>

     <button className='history-transfer-button' type="button" onClick={(e) => {
         
        setProfileToggle(!profileToggle)
             

      }}>{profileToggle!==true ? 'Profile' : 'Send Money'} </button> 

       { profileToggle!==true ?   <MoneyTransfer/>:<TransactionHistory/>}

          
      


            </>
            :
            <p>No user found</p>
  
           
        }
             
      </div>
    )
}
