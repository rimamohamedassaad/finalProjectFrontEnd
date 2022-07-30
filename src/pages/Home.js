import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import About from '../components/about/About'
import Services from '../components/services/Services'
import Reports from '../components/reports/Reports'
function Home() {
    return (
        <div>
            <Navbar />
            <About />
            <Services />
            <Reports />
        </div>
    )
}

export default Home