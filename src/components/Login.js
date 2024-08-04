/*Login Page and all the functionalities, user needs to enter email, password to login, and login button. 
If not previously registered an alert is shown 'Invalid email or password or you need to sign up first'. 
So user can click on SignUp link present at the bottom of Login card.*/
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            setIsAuthenticated(true);
            navigate('/todo');
        } else {
            alert('Invalid email or password or you need to sign up first');

        }
    };
    const backgroundStyle={
        backgroundImage: 'url(/img1.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
      };

    return (
        <div style={backgroundStyle}>
            <div className="container-1 mt-0" >
            <div className="custom-card-1">
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
                <div className="mt-3 text-center">
                    <p>Haven't signed up yet? <Link to="/signup" className="btn link">Sign Up</Link></p>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default Login;


