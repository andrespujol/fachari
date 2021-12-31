import React from 'react'
import imgNosotros from '../../assets/nosotros.png'
import selloNosotros from '../../assets/selloNosotros.png'
import './Nosotros.css'

export const Nosotros = () => {
    return (
        <section className='nosotros' id='nosotros'>
            <div className='textNosotros'>
                <h2>NOSOTROS</h2>
                <p>Somos una empresa dedicada al diseño y producción de indumentaria femenina. Nos enfocamos en crear diseños cómodos, versátiles, juveniles y actuales, con el objetivo de hacer sentir cómoda y única a la mujer. </p>
            </div>
            <div className='logoNosotros'>
                <img src={selloNosotros} alt="divisor sección" />
            </div>
            <div className='imgNosotros'>
                <img src={imgNosotros} alt="Imagen mujer con ropa deportiva" />
            </div>
        </section>
    )
}
