import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './MayoristaProduct.css'

export const MayoristaProduct = ({ pictureUrl, alt, id}) => {
    return (
        <>

            <BrowserRouter>
                <Link to={`MayoristaProduct/${id}`} >
            </Link>
            </BrowserRouter>
            <img  src={pictureUrl} alt={alt} className='imgCard'/>
        </>
    )
}
