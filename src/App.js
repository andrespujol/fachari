import './App.css';

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
