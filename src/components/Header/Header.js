import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Header.css'
// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';
import fb from '../../assets/botonesVerdes/fb.png'
import ig from '../../assets/botonesVerdes/ig.png'
// import yt from '../../assets/botonesVerdes/yt.png'
import wa from '../../assets/botonesVerdes/wa.png'
import tt from '../../assets/botonesVerdes/tt.png'
import logo from '../../assets/Isotipo.png'


export const Header = () => {


    return (
        <>
        <header>
            <div className='divLogo'>
                <Nav defaultActiveKey="/" as="ul" className="menuLogo"> 
                    <Nav.Item as="li" className='logo'>
                        <Nav.Link href="/"><img src={logo} alt={logo} /></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

        <h1>FACHARI</h1>
        <Nav defaultActiveKey="/" as="ul" className="menu"> 
            <Nav.Item as="li">
                <Nav.Link href="#nosotros" className="menuLinks">NOSOTROS</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#mayorista" className="menuLinks">MAYORISTA</Nav.Link>
            </Nav.Item>
        </Nav>
        <Nav defaultActiveKey="#" as="ul" className="menuRedes">
            <Nav.Item as="li">
                <Nav.Link href="https://www.facebook.com/fachariperu" target="_blank" rel="noopener noreferrer" className="menuRedesLogo" ><img src={fb} alt={fb} /></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="https://www.instagram.com/fachariperu" target="_blank" rel="noopener noreferrer" className="menuRedesLogo"><img src={ig} alt={ig} /></Nav.Link>
            </Nav.Item>
            {/* <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className="menuRedesLogo"><img src={yt} alt={yt} /></Nav.Link>
            </Nav.Item> */}
            <Nav.Item as="li">
                <Nav.Link href="https://wa.me/51927866910" target="_blank" rel="noopener noreferrer" className="menuRedesLogo"><img src={wa} alt={wa} /></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="https://www.tiktok.com/@fachariperu" target="_blank" rel="noopener noreferrer" className="menuRedesLogo"><img src={tt} alt={tt} /></Nav.Link>
            </Nav.Item>
        </Nav>
            {/* <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Fachari</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to={'/Nosotros'}>NOSOTROS</Nav.Link>
                    <Nav.Link to={'/Mayorista'}>MAYORISTA</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link href="#home"><img src={fb} alt={fb} /></Nav.Link>
                    <Nav.Link href="#home"><img src={ig} alt={ig} /></Nav.Link>
                    <Nav.Link href="#home"><img src={yt} alt={yt} /></Nav.Link>
                    <Nav.Link href="#home"><img src={wa} alt={wa} /></Nav.Link>
                    <Nav.Link href="#home"><img src={tt} alt={tt} /></Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}
            {/* <div className="titulo">
                <div className="logo">
                    <img src={logo} alt={logo} />
                </div>
                <h1>FACHARI</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/Nosotros">NOSOTROS</Link></li>
                    <li><Link to="/Mayorista">MAYORISTAS</Link></li>

                </ul>
            </nav>
            <div>
                <img src={fb} alt={fb} className='imgHeader'/>
                <img src={ig} alt={ig} className='imgHeader'/>
                <img src={yt} alt={yt} className='imgHeader'/>
                <img src={wa} alt={wa} className='imgHeader'/>
                <img src={tt} alt={tt} className='imgHeader'/>
            </div> */}
        </header>
        </>
    )
}
