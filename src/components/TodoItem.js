/*TodoItem.js handles the form while it is currently being edited using hooks to manage the state changes.
The updated values are then passed as prop to TodoItem which is mapped in TodoList.js and then rendered in TodoHeader.js where the updates are handled.*/
import React, { useState } from 'react';
import './style.css';

function TodoItem({ todo, updateTodo, deleteTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(todo.text);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const [priority, setPriority] = useState(todo.priority);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      text: input,
      dueDate,
      priority
    });
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center options">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)} 
        className="me-2"
      />
      {isEditing ? (
        <>
          <input 
            type="text" 
            className="form-control me-2" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onBlur={handleUpdate}
            onKeyPress={(e) => { if (e.key === 'Enter') handleUpdate() }}
          />
          <input 
            type="date" 
            className="form-control me-2" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select 
            className="form-control me-2" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
          >
            <option className='options' value="High">High</option>
            <option className='options' value="Medium">Medium</option>
            <option className='options' value="Low">Low</option>
          </select>
        </>
      ) : (
        <>
          <span 
            className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through' : ''}`} 
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
          <span className="me-2 date">Due: {todo.dueDate || 'N/A'}</span>
          <span className="badge me-1">{todo.priority}</span>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)} className="btn custom">Delete</button>
    </li>
  );
}

export default TodoItem;
