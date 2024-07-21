import React from 'react';
import TodoItem from './TodoItem';

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

