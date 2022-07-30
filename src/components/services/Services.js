import React from 'react'
import './services.css'
import '../../App.css'
import ServiceCard from './ServiceCard'
function Services() {
    return (
        <div >
            <div className='servicesContainer'><div className='aboutInfo'>
                <p className='abouth1 servicesH1'>our main <span>Services</span></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's k</p>
                <div>
                </div> <p><button className='yellowBtn'>About us</button></p>
            </div>
                <div className='servisecCardContainer'>
                    <ServiceCard title="add report" desc="Lorem Ipsum is simply dummy text of the printing" />
                </div>
            </div>
            <div className='servisecCardContainer1'>
               <div className='services2'> <ServiceCard title="add report" desc="Lorem Ipsum is simply dummy text of the printing" /></div>
               <div className='services3'> <ServiceCard title="add report" desc="Lorem Ipsum is simply dummy text of the printing" /></div>
            </div>
        </div>
    )
}

export default Services