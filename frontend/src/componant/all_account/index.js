import React from "react";
import Card from "./card";
import './styles.scss';

const AllAccount = ({ data }) => (
    <div className="allAcount">
      {
          data.map((accountDetail) => (
              <Card data={accountDetail} key={accountDetail.id}/>
          ))
      }
    </div>
);
export default AllAccount