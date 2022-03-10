
import React from "react";
import { NavLink } from "react-router-dom";

import './styles.scss'

const Header = ({ firstName, lastName, admin}) => (
        <div className="header">
       <h1 className="header__title"> banking app</h1>
       {firstName &&  <h2 className="header__name"> bienvenue {firstName} {lastName}</h2>}
       <div className="header__separator" />
       <nav className="header__nav">
          <NavLink to="/"  className="header__navlink"> Home</NavLink> 
          {admin && <NavLink to="/creation"  className="header__navlink">creation</NavLink>}
          <NavLink to="/creation"  className="header__navlink">operation</NavLink>
          {!firstName &&  <h2 className="header__loading"> loading</h2>}
       </nav>
       <div className="header__separator" />
    </div>
  
)

export default Header