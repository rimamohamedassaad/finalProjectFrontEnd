import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
import useAuth from "../hooks/useAuth";
import '../../App.css';
export default function Navbar() {
  let { auth } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isLoggedIn, setIsLogedIn] = useState(false)
  useEffect(() => {
    if(auth){
      setIsLogedIn(true)
    }
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  return (
    <nav>
      {(toggleMenu || screenWidth > 664) && (

        <ul className="list">
          <div className='logo'><li>
            <NavLink exact to='/' activeClassName="active" style={{ textDecoration: 'none', color: '#00235E' }}>
              <img src={logo} alt="logo" />
            </NavLink>
          </li></div>
          {/* <div className='navrightContainer'><li>About us</li>
            <li>Contact us</li>
            <li> <button className='blueBtn'>login</button></li>
          </div> */}
          <div className='navrightContainerloggedin'>
            {
              isLoggedIn &&
              <li><NavLink exact to='/add-report' activeClassName="active" style={{ textDecoration: 'none', color: '#00235E' }}>Add Report </NavLink></li>
            }
            {
              isLoggedIn &&
              <li><NavLink exact to='/search' activeClassName="active" style={{ textDecoration: 'none', color: '#00235E' }}>Search</NavLink></li>
            }
            <li><NavLink exact to='/about' activeClassName="active" style={{ textDecoration: 'none', color: '#00235E' }}>About us</NavLink></li>
            <li><NavLink exact to='/contact' activeClassName="active" style={{ textDecoration: 'none', color: '#00235E' }}>Contact us</NavLink></li>
            {/* <li>Contact us</li> */}

            {
              isLoggedIn && <li><button className='blueBtn'>
                <NavLink exact to='/profile' activeClassName="active" style={{ textDecoration: 'none', color: '#fff' }}>Profile</NavLink></button></li>
            }
            {
              !isLoggedIn && <li><button className='blueBtn'>
                <NavLink exact to='/login' activeClassName="active" style={{ textDecoration: 'none', color: '#fff' }}>Login</NavLink></button></li>
            }
          </div>
        </ul>
      )}
      <GiHamburgerMenu onClick={toggleNav} className="btn" />


    </nav>
  )
}