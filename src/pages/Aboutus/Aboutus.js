import React from 'react'
import stolen from '../../images/stolen.png'
function Aboutus() {
  return (
    <div>
      <div className='aboutContainer'>
        <div className='aboutInfo'>
          <p className='abouth1'>About us</p>
          <p className='aboutSlagon'>make your life safe</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simp Lorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simpLorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simpLorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simpLorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simpLorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's k</p>
          <p><button className='yellowBtn'>About us</button></p>
        </div>
        <div className='aboutImage'>
          <img src={stolen} alt="about" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus