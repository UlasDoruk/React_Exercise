import "./App.css"
import Counter from "./components/counterRedux/Counter"
// import {  useEffect } from "react";
// import {init} from "./socketApi"

function App() {

  // backend server bağlama kısmı
  // useEffect(() => {
  //   init()
  // }, []);

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
