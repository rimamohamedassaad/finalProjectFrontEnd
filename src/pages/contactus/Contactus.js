import React from 'react'
import './contact.css'
import atle from '../../images/atlee.png'
function Contactus() {
    return (
        <div>
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
                        <div className='btnContainer'>
                            <button className='yellowBtn'>register</button>
                        </div>
                        {/* <img src={atle} alt="atle" /> */}


                        {/* <div>
                        <img src={atle} alt="atle" />
                    </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactus