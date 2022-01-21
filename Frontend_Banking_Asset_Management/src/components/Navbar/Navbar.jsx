import React, {useContext} from 'react' 
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'




export default function Navbar() {
    const {loggedIn} = useContext(AppContext)
    
    return (
        <nav className='nav'>
        <div className='bank-logo-section'>
           <a className='bank-logo' href="/">Bank Logo</a>   
        </div>

        <ul className='nav-list'>
        {loggedIn?( 
            <>
            <li><Link to='/' exact activeClassName='active'> Bank</Link></li>
        <li><Link to='/mission' exact activeClassName='active'> Mission</Link></li>
        <li><Link to='/investment' exact activeClassName='active'>Investment</Link></li>
        <li><Link to='/loan' exact activeClassName='active'>Loan</Link></li>
        <li><Link to='/account' exact activeClassName='active'> Account</Link></li>
        <li><Link to='/aboutus' exact activeClassName='active'>About US </Link></li>
            <li><Link to='/profile' exact activeClassName='active'> Profile</Link></li>
        
          
               </>
        ):(
            <>
        <li><Link to='/' exact activeClassName='active'> Bank</Link></li>
        <li><Link to='/mission' exact activeClassName='active'> Mission</Link></li>
        <li><Link to='/account' exact activeClassName='active'> Account</Link></li>
        <li><Link to='/loan' exact activeClassName='active'>Loan</Link></li>
        <li><Link to='/investment' exact activeClassName='active'>Investment</Link></li>
        <li><Link to='/aboutus' exact activeClassName='active'>About US </Link></li>
        
       
        </>

        )}
        
       
        </ul>
        {!loggedIn?(
<div className='nav-buttons-section'> 
        <li><button className='button-nav'><Link className='button-link' to='/login' exact activeClassName='active'> Login</Link></button></li>
        <li><button className='button-nav'><Link className='button-link' to='/signup' exact activeClassName='active'> Sign Up</Link></button></li>
        </div>


        ):(
            <div className='nav-buttons-section'>
            <button className='button-nav'><Link className='button-link' to='/logout' exact activeClassName='active'> Logout</Link></button>
            </div>
        )}
          

        </nav>
    )
}
