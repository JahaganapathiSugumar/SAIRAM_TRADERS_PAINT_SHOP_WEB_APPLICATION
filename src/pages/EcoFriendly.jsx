import { useState } from 'react'
import { FaLeaf, FaRecycle, FaWater, FaSeedling, FaCheck } from 'react-icons/fa'

const EcoFriendly = () => {
  // Eco-friendly paint products
  const ecoProducts = [
    {
      id: 1,
      name: "Zero VOC Interior",
      description: "100% VOC-free paint that's safe for your family and the environment.",
      features: ["Zero VOCs", "Low odor", "Child-safe", "Hypoallergenic"],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Natural Mineral Paint",
      description: "Made from natural earth minerals with no synthetic ingredients.",
      features: ["Natural pigments", "Breathable", "No preservatives", "Biodegradable"],
      image: "https://images.unsplash.com/photo-1580462611434-b10926e2d15e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Recycled Content Paint",
      description: "Premium paint made with up to 35% recycled content from unused paint.",
      features: ["Recycled materials", "Diverts waste", "Full coverage", "Durable finish"],
      image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ]

  // Environmental benefits
  const benefits = [
    {
      title: "Healthier Indoor Air",
      description: "Traditional paints release harmful VOCs for years after application. Our eco-friendly paints have zero or ultra-low VOCs, improving your indoor air quality.",
      icon: <FaLeaf className="text-secondary text-4xl" />
    },
    {
      title: "Reduced Environmental Impact",
      description: "Our manufacturing processes use less water, energy, and raw materials than conventional paint production, reducing our carbon footprint.",
      icon: <FaRecycle className="text-secondary text-4xl" />
    },
    {
      title: "Water Conservation",
      description: "We've reduced water usage in our production by 50% compared to industry standards, saving millions of gallons annually.",
      icon: <FaWater className="text-secondary text-4xl" />
    },
    {
      title: "Sustainable Sourcing",
      description: "We source raw materials from sustainable suppliers who follow ethical and environmentally responsible practices.",
      icon: <FaSeedling className="text-secondary text-4xl" />
    }
  ]

  // Certifications
  const certifications = [
    { name: "Green Seal Certified", logo: "🌱" },
    { name: "LEED Compliant", logo: "🏆" },
    { name: "Cradle to Cradle", logo: "♻️" },
    { name: "Indoor Air Quality Certified", logo: "💨" }
  ]

  // FAQ items with toggle state
  const [openFaq, setOpenFaq] = useState(null)
  
  const faqItems = [
    {
      question: "What makes paint eco-friendly?",
      answer: "Eco-friendly paints are formulated with low or zero volatile organic compounds (VOCs), which are harmful chemicals that evaporate at room temperature and contribute to air pollution. They also often use natural or recycled ingredients, sustainable manufacturing processes, and biodegradable components."
    },
    {
      question: "Do eco-friendly paints perform as well as traditional paints?",
      answer: "Yes! Modern eco-friendly paints offer excellent coverage, durability, and color retention comparable to traditional paints. In many cases, they've been engineered to outperform conventional options while maintaining their environmental benefits."
    },
    {
      question: "Are eco-friendly paints more expensive?",
      answer: "While eco-friendly paints may have a slightly higher upfront cost, they often provide better coverage requiring fewer coats, which can reduce the overall amount of paint needed. Additionally, the health and environmental benefits provide value that extends beyond the price tag."
    },
    {
      question: "How do I dispose of leftover eco-friendly paint?",
      answer: "Even eco-friendly paints should be disposed of properly. Allow small amounts to dry out completely before disposal. For larger amounts, check with your local waste management facility about paint recycling programs. Many of our paint containers are also recyclable."
    }
  ]

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <div 
        className="bg-cover bg-center py-20"
        style={{ 
          backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.8), rgba(16, 185, 129, 0.8)), url('https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      >
        <div className="container-custom text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Eco-Friendly Paint Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Beautiful colors that are better for your health and the planet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#products" className="btn bg-white text-secondary hover:bg-gray-100">
              Explore Eco Paints
            </a>
            <a href="#benefits" className="btn border-2 border-white hover:bg-white hover:text-secondary">
              Environmental Benefits
            </a>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-6">
                At ColorCraft, we believe that beautiful colors shouldn't come at the expense of our planet. 
                That's why we've developed a comprehensive line of eco-friendly paints that minimize 
                environmental impact without compromising on quality or color selection.
              </p>
              <p className="text-gray-600 mb-6">
                Our eco-friendly paints are formulated with low or zero VOCs (Volatile Organic Compounds), 
                sustainable ingredients, and manufactured using processes that reduce waste, water usage, 
                and energy consumption.
              </p>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-light rounded-full px-4 py-2">
                    <span className="text-2xl mr-2">{cert.logo}</span>
                    <span className="text-sm font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Eco-friendly paint production" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eco Products Section */}
      <section id="products" className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Eco-Friendly Paint Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of environmentally conscious paints that deliver beautiful results while protecting your health and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecoProducts.map((product) => (
              <div key={product.id} className="card group overflow-hidden">
                <div className="relative h-56">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full">
                    Eco-Friendly
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <FaCheck className="text-secondary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-secondary w-full">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Environmental Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When you choose our eco-friendly paints, you're making a positive impact on both your living environment and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 flex flex-col md:flex-row items-start gap-6">
                <div className="mb-4 md:mb-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about eco-friendly paints and how they can benefit your home and the environment.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-left">{item.question}</span>
                  <span className="text-secondary text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="bg-white p-4 rounded-b-lg shadow-sm mt-px">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make the Eco-Friendly Choice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our showroom to explore our full range of eco-friendly paints or schedule a consultation with our color experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/products" className="btn bg-white text-secondary hover:bg-gray-100">
              Shop Eco Paints
            </a>
            <a href="#" className="btn border-2 border-white hover:bg-white hover:text-secondary">
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EcoFriendly