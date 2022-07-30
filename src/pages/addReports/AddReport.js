import React from 'react'
import './addReport.css'
import running from '../../images/theif.png'
export default function AddReport() {
    return (
        <div className='addReportContainer'>
            <div>
                <div className='aquwaCardContact'>
                    <h1>
                        add Report
                    </h1>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                client name :
                            </p>
                            <input className='input' />
                        </div>
                        <div className='oneinline1'>  <p>
                            Report date :
                        </p>
                            <input className='input' type='date' />
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                category :
                            </p>
                            <input className='input' />
                        </div>
                        <div className='oneinline1'>  <p>
                            color :
                        </p>
                            <input className='input' />
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                brand :
                            </p>
                            <input className='input' />
                        </div>
                        <div className='oneinline1'>  <p>
                            line Type :
                        </p>
                            <input className='input' />
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                client phone number :
                            </p>
                            <input className='input' />
                        </div>
                        <div className='oneinline1'>  <p>
                            stolen phone number :
                        </p>
                            <input className='input' />
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                mahdar image :
                            </p>
                            <input className='input' type="file" hidden id="addmahdar" />
                            <label for='addmahdar'> <p className='input addmahdar'></p> </label>
                        </div>
                    
                    </div>
                    <div className='line1'>
                    <div className='oneinline1'>
                            <p>
                                phone images :
                            </p>
                            <input className='input' type="file" hidden id="addmahdar" />
                            <label for='addmahdar'> <p className='input addmahdar'></p> </label>
                        </div>
                    
                      
                    </div>

                    <div className='btnContainer'>
                        <button className='yellowBtn'>register</button>
                    </div>
                    <div className='yellowCircle'></div>
                    <img className='theifImage' src={running} alt="running"/>
                </div>
            </div>
        </div>
    )
}
