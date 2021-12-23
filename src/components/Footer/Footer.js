import React from 'react'
import fb from '../../assets/botonesBlancos/fb.png'
import ig from '../../assets/botonesBlancos/ig.png'
import yt from '../../assets/botonesBlancos/yt.png'
import wa from '../../assets/botonesBlancos/wa.png'
import tt from '../../assets/botonesBlancos/tt.png'

import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footerOrg'>
                <p>2021 - TODOS LOS DERECHOS RESERVADOS</p>
            </div>
            <div className='footerLinks'>
                <img src={fb} alt={fb} className='imgFooter'/>
                <img src={ig} alt={ig} className='imgFooter'/>
                <img src={yt} alt={yt} className='imgFooter'/>
                <img src={wa} alt={wa} className='imgFooter'/>
                <img src={tt} alt={tt} className='imgFooter'/>
            </div>
        </footer>
    )
}
