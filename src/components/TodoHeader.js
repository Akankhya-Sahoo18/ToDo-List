/*The Todo information received from user input from TodoForm.js and TodoList.js will have different functionality here.
It can be added, updated, deleted, marked as completed and using hooks which manage the state and will be displayed.
As well as todos completed/ total todos will be displayed.
*/
import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './style.css';


function TodoHead({ todos_completed, total_todos }) {
    return (
        <div className="card custom-card" >
            <div className='mt-5'>
                <h1>Tasks Done</h1>
                <h2>Keep It Up.</h2>
            </div>
            <div className='m-5'>
                <h1>{todos_completed}/{total_todos}</h1>
            </div>
        </div>
    )
}

function TodoHeader() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };
    

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );

    const todos_completed = todos.filter(todo => todo.completed).length;
    const total_todos = todos.length;
    const backgroundStyle={
        backgroundImage: 'url(/img1.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        margin: 0,
      };

    return (
        <div style={backgroundStyle}>
        <div className=' pt-4'>
            <div className='flex-grow-0'><TodoHead todos_completed={todos_completed} total_todos={total_todos} />;</div>
            <div className="container flex-grow-1 todo">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-1 mb-5">
                            <div className="card-body ">
                                <h1 className="card-title text-center mb-4 ">Todo App</h1>
                                <input
                                    type="text"
                                    className="form-control mb-4 input-1"
                                    placeholder="Search todos"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <TodoForm addTodo={addTodo} />
                                <TodoList
                                    todos={filteredTodos}
                                    updateTodo={updateTodo}
                                    deleteTodo={deleteTodo}
                                    toggleComplete={toggleComplete}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TodoHeader
