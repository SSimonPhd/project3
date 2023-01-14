import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'> 
            {/* <img src={Logo} alt='nav'/> */}
        </div>
        <div className='rightSide'> 
            <Link to='/'> Login</Link>
            <Link to='/chat'> Chats</Link>
            <Link to='/AddTrip'> AddTrip</Link>
            
        </div>
    </div>
  )
}

export default Navbar