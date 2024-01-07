import { useCounterStore } from "../store/useCounterStore"

const Counter = () => {
  const {count, increment, reset, setInt} = useCounterStore()

  const clear = () => {
    return useCounterStore.persist.clearStorage()
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
      <br />
      <button onClick={reset}>reset</button>
      <br />
      <input type="number" onChange={(e) => {setInt(e.target.value)}} value={count}/>
      <br />
      <button onClick={clear}>clear</button>
    </div>
  )
}

export default Counter