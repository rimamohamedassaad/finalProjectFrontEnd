import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ReportCard from '../../components/reports/ReportCard'
import './profile.css'
import { useNavigate } from "react-router-dom";
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import ReportCardKbir from '../../components/reports/ReportCardKbir';
import axios from 'axios';
import Footer from '../../components/footer/Footer';
function Profile() {
    let [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);
    const [report, setReport] = useState([])
    const navigate = useNavigate();
    const id = localStorage.getItem("id");
    useEffect(() => {
        console.log(id)
        axios.get(`http://127.0.0.1:5000/api/user/${id}`, { crossdomain: true }).then(response => {
            setData(response.data.response);
            setLoader(false)
            console.log(response)
        })
        axios.get(`http://127.0.0.1:5000/api/report/user/${id}`).then(res => {
            setReport(res.data)
            console.log("reports", res.data)
        })
    }, [])
    const logout = () => {
        localStorage.clear();
        navigate("/login");
        window.location.reload("");
    }
    return (
        <div>
            <Navbar />
            {loader && <Loader />}
            {!loader && (
                <div>
                    <div className='aquwaCard'>
                        <h1>
                            Personal info
                        </h1>
                        <div className='personalInfoCard'>
                            <p>
                                username :
                            </p>
                            <input className='inputProfile' type="text" placeholder='enter you user name'
                                value={data.username} required /></div>
                        <div className='personalInfoCard'>
                            <p>
                                email :
                            </p>
                            <input className='inputProfile' type="text" placeholder='enter you user name'
                                required value={data.email} /> </div>
                        <div className='personalInfoCard'>
                            <p>
                                phone number :
                            </p>
                            <input className='inputProfile' type="text" placeholder='enter you user name'
                                required value={data.phonenumber} /></div>
                        <div className='personalInfoCard'>
                            <p>
                                address :

                            </p>
                            <input className='inputProfile' type="text" placeholder='enter you user name'
                                required value={data.address} /></div>
                        <div className='logoutContainer'>
                            <button className='yellowBtn' onClick={logout}>logout</button>
                        </div>
                    </div>
                    <div>
                        <p className='abouth1 servicesH1 reporth1'> your  <span> Events</span></p>I
                        {report.map((data, index) => {
                            return (
                                <Link to='oncard' state={{ id: data._id }} key={index}><ReportCardKbir category={data.category} brand={data.brand} reportDate={data.reportDate}
                                    color={data.color} line={data.linetype} code={data.securitycode} serialnumber={data.serialnumber}
                                    description={data.description}
                                /></Link>)
                        })}
                    </div>
                    <Footer/>
                </div>)}
                
        </div>
    )
}

export default Profile