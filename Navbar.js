
import {Link, useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//import React, { useState, useEffect } from 'react'



const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  // const [darkMode, setDarkmode] = useState(false);
  //  useEffect(() => {
  //   document.body.className = darkMode ? 'dark' : 'light';
  // }, [darkMode]);

  // const toggleTheme = () =>{
  //   setDarkmode(prev => !prev);
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">cloudbook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active": ""} `} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active": ""} `}to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
         
        </li>
        
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
        {/* <button
        type="button"
        className="btn btn-secondary mx-1"
        onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button> */}
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
      </form>: <button onClick={handleLogout} className=" btn btn-primary"> Logout</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar
