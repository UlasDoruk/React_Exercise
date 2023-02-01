import "./App.css"
// import {  useEffect } from "react";
// import {init} from "./socketApi"
import Todo from "./components/TODO/todo";

function App() {

  // backend server bağlama kısmı
  // useEffect(() => {
  //   init()
  // }, []);

  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
