import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaPaintRoller } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import { LanguageContext } from '../context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)
  const { translations } = useContext(LanguageContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <FaPaintRoller className="text-primary text-2xl" />
            <span className="text-xl font-bold text-dark dark:text-white transition-colors duration-200">Sairam Traders</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">{translations.home}</Link>
            <Link to="/products" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">{translations.products}</Link>
            <Link to="/visualizer" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">{translations.colorVisualizer}</Link>
            {/* <Link to="/eco-friendly" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">{translations.ecoFriendly}</Link> */}
            <Link to="#" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">{translations.contact}</Link>
            
            <div className="flex items-center space-x-3 ml-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <LanguageToggle />
            <button 
              className="text-dark dark:text-white focus:outline-none ml-3" 
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium" onClick={toggleMenu}>{translations.home}</Link>
              <Link to="/products" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium" onClick={toggleMenu}>{translations.products}</Link>
              <Link to="/visualizer" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium" onClick={toggleMenu}>{translations.colorVisualizer}</Link>
              {/* <Link to="/eco-friendly" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium" onClick={toggleMenu}>{translations.ecoFriendly}</Link> */}
              <Link to="#" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium" onClick={toggleMenu}>{translations.contact}</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar