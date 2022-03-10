import React from "react";

const Card = ({data}) => {
    console.log(data)
    return(
    <div className="card">
      <h3 className="card__AccountNumber">numero de compte: {data.id}</h3>
      <div className="card__AccountName"> nom de possesseur: {data.user_id} </div>
      {data.balance < 0 && <div className="card__balance--red"> </div>}
      { data.balance >= 0 && <div className="card__balance--green"> </div>}
      <div className="card__update"> mis a jour le {data.update_at}</div>
    </div>
    )
}
export default Card