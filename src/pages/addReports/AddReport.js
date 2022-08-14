import React, { useState, useEffect } from 'react'
import './addReport.css'
import running from '../../images/theif.png'
import plus from '../../images/icons8-add-new-50.png'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
export default function AddReport() {
    const navigate = useNavigate();
    const [colors, setColors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([])
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [ownerName, setownerName] = useState("")
    const [description, setdescription] = useState("")
    const [linetype, setlinetype] = useState("")
    const [serialnumber, setserialnumber] = useState("")
    const [ownerphonenumber, setownerphonenumber] = useState("")
    const [stolenphonenumber, setstolenphonenumber] = useState("")
    const [securitycode, setsecuritycode] = useState("")
    const [reportDate, setreportDate] = useState("")
    const [images, setImages] = useState([]);
    const id = localStorage.getItem('id');
    const HandelAddReport = async (e) => {
        e.preventDefault();
        const image_array = Object.values(images.images);
        const formData = new FormData();
        image_array.forEach((file) => {
            formData.append("reportimage", file);
        });
        formData.append("brand", brand);
        formData.append("category", category);
        formData.append("color", color);
        formData.append("ownerName", ownerName);
        formData.append("description", description);
        formData.append("linetype", linetype);
        formData.append("ownerphonenumber", ownerphonenumber);
        formData.append("stolenphonenumber", stolenphonenumber);
        formData.append("securitycode", securitycode);
        formData.append("serialnumber", serialnumber);
        formData.append("reportDate", reportDate);
        formData.append("user", id);
        console.log("form data", formData);
        await axios
            .post("http://127.0.0.1:5000/api/report", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                setImages("");
                setBrand("");
                setCategory("");
                setColor("");
                setdescription("");
                setsecuritycode("");
                setlinetype("");
                setstolenphonenumber("");
                setownerphonenumber("");
                setreportDate("");
                setownerName("");
                setserialnumber("");
                console.log(res.data);
                navigate("/search");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/color`, { crossdomain: true }).then(response => {
            setColors(response.data.response);
            console.log(response.data.response)
        });
        axios.get(`http://127.0.0.1:5000/api/brand`, { crossdomain: true }).then(response => {
            setBrands(response.data.response);
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
                            <input className='input' placeholder='owner phone name' onChange={(e) => {
                                setownerName(e.target.value);
                                console.log(ownerName)
                            }} required value={ownerName} />
                        </div>
                        <div className='oneinline1'>  <p>
                            Report date :
                        </p>
                            <input className='input' placeholder='report date' type='date' onChange={(e) => {
                                setreportDate(e.target.value);
                                console.log(reportDate)
                            }
                            } name='date' required value={reportDate} />
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                brand :
                            </p>
                            <select className='select' required onChange={(e) => setBrand(e.target.value)}>
                                <option selected disabled>
                                    set brand
                                </option>
                                {brands.map((data, index) => {

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
                            <select className='select' required onChange={(e) => {
                                setColor(e.target.value)
                                console.log(color)
                            }}>
                                <option selected disabled>
                                    set color
                                </option>
                                {colors.map((data, index) => {

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
                                category :
                            </p>
                            <select className='select' required onChange={(e) => {
                                setCategory(e.target.value)
                                console.log(category)
                            }}>
                                <option selected disabled >
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
                            line Type :
                        </p>
                            <select className='select' required onChange={(e) => setlinetype(e.target.value)}>
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
                            <input className='input' required placeholder='stolen phone lockscreen password' onChange={(e) => setsecuritycode(e.target.value)} value={securitycode} />
                        </div>
                        <div className='oneinline1'>  <p>
                            serial number :
                        </p>
                            <input className='input' required placeholder='stolen phone serial number' onChange={(e) => setserialnumber(e.target.value)} value={serialnumber} />
                        </div>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1'>
                            <p>
                                owner phone number :
                            </p>
                            <input className='input' required placeholder='client current phone number' onChange={(e) => setownerphonenumber(e.target.value)} value={ownerphonenumber} />
                        </div>
                        <div className='oneinline1'>  <p>
                            stolen phone number :
                        </p>
                            <input className='input' required placeholder='stolen phone number' onChange={(e) => setstolenphonenumber(e.target.value)} value={stolenphonenumber} />
                        </div>
                    </div>
                    <div>
                        <p>description</p>
                        <textarea className='textarea' required rows='4' placeholder='this phone has a feature that makes it spetial' onChange={(e) => setdescription(e.target.value)} value={description}>

                        </textarea>
                    </div>
                    <div className='line1'>
                        <div className='oneinline1 lineimage'>
                            <p>
                                mahdar images :
                            </p>
                            <input className='input' type="file" required hidden id="addmahdar" onChange={(e) => setImages({ images: e.target.files })} />
                            <img src={plus} alt="add_image" className='plus' />
                            <label for='addmahdar'> <p className='input addmahdar'></p> </label>
                        </div>
                    </div>
                    <div className='btnContainer btnContainerAdd' >
                        <button type='submit' className='yellowBtn' onClick={HandelAddReport}>register</button>
                    </div>
                    <div className='yellowCircle'></div>
                    <img className='theifImage' src={running} alt="running" />
                </div>
            </div>
            <Footer />

        </div>
    )
}
