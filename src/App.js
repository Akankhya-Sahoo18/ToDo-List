import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoHeader from './components/TodoHeader';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);



  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/todo" 
          element={isAuthenticated ? <TodoHeader /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;
