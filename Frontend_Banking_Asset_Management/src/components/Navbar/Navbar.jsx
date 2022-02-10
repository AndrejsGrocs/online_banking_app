import React, {useContext} from 'react' 
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import logoimg from '../../assets/images/db-bank-logo-navbar150-1.png'




export default function Navbar() {
    const {loggedIn} = useContext(AppContext)
    
    return (
        <nav className='nav'>
        <div className='bank-logo-section'>
           <a className='bank-logo' href="/" >{<img className='nav-logo-img' src={logoimg}></img>}</a>   
        </div>

        <ul className='nav-list'>
        {loggedIn?( 
            <>
            <li><Link to='/' exact activeClassName='active' className='nav-link'> Bank</Link></li>
            <li><Link to='/mission' exact activeClassName='active' className='nav-link'> Mission</Link></li>
            <li><Link to='/investment' exact activeClassName='active' className='nav-link'>Investment</Link></li>
            <li><Link to='/loan' exact activeClassName='active' className='nav-link'>Loan</Link></li>
            <li><Link to='/account' exact activeClassName='active' className='nav-link'> Account</Link></li>
            <li><Link to='/aboutus' exact activeClassName='active' className='nav-link'>About US </Link></li>
            <li><Link to='/profile' exact activeClassName='active' className='nav-link'> Profile</Link></li>
            <li><Link to='/transfer' exact activeClassName='active' className='nav-link'> Transfer Money</Link></li>
        
          
               </>
        ):(
            <>
        <li><Link to='/' exact activeClassName='active' className='nav-link'> Bank</Link></li>
        <li><Link to='/mission' exact activeClassName='active' className='nav-link'> Mission</Link></li>
        <li><Link to='/account' exact activeClassName='active' className='nav-link'> Account</Link></li>
        <li><Link to='/loan' exact activeClassName='active' className='nav-link'>Loan</Link></li>
        <li><Link to='/investment' exact activeClassName='active' className='nav-link'>Investment</Link></li>
        <li><Link to='/aboutus' exact activeClassName='active' className='nav-link'>About US </Link></li>
        
        
       
        </>

        )}
        
       
        </ul>
        {!loggedIn?(
<div className='nav-buttons-section'> 
        <li><button className='button-nav-login' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/login';
      }}> Login</button></li>
        <li><button className='button-nav-signup' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/signup';
      }}>Sign Up</button></li>
        </div>


        ):(
            <div className='nav-buttons-section'>
            <button className='button-nav-logout' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/logout';
      }}>Logout</button>
            </div>
        )}
          

        </nav>
    )
}
