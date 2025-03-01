import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaPaintRoller, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FaPaintRoller className="text-white text-2xl" />
              <span className="text-xl font-bold">Sairam Traders</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Transform your space with expert color consultancy and premium paint products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent"><FaFacebook size={20} /></a>
              <a href="#" className="text-white hover:text-accent"><FaTwitter size={20} /></a>
              <a href="#" className="text-white hover:text-accent"><FaInstagram size={20} /></a>
              <a href="#" className="text-white hover:text-accent"><FaPinterest size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">{translations.home}</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white">{translations.products}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.services}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.aboutUs}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.contact}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.services}</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.colorConsultation}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.interiorDesign}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.commercialSolutions}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.exteriorDesign}</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">{translations.metalWoodDesign}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.contactUs}</h3>
            <address className="not-italic text-gray-300">
              <p className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" />
                10 Sathy Road, Karattadipalayam, Gobi
              </p>
              <p className="flex items-center mb-2">
                <FaPhone className="mr-2" />
                +91 6380057594
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                sairamtradersgobi@gmail.com
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sairam Traders Paint Shop. {translations.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;