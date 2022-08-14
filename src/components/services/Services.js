import React from 'react'
import './services.css'
import '../../App.css'
import ServiceCard from './ServiceCard'
function Services() {
    return (
        <div >
            <div className='servicesContainer'><div className='aboutInfo'>
                <p className='abouth1 servicesH1'>our main <span>Services</span></p>
                <p>
                Mahdar website offers many services, using mahdar.org you can create your own account, you can report your phone stolen by adding phone specifications and you can search for stolen phone.

                </p>
                <div>
                </div> <p><button className='yellowBtn'>services</button></p>
            </div>
                <div className='servisecCardContainer'>
                    <ServiceCard title="add report" desc="report your first theft, or add new report if you already did ...." />
                </div>
            </div>
            <div className='servisecCardContainer1'>
                <div className='services2'> <ServiceCard title="search phone" desc="try your first search by creating an account" /></div>
                <div className='services3'> <ServiceCard title="profile account" desc="create your first account and enjoy our services" /></div>
            </div>
        </div>
    )
}
export default Services