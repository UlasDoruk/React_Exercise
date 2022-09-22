import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import InputEx from "./components/Input/InputEx";
import Fılter from "./components/Fılter/Fılter";

function App() {
  const [contacts,setContacts] = useState([
  {
    name:"Ulaş Doruk",
    phone:"123123"
  },
  {
    name:"Aslı",
    phone:"345345"
  },
  {
    name:"Karaman",
    phone : "565656"
  }
  ])

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <div className="App">
      <Fılter contacts={contacts} />
      <br></br>
      <InputEx addContacts={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
