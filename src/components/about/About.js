import React from 'react'
import './about.css'
import aboutImage from '../../images/aboutImage.png'
function About() {
    return (
        <div className='aboutContainer'>
            <div className='aboutInfo'>
                <p className='abouth1'>mahdar.org</p>
                <p className='aboutSlagon'>make your life safe</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's k</p>
                <p><button className='yellowBtn'>About us</button></p>
            </div>
            <div className='aboutImage'>
                <img src={aboutImage} alt="about" />
            </div>
        </div>
    )
}

export default About