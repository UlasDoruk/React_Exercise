import React, { useEffect, useState } from 'react'

function Todo() {

    const [sentence,setSentence] = useState("")
    const [things,setThings] = useState([])

    const deleteTodo=((id)=>{
        const removeItem = things.filter((todo)=>{
            return things.indexOf(todo) !== id
        })
        setThings(removeItem)
    })

    const todos = (()=>{
        return (
          <React.Fragment>
            <div className="card" >
              <ul className="list-group list-group-flush">
                {things.map((item, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      {item}
                      <button className='deletebtn' onClick={() => deleteTodo(index)}>
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </React.Fragment>
        );
    })

  return (
    <div>
      <input
        type={"text"}
        onChange={(e) => setSentence(e.target.value)}
        placeholder={"TODO"}/>
      <button className="addbtn" onClick={()=>setThings((prev)=>[...prev,sentence])}>ADD</button>
      {todos()}
    </div>
  );
}

export default Todo