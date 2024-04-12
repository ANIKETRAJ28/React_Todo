import TodoList from './components/TodoList/TodoList'

import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import { useState } from 'react'
function App() {

  let [todos, setTodos] = useState([
    {id: 1, text: 'todo 1', isFinished: false},
    {id: 2, text: 'todo 2', isFinished: false},
  ])

  function addTodos(todoText) {
    let nextId = todos.length + 1;
    setTodos([...todos, {id: nextId, isFinished: false, text: todoText}]);
  }

  function deleteTodo(todoId) {
    const updatedTodos = todos.filter(todo => todo.id != todoId);
    setTodos(updatedTodos);
  }

  function editTodo(id, todoText) {
    setTodos(todos.map(todo => {
      if(todo.id == id) {
        todo.text = todoText;
      }
      return todo;
    }));
  }

  return (
    <>
      <AddTodo addTodos={addTodos}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App