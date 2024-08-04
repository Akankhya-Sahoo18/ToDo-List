/*Home Page where user can click on Create one button to begin and gets navigate to Login Page */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {ReactTyped} from 'react-typed';
import './style.css';

const Header = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/login');
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
      <div className='text-center text-white head'>
        <p className='py-5 fs-1' id="right"><ReactTyped
          strings={['Welcome To My-To-Do-List App!']}
          typeSpeed={40}
          backSpeed={50}
          loop={false}
        /></p>
        <p className='py-5 fs-3'>“Check It Off: Your Ultimate To-Do Companion.”</p>
        <button type="button" class="btn custom" onClick={handleCreateClick}>Create One</button>
      </div>
    </div>
  )

}

export default Header
