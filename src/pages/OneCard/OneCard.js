import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ReportCardKbir from '../../components/reports/ReportCardKbir'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import './onecard.css'
function OneCard(props) {
    const [data, setData] = useState([])
    const [image, SetImage] = useState([])
    let [loader, setLoader] = useState(true);
    const id = useLocation().state.id;
    const getData = () => {
        axios.get(`http://127.0.0.1:5000/api/report/${id}`, { crossdomain: true }).then(response => {
            setData(response.data.response);
            SetImage(response.data.response.reportimage)
            console.log(response.data.response)
            console.log(image)
        });
    }
    useEffect(() => {
        console.log(id)
        getData()
        setLoader(false);
        console.log(data.reportimage)
    }, [])
    return (
        <div>
            <Navbar />
            {loader && <Loader />}
            {!loader && (
                <div className='aquwaCardkbir'>
                    <div className='flexContainer'>
                        <div className='coloumn1'>
                            <div>  <p className='boldone'><b>Category : </b></p>
                                <p>{data.category}
                                </p></div>
                            <div>  <p className='boldone'><b>color :</b></p>
                                <p>{data.color}
                                </p></div>
                            <div>  <p className='boldone'><b>security code : </b></p>
                                <p>{data.securitycode}
                                </p></div>
                            <div>  <p className='boldone'><b>owner phone number: </b></p>
                                <p>{data.ownerphonenumber}
                                </p></div>
                        </div>

                        <div className='coloumn2'>
                            <div>  <p className='boldone'><b>brand :</b></p>
                                <p>{data.brand}
                                </p></div>
                            <div>  <p className='boldone'><b>line type :</b></p>
                                <p>{data.linetype}
                                </p></div>
                            <div>  <p className='boldone'><b>serial Number: </b></p>
                                <p>{data.serialnumber}
                                </p></div>
                            <div>  <p className='boldone'><b>stolen phone number : </b></p>
                                <p>{data.stolenphonenumber}
                                </p></div>
                        </div>
                        <div className='column3'>
                            <p><span>{data.reportDate}</span></p>
                        </div>
                    </div>
                    <div className='desc'>
                        <p className='desc1'><b>description :</b></p>
                        <p>{data.description}</p>
                    </div>
                    <div className='mahdarimages'>
                        <p className='desc1'><b>mahdar images :</b></p>
                        <div>
                            {image.map((data, index) => {
                                return <img src={`http://127.0.0.1:5000/images/${data.filename}`} alt="mahdar" />
                            })
                            }
                        </div>
                        {/* <img src={`http://127.0.0.1:5000/images/${data.reportimage}`} alt="mahdar" />  */}
                    </div>
                </div>
            )}
        </div>
    )
}
export default OneCard