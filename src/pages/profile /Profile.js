import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ReportCard from '../../components/reports/ReportCard'
import './profile.css'
function Profile() {
    return (
        <div>
            <Navbar />
            <div className='aquwaCard'>
                <h1>
                    Personal info
                </h1>
                <div className='personalInfoCard'>
                    <p>
                        username
                    </p>
                    <input className='inputProfile' type="text" placeholder='enter you user name' defaultValue='Rima assaad'
                        required /></div>
                <div className='personalInfoCard'>
                    <p>
                        email
                    </p>
                    <input className='inputProfile' type="text" placeholder='enter you user name'
                        required /></div>
                <div className='personalInfoCard'>
                    <p>
                        phone number
                    </p>
                    <input className='inputProfile' type="text" placeholder='enter you user name'
                        required /></div>
                <div className='personalInfoCard'>
                    <p>
                        address
                    </p>
                    <input className='inputProfile' type="text" placeholder='enter you user name'
                        required /></div>

            </div>
            <div>
                <p className='abouth1 servicesH1 reporth1'> your  <span> Events</span></p>I
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
            </div>

        </div>
    )
}

export default Profile