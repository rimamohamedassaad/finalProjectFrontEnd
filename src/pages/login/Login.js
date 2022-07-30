import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../register/register.css'
import './login.css'
function Login() {
  return (
    <div className='loginContainer login'>
      <Navbar />
      <div className='aquwaCard'>
        <h1>
         Login
        </h1>
       <p>
        email :
       </p>
       <input className='input'/>
       <p>
        password :
       </p>
       <input className='input'/>
       <div className='btnContainer'>
        <p> <sapn><a href="#jdjjd"> forgot password</a></sapn></p>
       </div>
       <div className='btnContainer'>
        <button className='yellowBtn'>Login</button>
       </div>
       <div className='btnContainer'>
        <p>Don't you have accoount <sapn><a href="#jdjjd"> register</a></sapn></p>
       </div>
      </div>
    </div>
  )
}

export default Login