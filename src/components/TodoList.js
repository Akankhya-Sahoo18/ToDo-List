/*The updated values are received from TodoItem.js and mapped here and then passed as prop to TodoList and rendered in TodoHeader.js */
import React from 'react';
import TodoItem from './TodoItem';
import './style.css';

function TodoList({ todos, updateTodo, deleteTodo, toggleComplete }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </ul>
  );
}

export default TodoList;

