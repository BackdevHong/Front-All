import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import todos from './reducers/todos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import axios from 'axios';
import { fetchPosts } from './actions/posts';

type Props = {
  value : any;
  onIncrement : () => void;
  onDecrement : () => void;
}

type Post = {
  userId: number;
  id: number;
  title: string;
}

function App({value, onIncrement, onDecrement} : Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state : RootState) => state.counter)
  const todos : string[] = useSelector((state : RootState) => state.todos);
  const posts : Post[] = useSelector((state : RootState) => state.posts)
  
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type: "ADD_TODO", text: todoValue})
    setTodoValue("")
  }
  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

      <ul>
        {todos.map((todo, idx) => (<li key={idx}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange}/>
        <input type="submit" />
      </form>

      <ul>
        {posts.map((post, idx) => (<li key={idx}>{post.title}</li>))}
      </ul>
    </div>
  );
}

export default App;
