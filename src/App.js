import './App.css';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Mayorista } from './components/Mayorista/Mayorista'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Instagram } from './components/Instagram/Instagram'
import { Info } from './components/Info/Info'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">

        <Header/>
          {/* <Link path="/Home" componente={ Home} exact/>
          <Link path="/Nosotros" componente={ Nosotros} />
          <Link path="/Mayorista" componente={Mayorista} /> */}

      <Home/>
      <Mayorista/>
      <Nosotros/>
      <Instagram/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
