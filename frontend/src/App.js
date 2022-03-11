import React, { useEffect, useState }from "react";
import './styles.scss'
import Header from "./componant/header";
import AllAccount from "./componant/all_account";
import Operation from "./componant/operation";
const App = () => {
  const [dataUser, setDataUser] = useState()
  const [admin, setAdmin] = useState(false)
  const [dataAccount, setDataAccount] = useState()
  useEffect(() => {
    fetch("http://localhost:4000/user/101426")
      .then( res => res.json())
      .then((result => {
        setDataUser(result)
        if(result.role == "admin") {
          setAdmin(true)
        }
        fetch(`http://localhost:4000/ownaccount/101426`)
          .then( res => res.json())
          .then((result) => setDataAccount(result))
      })
    )
  }, [])

  return (
   <div className="container">
      {dataUser && <Header firstName = {dataUser.username}  lastName = {dataUser.lastname} admin ={admin} />}
      {dataAccount && <Operation />}
      {dataAccount &&  <AllAccount  data={dataAccount}/>}
    </div>
  );
}
   


export default App;
