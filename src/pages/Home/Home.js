import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Reports from '../../components/reports/Reports'
import './home.css'
function Home() {
    return (
        <div className='home'>
            <Navbar />
            <About />
            <Services />
            <Reports />
        </div>
    )
}

export default Home