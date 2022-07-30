import React from 'react'
import ReportCard from './ReportCard'

function Reports() {
    return (
        <div className='reportssectionContainer'>
            <p className='abouth1 servicesH1 reporth1'> recent <span> Reports</span></p>
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <div className='servicesBtnContainer'><button className='yellowBtn'>Services</button></div>
            <div className='circle'></div>
        </div>
    )
}

export default Reports