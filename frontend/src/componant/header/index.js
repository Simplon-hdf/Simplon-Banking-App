
import React from "react";

import './styles.scss'

const Header = ({ firstName, lastName, admin}) => (
   <div className="header">
      <h1 className="header__title"> banking app</h1>
      {firstName &&  <h2 className="header__name"> bienvenue {firstName} {lastName}</h2>}
      {admin && <div className="header__separator" />}
      {admin && <div className="header__admin"> gestion des operation</div>}
      <div className="header__separator" />
   </div>
  
)

export default Header