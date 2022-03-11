import React from "react";
import Retry_add from "./rety_add_monnay";
import './styles.scss'

const Operation = ({dataAccount}) => (
    <div className="operation">
        <Retry_add  dataAccount={dataAccount}/>
        <div className="operation__separator" />
    </div>
)
export default Operation