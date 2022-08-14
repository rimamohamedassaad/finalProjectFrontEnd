import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ReportCard from '../../components/reports/ReportCard'
import './search.css'
import axios from 'axios'
import '../../App.css'
import ReportCardKbir from '../../components/reports/ReportCardKbir'
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer'
function Search() {
    const [colors, setColors] = useState([]);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([])
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [data, setData] = useState([])
    let [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/report`, { crossdomain: true }).then(response => {
            setData(response.data.response);
            console.log(response)
            setLoader(false);
        });

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
        <div className='searchContainerP'>
            {loader && <Loader />}
            {!loader && (
                <div>
                    <Navbar />
                    <div className='filteringContainer'>
                        <select className='dropDownList' onChange={(e) => {
                            setData(data.filter((item) => item.brand === e.target.value))
                            console.log(data.filter((item) => item.brand === e.target.value))
                        }}>
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
                        <select className='dropDownList' onChange={(e) => {
                            setData(data.filter((item) => item.category === e.target.value))

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
                        <select className='dropDownList' onChange={(e) => {
                            setData(data.filter((item) => item.color === e.target.value))
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
                        <select className='dropDownList' onChange={(e) => setBrand(e.target.value)}>
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
                    <div className='searchcardContainer'>
                        {data.map((data, index) => {
                            return (
                                <Link to='oncard' state={{ id: data._id }} key={index}><ReportCardKbir category={data.category} brand={data.brand} reportDate={data.reportDate}
                                    color={data.color} line={data.linetype} code={data.securitycode} serialnumber={data.serialnumber}
                                    description={data.description}
                                /></Link>)
                        })}

                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Search