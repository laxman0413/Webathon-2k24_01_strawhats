import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/create-user');
    }
  return (
    <div id="Home">
        <img src="https://cdn.dribbble.com/users/276066/screenshots/10830516/getfit_pt_animated_logo_4x.png" width="100%" height="100%" alt='Bgimage'></img>
        <button className='btn btn-primary mt-20' type='button' onClick={handleSubmit}>Create User</button>
    </div>
  )
}

export default Home