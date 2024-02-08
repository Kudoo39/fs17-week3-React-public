import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Breweries from './components/Breweries/Breweries'
import BreweryDetail from './components/BreweryDetail/BreweryDetail'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/breweries/:id" element={<BreweryDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
