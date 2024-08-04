/*The Main Todo Form.
Users type the todo name, select the date and priority level and click on the add button.
Used the hooks to manage the state of these inputs and prevent default form submission. */
import React, { useState } from 'react';
import './style.css'

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ id: Date.now(),text: input, completed: false,  dueDate, priority });
      setInput(''); 
      setDueDate('');
      setPriority('Medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group mb-2">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add a todo" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
      </div>
      <div className="input-group mb-2">
        <input 
          type="date" 
          className="form-control" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
      </div>
      <div className="input-group mb-2">
        <select 
          className="form-control" 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className='d-flex justify-content-center'>
      <button type="submit" className="custom">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;

