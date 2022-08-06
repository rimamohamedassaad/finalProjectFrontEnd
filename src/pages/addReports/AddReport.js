import React, { useState, useEffect } from 'react'
import './addReport.css'
import running from '../../images/theif.png'
import plus from '../../images/icons8-add-new-50.png'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
export default function AddReport() {
    const [color, setColor] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brand, setBrand] = useState([])
    const [data, setData] = useState([])
    const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value)
        setData({ ...data, [e.target.name]: value });
        console.log()
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/color`, { crossdomain: true }).then(response => {
            setColor(response.data.response);
            console.log(response.data.response)
        });
        axios.get(`http://127.0.0.1:5000/api/brand`, { crossdomain: true }).then(response => {
            setBrand(response.data.response);
            console.log(response.data.response)
        });
        axios.get(`http://127.0.0.1:5000/api/category`, { crossdomain: true }).then(response => {
            setCategories(response.data.response);
            console.log(response.data.response)
        });
    }, [])
    return (
        <div className='addReportContainer'>
            <Navbar />
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
                            <input className='input' onChange={handleOnChange} value={data.client_name}/>
                        </div>
                        <div className='oneinline1'>  <p>
                            Report date :
                        </p>
                            <input className='input' type='date' onChange={handleOnChange} name='date' value={data.date}/>
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                category :
                            </p>
                            <select className='input' onChange={handleOnChange}>
                                <option selected disabled>
                                    set category
                                </option>
                                {categories.map((data, index) => {

                                    return (
                                        <option key={index} value={data.id}>{data.name}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>
                        <div className='oneinline1'>  <p>
                            color :
                        </p>
                            <select className='input' onChange={handleOnChange}>
                                <option selected disabled>
                                    set color
                                </option>
                                {color.map((data, index) => {

                                    return (
                                        <option key={index} value={data.id}>{data.name}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                brand :
                            </p>
                            <select className='input' onChange={handleOnChange}>
                                <option selected disabled>
                                    set brand
                                </option>
                                {brand.map((data, index) => {

                                    return (
                                        <option key={index} value={data.id}>{data.name}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>
                        <div className='oneinline1'>  <p>
                            line Type :
                        </p>
                            <select className='input' onChange={handleOnChange}>
                                <option disabled selected>
                                    set line type
                                </option>
                                <option>
                                    alfa
                                </option>
                                <option>
                                    touch
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                security code :
                            </p>
                            <input className='input' onChange={handleOnChange} />
                        </div>
                        <div className='oneinline1'>  <p>
                          serial number :
                        </p>
                            <input className='input' onChange={handleOnChange}/>
                        </div>
                    </div>
                    <div>
                        <p>description</p>
                        <textarea className='textarea' rows='4' onChange={handleOnChange}>

                        </textarea>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1 lineimage'>
                            <p>
                                mahdar image :
                            </p>
                            <img src={plus} alt="add_image" className='plus' />
                            <label for='addmahdar'> <p className='input addmahdar'></p> </label>
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1 lineimage'>
                            <p>
                                phone images :
                            </p>
                            <input className='input' type="file" hidden id="addmahdar" />
                            <img src={plus} alt="add_image" className='plus' />
                            <label for='addmahdar'> <p className='input addmahdar'></p> </label>
                        </div>
                    </div>
                    <div className='btnContainer'>
                        <button className='yellowBtn'>register</button>
                    </div>
                    <div className='yellowCircle'></div>
                    <img className='theifImage' src={running} alt="running" />
                </div>
            </div>
        </div>
    )
}
