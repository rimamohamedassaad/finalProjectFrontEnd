import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../register/register.css'
import './login.css'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = (e) => {

    e.preventDefault();
    const data = {

      email: email,
      password: password
    }
    axios.post("http://127.0.0.1:5000/api/user/login", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.user.id);
          navigate("/profile");
          window.location.reload("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
        <input className='input' onChange={(e) => {
          setemail(e.target.value)
          console.log(email)
        }
        } placeholder='rima@gmail.com' />
        <p>
          password :
        </p>
        <input type='password' className='input' onChange={(e) => {
          setPassword(e.target.value)
          console.log(password)
        }
        } />
        <div className='btnContainer'>
          <p> <sapn> forgot password</sapn></p>
        </div>
        <div className='btnContainer'>
          <button className='yellowBtn' onClick={handleRegisterSubmit}>Login</button>
        </div>
        <div className='btnContainer'>
          <p>Don't you have accoount ?<sapn><Link to='/register'> register</Link></sapn></p>
        </div>
      </div>
    </div>
  )
}

export default Login