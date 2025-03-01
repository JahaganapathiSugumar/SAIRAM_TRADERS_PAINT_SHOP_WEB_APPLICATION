import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductCatalog from './pages/ProductCatalog'
import ColorVisualizer from './pages/ColorVisualizer'
import EcoFriendly from './pages/EcoFriendly'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/visualizer" element={<ColorVisualizer />} />
          <Route path="/eco-friendly" element={<EcoFriendly />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App