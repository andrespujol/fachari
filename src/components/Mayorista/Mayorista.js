import React, {useState, useEffect} from 'react'
import './Mayorista.css'
import imgWhatsapp from '../../assets/botonesBlancos/whatsappBlanco.png'
import { MayoristaList } from './MayoristaList/MayoristaList'

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
        <section className='sectionMayorista'>
            <MayoristaList  products={products}/>
            <div className='divCatalogo'>
            <p>CONTÁCTANOS PARA RECIBIR NUESTRO CATÁLOGO </p>
            <img src={imgWhatsapp} alt="Logo whatsapp" className='logoWhatsappBlanco' />
            </div>
        </section>
    )
}

