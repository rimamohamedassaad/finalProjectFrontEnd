import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './register.css'
function Register() {
  return (
    <div className='loginContainer'>
      <Navbar />
      <div className='aquwaCard'>
        <h1>
          Register
        </h1>
       <p>
        email :
       </p>
       <input className='input'/>
       <p>
        password :
       </p>
       <input className='input'/>
       <p>
        comfirm password :
       </p>
       <input className='input'/>
       <div className='btnContainer'>
        <button className='yellowBtn'>register</button>
       </div>
       <div className='btnContainer'>
        <p>already have account <sapn><a href="#jdjjd"> Login</a></sapn></p>
       </div>
      </div>
    </div>
  )
}

export default Register