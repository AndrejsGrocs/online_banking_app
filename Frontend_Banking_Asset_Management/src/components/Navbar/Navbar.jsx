import React from 'react' 
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <nav className='nav'>
        <div>
            React Asset Management
        </div>

        <ul className='nav-list'>
        <li><Link to='/' exact activeClassName='active'> News</Link></li>
        <li><Link to='/analytics' exact activeClassName='active'> Analytics</Link></li>
        <li><Link to='/aboutus' exact activeClassName='active'>About US </Link></li>
        <li><Link to='/login' exact activeClassName='active'> Login</Link></li>
        <li><Link to='/signup' exact activeClassName='active'> Sign Up</Link></li>

        </ul>

        </nav>
    )
}
