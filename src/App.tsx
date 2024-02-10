import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react'

import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
const Home = React.lazy(() => import('./pages/Home/Home'))
const Nav = React.lazy(() => import('./components/Nav/Nav'))
const Breweries = React.lazy(() => import('./pages/Breweries/Breweries'))
const BreweryDetail = React.lazy(() => import('./pages/BreweryDetail/BreweryDetail'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const Subscription = React.lazy(() => import('./pages/Subscription/Subscription'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/breweries/:id" element={<BreweryDetail />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
