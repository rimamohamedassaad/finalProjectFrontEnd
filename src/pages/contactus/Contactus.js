import React from 'react'
import './contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
function Contactus() {
    return (
        <div>
            <Navbar />
            <div className='contactContainer'>
                <div className='contactInfo'>
                    <div className='aquwaCardContact'>
                        <h1>
                            Contactus
                        </h1>
                        <p>
                            email :
                        </p>
                        <input className='input' />
                        <p>
                            description
                        </p>
                        <textarea className='textarea' rows="7">

                        </textarea>
                        <div className='btnContainer btnadd'>
                            <button className='yellowBtn'>register</button>
                        </div>
                        {/* <img src={atle} alt="atle" /> */}


                        {/* <div>
                        <img src={atle} alt="atle" />
                    </div> */}
                    </div>
                    {/* <div className='buleCircleC'>
                    </div>
                    <div className='yellowCircleC'></div> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contactus