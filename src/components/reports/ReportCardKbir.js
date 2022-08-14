import React from 'react'

function ReportCardKbir(props) {
    return (
        <div className='reportCard'>
            <div className='flexContainer'>
            <div className='coloumn1'>
                <div>  <p className='boldone'><b>Category : </b></p>
                    <p>{props.category}
                    </p></div>
                <div>  <p className='boldone'><b>color :</b></p>
                    <p>{props.color}
                    </p></div>
                <div>  <p className='boldone'><b>security code : </b></p>
                    <p>{props.code}
                    </p></div>
            </div>

            <div className='coloumn2'>
                <div>  <p className='boldone'><b>brand :</b></p>
                    <p>{props.brand}
                    </p></div>
                <div>  <p className='boldone'><b>line type :</b></p>
                    <p>{props.line}
                    </p></div>
                <div>  <p className='boldone'><b>serial Number: </b></p>
                    <p>{props.serialnumber}
                    </p></div>
            </div>
            <div className='column3'>
                <p><span>{props.reportDate}</span></p>
            </div>
            </div>
            <div className='desc'>
                <p className='desc1'><b>description :</b></p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ReportCardKbir