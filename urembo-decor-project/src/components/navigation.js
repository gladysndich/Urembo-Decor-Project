import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import Logo from "../images/UremboDecorLogo.png";


function Navigation({ login, handleLogin }) {
  return (
     <nav>
        <img src={Logo} style={{height:100, width:200}} alt="UremboLogo" />
        <div className="site-title">UREMBO DECOR</div>
        <Router>
         <NavLink exact to="/">Home</NavLink>
         <NavLink exact to="/shop">Shop</NavLink>
         <NavLink exact to="/collection">Collection</NavLink>
         <NavLink exact to="/about">About</NavLink>
         <button className="loginBtn" onClick={handleLogin}>{login ? "Logout" : "Login"}
           </button>
        </Router>
     </nav>
  );
}

export default Navigation;