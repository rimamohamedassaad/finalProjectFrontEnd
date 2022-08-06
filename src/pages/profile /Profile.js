import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ReportCard from '../../components/reports/ReportCard'
import './profile.css'
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login");
        window.location.reload("");
    }
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
                <div>
                    <button className='blueBtn' onClick={logout}>logout</button>
                </div>
            </div>
            <div>
                <p className='abouth1 servicesH1 reporth1'> your  <span> Events</span></p>I
                <ReportCard />
                <ReportCard />
                <ReportCard />
            </div>

        </div>
    )
}

export default Profile