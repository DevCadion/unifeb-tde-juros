import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JurosSimples from './pages/JurosSimples'
import CapitalInicial from './pages/CapitalInicial'
import TaxaUnitaria from './pages/TaxaUnitaria'
import Periodo from './pages/Periodo'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/juros-simples' element={<JurosSimples />} />
        <Route path='/capital-inicial' element={<CapitalInicial />} />
        <Route path='/taxa-unitaria' element={<TaxaUnitaria />} />
        <Route path='/periodo' element={<Periodo />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
