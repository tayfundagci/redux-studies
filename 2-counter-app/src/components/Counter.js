import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  resetCounter,
  incrementByAmount,
} from "../redux/counter/counterSlice";

// useSelector hooku ile statik yazan 1 rakamını dinamik kullanabileceğiz.
function Counter() {
  const [amount, setAmount] = useState(3);

  // buradaki value counterSlice.js e gidiyor. value ve name=counter
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>

      {/* bunların onclick fonksiyonlarını CounterSlice içindeki reducer'a yazıyoruz. */}
      {/* useDispatch'e yazgımz actionsları parametre olarak geç. */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        // sonuna ekleyerek gider, yani 05, 051, 0515, onun sebebi string ifade olması, integer olarak algılamıyor. counter slice'da Number olarak al!
      />
      {/* burayı inputa bağımlı hale getirmek için useState */}
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </div>
  );
}

export default Counter;
