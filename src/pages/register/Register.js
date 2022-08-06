import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPass, setComfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleRegisterSubmit = (e) => {

    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password
    }
    axios.post("http://127.0.0.1:5000/api/user/register", data)
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
    <div className='loginContainer'>
      <Navbar />
      <div className='aquwaCard'>
        <form onSubmit={handleRegisterSubmit}>
          <h1>
            Register
          </h1>
          <p>
            username
          </p>
          <input className='input' type="text" placeholder='enter you user name' value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              console.log(username)
            }
            } required />
          <p>
            email :
          </p>
          <input className='input' type='email' value={email} placeholder='enter your email' onChange={(e) => {
            setemail(e.target.value)
            console.log(email)
          }
          } required />
          <p>
            password :
          </p>
          <input className='input' type='password' value={password} placeholder='enter your password'aquwa required />
          <p>
            comfirm password :
          </p>
          <input className='input' type='password' value={comfirmPass} placeholder='enter your password' onChange={(e) =>
            setComfirmPass(e.target.value)
          } />
          {error && <p className='error'>{error}</p>}
          <div className='btnContainer'>
            <button className='yellowBtn' onClick={handleRegisterSubmit}>register</button>
          </div>
          <div className='btnContainer'>
            <p>already have account <sapn><Link to='/login'>Login</Link></sapn></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register