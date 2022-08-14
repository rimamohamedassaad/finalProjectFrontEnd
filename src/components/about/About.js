import React from 'react'
import './about.css'
import aboutImage from '../../images/aboutImage.png'
function About() {
    return (
        <div className='aboutContainer'>
            <div className='aboutInfo'>
                <p className='abouth1'>mahdar.org</p>
                <p className='aboutSlagon'>make your life safe</p>
                <p>
                Mahdar  is a website that helps you to report the theft of your phone if you get robbed, or if you want to buy a second-hand phone and you want to know if it was stolen or not. 

                    </p>
                <p><button className='yellowBtn'>About us</button></p>
            </div>
            <div className='aboutImage about'>
                <img src={aboutImage} alt="about" />
            </div>
        </div>
    )
}

export default About