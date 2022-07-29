import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
import '../../App.css';
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isLoggedIn, setIsLogedIn] = useState(false)

  useEffect(() => {

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
            <img src={logo} alt="logo" />
          </li></div>
          {/* <div className='navrightContainer'><li>About us</li>
            <li>Contact us</li>
            <li> <button className='blueBtn'>login</button></li>
          </div> */}
          <div className='navrightContainerloggedin'>
            <li>Add post</li>
            <li>search</li>
            <li>About us</li>
            <li>About us</li>
            <li>Contact us</li>
            <li><button className='blueBtn'>profile</button></li>
          </div>
        </ul>
      )}

      <GiHamburgerMenu onClick={toggleNav} className="btn" />


    </nav>
  )
}