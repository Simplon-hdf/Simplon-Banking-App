import react, { useState } from "react";

const Retry_add = () => {
    const[displayRety, setDisplayRety ] = useState(false)
    const [displayAdd, setDisplayAdd ] = useState(false)
    const [newValueRetry , setNewValueRetry ] = useState(Number)
    const [newValueAdd , setNewValueAdd] = useState(Number)

    const handlerChange = (evt) => {
        if (!isNaN(evt.target.value)) {
            setNewValueRetry(evt.target.value)
            console.log(evt.target.value,newValueRetry, "test")
        }
        else if (isNaN(evt.target.value)){
            alert('ne peut accepter que des nombre')
        }
        
    }
    return (
        <div class='retryAdd'>
           <h2 className="retryAdd__title" onClick={()=> setDisplayRety(!displayRety)}> faire un retrait</h2>
           {displayRety && <form className="retryAdd__form">
               <input type='text' value={newValueRetry} className='retryAdd__text'  placeholder="Montant du retrait" onChange={(evt) => handlerChange(evt)}/>
               <input type='submit'  value='envoyer'/>
               </form>}
           <h2 className="retryAdd__title" onClick={()=> setDisplayAdd(!displayAdd)}> faire un depot</h2>
           {displayAdd && <form>toto</form>}
        </div>
    )
}

export default Retry_add