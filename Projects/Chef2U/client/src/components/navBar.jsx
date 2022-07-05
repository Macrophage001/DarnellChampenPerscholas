import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/navBar.css';

const NavBar = ({ user }) => {
    return (
        <nav className='nav-links'>
            <ul>
                <li><Link to='/home' state={{ user }}>Home</Link></li>
                <li><Link to='/account' state={{ user }}>Account</Link></li>
                <li><Link to='/account/orders' state={{ user }}>Orders</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar