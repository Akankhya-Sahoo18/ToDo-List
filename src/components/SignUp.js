/*SignUp page and all functionalities.
User needs to register themself using username, email and password and click on signup botton.
Then they are redirected to the login page where they need to login. */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('User already exists');
    } else {
      users.push({ email, username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful');
      navigate('/login');
    }
  };
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
    <div className="container-1 mt-0" >
        <div className='custom-card-1'>
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;

