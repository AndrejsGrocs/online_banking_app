import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import {AppContext} from '../../App'
import TransactionHistory from "../TransferHistory/TransferHistory";
export default function Profile(){
    /* const [user, setUser] = useState(null); */
     const {user} = useContext(AppContext)
     console.log(user)
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
            <h2>Hi  {user.firstname},</h2>
            <h2>Total Balance </h2>
            <h2>{user.accountBalance}</h2>
               </div>

            <button className='history-transfer-button' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/login';
      }}>Transfer Money</button>
            </>
            :
            <p>No user found</p>
  
           
        }
              <TransactionHistory/>
      </div>
    )
}
