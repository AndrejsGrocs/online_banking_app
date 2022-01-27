import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import {AppContext} from '../../App'
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
      <h1>Profile</h1>
        {
            user != null 
            ?
            <>
            
            <h1>Name: {user.firstname} {user.lastname}</h1>
            <h2>ID: {user._id}</h2>
            <h3>{user.username}</h3>
            <h2>Email: {user.email}</h2>
            <h2>Account Number: {user.accountNumber}</h2>
            <h2>Account Balance: {user.accountBalance}</h2>
            <button>Assets and Investment</button>
            <button ><Link className='button-link' to='/transfer' exact activeClassName='active'>Money Transfer</Link></button>
            </>
            :
            <p>No user found</p>
  
           
        }
  
      </div>
    )
}
