import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header=()=> { 
    const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/todo');
  };
    return (
        <div className='front'>
            <img src="https://th.bing.com/th/id/R.0b2484d69590dddb853d9b23d89f575b?rik=8vk7gIQ6tODVng&riu=http%3a%2f%2f3.bp.blogspot.com%2f-M9w1mDHrlDk%2fTprysUYNfmI%2fAAAAAAAACYg%2fCzELFlquUkw%2fs1600%2fto_do_list300.jpg&ehk=p9UBDNck3IRAqydIihpt132fzc5%2fkf%2bWxGwOpKkJ6Wk%3d&risl=&pid=ImgRaw&r=0" alt='to-do'/>
            <div className='text-center text-white py-5 ps-5'>
                <h1 className='py-5' id="right">Welcome To My-To-Do-List App!</h1>
                <p className='py-5'>“Check It Off: Your Ultimate To-Do Companion.”</p>
                <button type="button" class="btn btn-dark" onClick={handleCreateClick}>Create One</button>
            </div>
        </div>
    )

}

export default Header
