import React from 'react'
import settingimg from '../../images/settingsimg.png'
function ServiceCard(props) {
    return (
        <div className='serviseCard'>
            <div className='serviceIconDiv'>
                <img src={settingimg} alt="settings" />
            </div>
            <div><p className='serviceCardTitle'>{props.title}</p></div>
            <div> <p>{props.desc}</p></div>
            <div> <p><button className='blueBtn'>more...</button></p></div>

        </div>
    )
}

export default ServiceCard