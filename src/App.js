import "./App.css"
import {  useEffect } from "react";
import {init} from "./socketApi"
import SingUp from "./components/FormikYup/SingUp";

function App() {

  useEffect(() => {
    init()
  }, []);

  return (
    <div className="App">
      <SingUp/>
    </div>
  );
}

export default App;
