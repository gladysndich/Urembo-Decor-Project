import React from "react";
import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <header className='appHeader'>
      <nav>
      <Link to="/" style={{borderBottom: "none"}}>
          <h1 className="branding">
            Urembo Decor
          </h1>
        </Link>
        <div className="navigation">
          <NavLink className="button" exact to="/items">
            Shop Items
          </NavLink>
          <NavLink className="button" exact to="/itemcollection">
            Your Collection
          </NavLink>
          <NavLink className="button" exact to="/wishlist">
            Wish List
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;