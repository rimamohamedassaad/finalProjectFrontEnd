import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ReportCard from '../../components/reports/ReportCard'
import './search.css'
import axios from 'axios'
import '../../App.css'
import ReportCardKbir from '../../components/reports/ReportCardKbir'
function Search() {
    const [colors, setColors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([])
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [data, setData] = useState([])
    const filterByColor = async () => {
        await axios.get(`http://127.0.0.1:5000/api/report/color/${color}`).then(response =>{
            setData(response.data.response);
        })
    }
    const filterByBrand = async () => {
        await axios.get(`http://127.0.0.1:5000/api/report/brand/${brand}`).then(response =>{
            setData(response.data.response);
        })
    }
    const filterByCategory = async () => {
        axios.get(`http://127.0.0.1:5000/api/report/category/${category}`, { crossdomain: true }).then(response => {
            setData(response.data.response);
            console.log(response)
            //   setLoader(false);
        });
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/report`, { crossdomain: true }).then(response => {
            setData(response.data.response);
            console.log(response)
            //   setLoader(false);
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
            <Navbar />
            <div className='filteringContainer'>
                <select className='dropDownList' onChange={(e) => {setBrand(e.target.value)
                filterByBrand()}}>
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
                    setCategory(e.target.value)
                    filterByCategory();
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
                    setColor(e.target.value)
                    filterByColor()
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
                    return (<ReportCardKbir category={data.category} brand={data.brand} reportDate={data.reportDate}
                        color={data.color} line={data.linetype} code={data.securitycode} serialnumber={data.serialnumber}
                        description={data.description}
                    />)
                })}
            </div>


        </div>
    )
}

export default Search