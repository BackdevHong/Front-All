import { useCounterStore } from "../store";

const Counter = () => {
  const {count, increment, reset, setInt} = useCounterStore()
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
      <br />
      <button onClick={reset}>reset</button>
      <br />
      <input type="number" onChange={(e) => {setInt(e.target.value)}} value={count}/>
    </div>
  )
}

export default Counter