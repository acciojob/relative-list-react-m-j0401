
import React from "react"
import relatives from "../data/obj"
function List(){
    
    return (<div>
        <h1>Relative List</h1>
        <ol>
       { relatives.map((data)=>
         <li key={data.id}>{data.name}</li>
    )
 }
 </ol>

    </div>)
}

export default List;