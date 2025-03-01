import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPaintBrush, FaPalette, FaBuilding, FaHome, FaTools } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const HomePage = () => {
  const { translations } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);

  // Trending colors data
  const trendingColors = [
    { name: "Serene Blue", hex: "#6A8CAF", description: "A calming blue that brings tranquility to any space" },
    { name: "Sage Green", hex: "#9CAF88", description: "An earthy green that connects your home to nature" },
    { name: "Terracotta", hex: "#CD5C45", description: "A warm, earthy tone perfect for creating cozy atmospheres" },
    { name: "Dusty Rose", hex: "#D8A9A9", description: "A soft, muted pink that adds subtle warmth" },
    { name: "Midnight Navy", hex: "#1D3461", description: "A deep, rich navy that adds sophistication" },
    { name: "Golden Hour", hex: "#DCAE62", description: "A warm gold that captures the magic of sunset" }
  ];

  // Services data
  const services = [
   
    {
      title: translations.interiorDesign,
      description: translations.interiorDesignDesc,
      icon: <FaHome className="text-primary text-4xl" />
    },
    {
      title: translations.commercialSolutions,
      description: translations.commercialSolutionsDesc,
      icon: <FaBuilding className="text-primary text-4xl" />
    },
    {
      title: translations.exteriorDesign,
      description: translations.exteriorDesignDesc,
      icon: <FaPaintBrush className="text-primary text-4xl" />
    },
    {
      title: translations.metalWoodDesign,
      description: translations.metalWoodDesignDesc,
      icon: <FaTools className="text-primary text-4xl" />
    }
  ];

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[80vh] flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      >
        <div className="container-custom text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{translations.heroTitle}</h1>
            <p className="text-xl mb-8">{translations.heroSubtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                {translations.exploreColors}
              </Link>
              <a href="#services" className="btn bg-white text-dark hover:bg-gray-100">
                {translations.ourServices}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Colors Section */}
      <section className="section bg-light dark:bg-gray-800 transition-colors duration-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white transition-colors duration-200">{translations.trendingColors}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">{translations.trendingColorsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingColors.map((color, index) => (
              <div key={index} className="card group dark:bg-gray-700 transition-colors duration-200">
                <div 
                  className="h-48 color-swatch"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold dark:text-white transition-colors duration-200">{color.name}</h3>
                    <span className="text-sm font-mono dark:text-gray-300 transition-colors duration-200">{color.hex}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">{color.description}</p>
                  <Link to="/products" className="inline-flex items-center text-primary font-medium group-hover:underline">
                    {translations.seeMore} <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white transition-colors duration-200">{translations.servicesTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">{translations.servicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 flex flex-col items-center text-center dark:bg-gray-700 transition-colors duration-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors duration-200">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{translations.readyToTransform}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{translations.ctaSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn bg-white text-primary hover:bg-gray-100">
              {translations.browseProducts}
            </Link>
            <a href="#" className="btn border-2 border-white hover:bg-white hover:text-primary">
              {translations.bookConsultation}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light dark:bg-gray-800 transition-colors duration-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white transition-colors duration-200">{translations.testimonials}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">{translations.testimonialsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 dark:bg-gray-700 transition-colors duration-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full mr-4 flex items-center justify-center text-white font-bold">SJ</div>
                <div>
                  <h4 className="font-semibold dark:text-white transition-colors duration-200">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">"The color consultation service was incredible. They helped me choose the perfect palette for my open-concept living space, and I couldn't be happier with the results!"</p>
            </div>
            
            <div className="card p-8 dark:bg-gray-700 transition-colors duration-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full mr-4 flex items-center justify-center text-white font-bold">MC</div>
                <div>
                  <h4 className="font-semibold dark:text-white transition-colors duration-200">Michael Chen</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">"Sairam Traders helped us create the perfect atmosphere in our restaurant. Their commercial-grade paints have held up beautifully even in our high-traffic environment."</p>
            </div>
            
            <div className="card p-8 dark:bg-gray-700 transition-colors duration-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full mr-4 flex items-center justify-center text-white font-bold">ER</div>
                <div>
                  <h4 className="font-semibold dark:text-white transition-colors duration-200">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Interior Designer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">"As an interior designer, I rely on Sairam Traders for all my projects. Their custom color mixing service allows me to create unique spaces for each of my clients."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;