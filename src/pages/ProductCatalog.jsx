import { useState, useEffect } from 'react'
import { FaFilter, FaStar, FaShoppingCart } from 'react-icons/fa'

const ProductCatalog = () => {
  // Product data
  const allProducts = [
    {
      id: 1,
      name: "Premium Matte Finish",
      brand: "ColorCraft",
      color: "White",
      finish: "Matte",
      price: 500,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Our premium matte finish paint provides excellent coverage with a sophisticated non-reflective appearance."
    },
    {
      id: 2,
      name: "Signature Gloss",
      brand: "ColorCraft",
      color: "Navy Blue",
      finish: "Gloss",
      price: 500,
      image: "https://images.unsplash.com/photo-1580462611434-b10926e2d15e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A high-shine gloss paint that's perfect for trim, doors, and high-impact areas."
    },
    {
      id: 3,
      name: "Natural Satin",
      brand: "EcoPaint",
      color: "Sage Green",
      finish: "Satin",
      price: 500,
      image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "An eco-friendly satin finish paint with a subtle sheen that's easy to clean."
    },
    {
      id: 4,
      name: "Designer Eggshell",
      brand: "LuxColor",
      color: "Beige",
      finish: "Eggshell",
      price: 500,
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A designer-favorite with a subtle, low-luster finish that hides minor imperfections."
    },
    {
      id: 5,
      name: "Ultra Matte",
      brand: "EcoPaint",
      color: "Charcoal",
      finish: "Matte",
      price: 500,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A deep, rich matte finish that adds sophistication to any room."
    },
    {
      id: 6,
      name: "High Gloss Enamel",
      brand: "LuxColor",
      color: "Red",
      finish: "Gloss",
      price: 500,
      image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A durable, high-gloss enamel paint perfect for doors, trim, and furniture."
    },
    {
      id: 7,
      name: "Soft Satin",
      brand: "ColorCraft",
      color: "Dusty Rose",
      finish: "Satin",
      price: 500,
      image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A soft, subtle satin finish in a trendy dusty rose color."
    },
    {
      id: 8,
      name: "Eco Eggshell",
      brand: "EcoPaint",
      color: "Sky Blue",
      finish: "Eggshell",
      price: 500,
      image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "An environmentally friendly eggshell finish with low VOCs."
    },
    {
      id: 9,
      name: "Premium Gloss",
      brand: "LuxColor",
      color: "Black",
      finish: "Gloss",
      price: 500,
      image: "https://images.unsplash.com/photo-1622219809260-ce065fc5277f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A premium high-gloss paint that provides a mirror-like finish."
    },
    {
      id: 10,
      name: "Matte Elegance",
      brand: "ColorCraft",
      color: "Terracotta",
      finish: "Matte",
      price: 500,
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A warm, earthy matte finish that adds character to any space."
    },
    {
      id: 11,
      name: "Satin Luxe",
      brand: "LuxColor",
      color: "Golden Hour",
      finish: "Satin",
      price: 500,
      image: "https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A luxurious satin finish in a warm golden tone."
    },
    {
      id: 12,
      name: "Natural Matte",
      brand: "EcoPaint",
      color: "Olive Green",
      finish: "Matte",
      price: 500,
      image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "An eco-friendly matte paint with natural ingredients and pigments."
    }
  ]

  // State for filters and products
  const [products, setProducts] = useState(allProducts)
  const [filters, setFilters] = useState({
    color: '',
    finish: '',
    brand: ''
  })
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)

  // Get unique values for filter options
  const colors = [...new Set(allProducts.map(product => product.color))]
  const finishes = [...new Set(allProducts.map(product => product.finish))]
  const brands = [...new Set(allProducts.map(product => product.brand))]

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...allProducts]
    
    // Apply filters
    if (filters.color) {
      filteredProducts = filteredProducts.filter(product => product.color === filters.color)
    }
    if (filters.finish) {
      filteredProducts = filteredProducts.filter(product => product.finish === filters.finish)
    }
    if (filters.brand) {
      filteredProducts = filteredProducts.filter(product => product.brand === filters.brand)
    }
    
    // Apply sorting
    filteredProducts.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sortBy === 'price-low') {
        return a.price - b.price
      } else if (sortBy === 'price-high') {
        return b.price - a.price
      }
      return 0
    })
    
    setProducts(filteredProducts)
  }, [filters, sortBy])

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      color: '',
      finish: '',
      brand: ''
    })
    setSortBy('name')
  }

  // Toggle mobile filters
  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className="bg-light min-h-screen">
      {/* Page Header */}
      <div className="bg-dark text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Paint Products</h1>
          <p className="text-xl">Discover our premium selection of paints for any project.</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center justify-center bg-white p-4 rounded-md shadow-sm mb-4"
            onClick={toggleFilters}
          >
            <FaFilter className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear All
              </button>
            </div>
            
            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <select 
                className="w-full p-2 border rounded-md"
                value={filters.color}
                onChange={(e) => handleFilterChange('color', e.target.value)}
              >
                <option value="">All Colors</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>
            
            {/* Finish Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Finish</h3>
              <select 
                className="w-full p-2 border rounded-md"
                value={filters.finish}
                onChange={(e) => handleFilterChange('finish', e.target.value)}
              >
                <option value="">All Finishes</option>
                {finishes.map((finish, index) => (
                  <option key={index} value={finish}>{finish}</option>
                ))}
              </select>
            </div>
            
            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Brand</h3>
              <select 
                className="w-full p-2 border rounded-md"
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
              >
                <option value="">All Brands</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{products.length} products</p>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <select 
                  className="p-2 border rounded-md"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Products */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="card group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button className="btn btn-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <span className="bg-primary text-white px-2 py-1 rounded-md text-sm font-medium">₹{product.price}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-sm text-gray-500">{product.brand} • {product.finish}</span>
                      </div>
                      <div 
                        className="w-8 h-8 rounded-full mb-3"
                        style={{ backgroundColor: product.color.toLowerCase().replace(' ', '') }}
                        title={product.color}
                      ></div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className="text-gray-300" />
                          </div>
                          <span className="text-sm text-gray-500 ml-1">(4.0)</span>
                        </div>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300">
                          <FaShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No products match your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCatalog