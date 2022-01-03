import React from 'react'
import {  Nav } from 'react-bootstrap';

import fb from '../../assets/botonesBlancos/fb.png'
import ig from '../../assets/botonesBlancos/ig.png'
// import yt from '../../assets/botonesBlancos/yt.png'
import wa from '../../assets/botonesBlancos/wa.png'
import tt from '../../assets/botonesBlancos/tt.png'

import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footerOrg'>
                <p>2021 - TODOS LOS DERECHOS RESERVADOS</p>
            </div>
            {/* <div className='footerLinks'>
                <img src={fb} alt={fb} className='imgFooter'/>
                <img src={ig} alt={ig} className='imgFooter'/>
                <img src={yt} alt={yt} className='imgFooter'/>
                <img src={wa} alt={wa} className='imgFooter'/>
                <img src={tt} alt={tt} className='imgFooter'/>
            </div> */}
            <Nav defaultActiveKey="#" as="ul" className="menuRedesFooter">
                <Nav.Item as="li">
                    <Nav.Link href="https://www.facebook.com/fachariperu" target="_blank" rel="noopener noreferrer" className="menuRedesLogoFooter" ><img src={fb} alt={fb} /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="https://www.instagram.com/fachariperu" target="_blank" rel="noopener noreferrer" className="menuRedesLogoFooter"><img src={ig} alt={ig} /></Nav.Link>
                </Nav.Item>
                {/* <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" className="menuRedesLogo"><img src={yt} alt={yt} /></Nav.Link>
                </Nav.Item> */}
                <Nav.Item as="li">
                    <Nav.Link href="https://wa.me/51927866910" target="_blank" rel="noopener noreferrer" className="menuRedesLogoFooter"><img src={wa} alt={wa} /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="https://www.tiktok.com/@fachariperu" target="_blank" rel="noopener noreferrer" className="menuRedesLogoFooter"><img src={tt} alt={tt} /></Nav.Link>
                </Nav.Item>
            </Nav>
        </footer>
    )
}
