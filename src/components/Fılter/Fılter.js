import React, { useState } from 'react'

function Fılter({contacts}) {
  const [search,setSearch] = useState("") 
  
  const searched = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(search.toLocaleLowerCase())
    )
  })

  return (
    <div>
      <input placeholder="Search"  onChange={(e)=>setSearch(e.target.value)}></input>
      <ul>
        {searched.map((e,index)=>(
        <li key={index}> Name :  {e.name}
        <br></br>
        Phone : {e.phone} 
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Fılter