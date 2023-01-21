import React from 'react';
import { FcReuse } from "react-icons/fc";
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import { removeToken } from './Logout/Logout';
import '../Header/styles.scss';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">Solo Traveler</Link> 
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chats">Chats</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addtrip">Add Trip</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" onClick={removeToken} to="/login">Logout<FcReuse /></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;  