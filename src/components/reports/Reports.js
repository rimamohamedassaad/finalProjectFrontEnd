import React, { useState, useEffect } from 'react'
import ReportCard from './ReportCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReportCardKbir from './ReportCardKbir'
function Reports() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/report`, { crossdomain: true }).then(response => {
            setData(response.data.response);
            console.log(response)
            //   setLoader(false);
        });
    }, [])


    return (
        <div className='reportssectionContainer'>
            <p className='abouth1 servicesH1 reporth1'> recent <span> Reports</span></p>
            {data.map((data, index) => {
                return (
                <Link to='oncard'state={{ id: data._id }} key={index}>
                <ReportCardKbir category={data.category}  brand={data.brand} reportDate={data.reportDate}
                color={data.color} line={data.linetype} code={data.securitycode} serialnumber={data.serialnumber} 
                description={data.description}
                />
                </Link>)
            })}
            <div className='servicesBtnContainer'><button className='yellowBtn'>Services</button></div>
            <div className='circle'></div>
        </div>
    )
}

export default Reports