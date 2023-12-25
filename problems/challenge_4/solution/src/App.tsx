import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])
  const addTodo = ()=> {
    setTodos([...todos, todo])
    setTodo('')
  }

  const deleteTodo = (selectedTodo: string)=> {
    // to delete todos and delete repeated as well
    setTodos(todos.filter(todo => todo != selectedTodo))
  }
    return (
  <div>
      <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button onClick={()=> addTodo()}>Add</button>
      <div>
        {todos?.map((item, index) => (
          <div className="flex" key={index}>
            <p>{item}</p>
            <button onClick={() => deleteTodo(item)}>x</button>
          </div>
        ))}
      </div>
  </div>
)
}

export default App
