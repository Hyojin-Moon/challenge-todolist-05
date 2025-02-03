import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../reducers/todos';

const TodoList = () => {

  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if(input.trim()) {
      dispatch(addTodo(input))
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" value={input} onChange={(e)=>{
        setInput(e.target.value);
      }} />
      <button onClick={handleAddTodo}>할일 추가</button>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <span onClick={()=>handleToggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={()=>handleRemoveTodo(todo.id)}>삭제</button>
          </li>
        })}
      </ul>
      </div>
  )
}

export default TodoList;