import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { decreament, increament, increamentByAmount } from "../../redux/counter/counterSlice";

function Counter (){

    const [amount,setAmount] = useState(0)
    const countValue = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return (
      <div>
        <h1>{countValue}</h1>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
        <br></br>
        <input
          type="range"
          min={1}
          max={10000}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p >{amount}</p>
        <button onClick={() => dispatch(increamentByAmount(amount))}>
          Amount
        </button>
      </div>
    );
}

export default Counter