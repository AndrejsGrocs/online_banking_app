import React from 'react'
/* import axios from "../../util/axiosInstance"; */
import axios from 'axios'
import { useState} from 'react' 
import {Link, useNavigate} from 'react-router-dom'
import FormWrapper from '../../components/Common/Wrapper/wrapper'
import ErrorMessage from '../../components/Common/ErrorMessage/errorMessage'



export default function SignUp() {

     const navigate = useNavigate()
     const [isError, setIsError] = useState(false)
     const [errorMessage, setErrorMessage] = useState('')

     const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log("Submit the form");
        const formData = new FormData(event.target);

          const data = {
          firstname:formData.get("firstname"),//get the data from the input with name firstname
          lastname:formData.get("lastname"),//get the data from the input with name lastname
          email: formData.get("email"),//...
          password: formData.get("password"),
          PIN:formData.get("PIN")
        };

         try {
              
           const response = await axios.post("http://localhost:3001/api/user/register", data, {withCredentials:true}); 
           console.log(response)
           if(response.status === 200){
               //everything went well! 
               console.log("user was created");
               navigate("/login");
           }

        } catch (error) {
            console.log(error);
            setIsError(true);
            setErrorMessage(error.response.data.message);
        }
     }



    return (
        <FormWrapper>
        <div className='sign-up-page'>
            
            
            <form className='form-div' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
              <div className="form-group">
                  <label>First name</label>
                  <input type="text" name="firstname"  className="form-control" placeholder="First name" />
              </div>
  
              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" name="lastname"   className="form-control" placeholder="Last name" />
              </div>
  
  
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email"  className="form-control" placeholder="Enter email" />
              </div>
  
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" />
              </div>

               <div className="form-group">
                  <label>Enter PIN</label>
                  <input type="PIN" name="PIN" className="form-control" placeholder="Enter PIN" />
              </div>
  
              <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
              <button className="button-signup">Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered 
              </p>
              <button className='button-signup'><Link to="/login">sign in?</Link></button>
  
        </form>
        </div>
        </FormWrapper>
    )
}