import TodoList from './TodoList';
import './App.css';
import TodoStore from "./TodoStore"

function App() {
  const todoStore = new TodoStore();
  return (
    <div className="App">
      <TodoList todoStore={todoStore}/>
    </div>
  );
}

export default App;
