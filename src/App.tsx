import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Breweries from './pages/Breweries/Breweries'
import BreweryDetail from './pages/BreweryDetail/BreweryDetail'
import Footer from './components/Footer/Footer'
import Subscription from './pages/Subscription/Subscription'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/breweries/:id" element={<BreweryDetail />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
