import React, {useState, useEffect} from 'react'
import {  Nav } from 'react-bootstrap';

import './Mayorista.css'
// import imgWhatsapp from '../../assets/botonesBlancos/wa.png'
import { MayoristaList } from './MayoristaList/MayoristaList'
import wa from '../../assets/botonesBlancos/wa.png'

export const Mayorista = () => {
    const [products, setProducts] = useState([])

    const items = async() => {
        const data = await fetch('https://mocki.io/v1/4d384f47-23ae-420f-a69d-ded8882cccf9')
        const product = await data.json()
        setProducts(product)
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            items()
        },1000)
    }, [])
    return (
        <section className='sectionMayorista' id='mayorista'>
            <MayoristaList  products={products}/>
            <div className='divCatalogo'>
            <p>CONTÁCTANOS PARA RECIBIR NUESTRO CATÁLOGO </p>
            <Nav.Link href="https://wa.me/51927866910" target="_blank" rel="noopener noreferrer" className="whatsappMayorista"><img src={wa} alt={wa} /></Nav.Link>
            {/* <img src={imgWhatsapp} alt="Logo whatsapp" className='logoWhatsappBlanco' /> */}
            </div>
        </section>
    )
}

