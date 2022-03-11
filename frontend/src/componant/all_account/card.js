import React from "react";
import { Link } from "react-router-dom";

const Card = ({data}) => {
    console.log(data)
    return(
    <Link className="card" to='/transaction'>
      <h3 className="card__accountNumber">numero de compte: {data.id}</h3>
      <div className="card__accountName"> 
       <p>nom de possesseur:</p> 
        <span className="card__username">{data.users.username}</span>
      </div>
      {data.balance >= 0 && <div className="card__balance"> 
          <p>montant sur le compte: </p>
          <span className="card__balanceN--green" > {data.balance} </span>
       </div>}
      { data.balance < 0 && <div className="card__balance"> 
          <p>montant sur le compte:</p>
          <span className="card__balanceN--red" > {data.balance} </span>
      </div>}
      <div className="card__update"> mis a jour le {data.update_at}</div>
    </Link>
    )
}
export default Card