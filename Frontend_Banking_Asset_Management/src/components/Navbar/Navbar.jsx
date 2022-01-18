import React, {useContext} from 'react' 
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'




export default function Navbar() {
    const {loggedIn} = useContext(AppContext)
    
    return (
        <nav className='nav'>
        <div>
            React Asset Management
        </div>

        <ul className='nav-list'>
        {loggedIn?( 
            <>
            <li><Link to='/' exact activeClassName='active'> News</Link></li>
        <li><Link to='/analytics' exact activeClassName='active'> Analytics</Link></li>
        <li><Link to='/aboutus' exact activeClassName='active'>About US </Link></li>
            <li><Link to='/profile' exact activeClassName='active'> Profile</Link></li>
        <li><Link to='/logout' exact activeClassName='active'> Logout</Link></li>
          
               </>
        ):(
            <>
        <li><Link to='/' exact activeClassName='active'> News</Link></li>
        <li><Link to='/analytics' exact activeClassName='active'> Analytics</Link></li>
        <li><Link to='/aboutus' exact activeClassName='active'>About US </Link></li>
        <li><Link to='/login' exact activeClassName='active'> Login</Link></li>
        <li><Link to='/signup' exact activeClassName='active'> Sign Up</Link></li>
        </>

        )}
        

        </ul>

        </nav>
    )
}
