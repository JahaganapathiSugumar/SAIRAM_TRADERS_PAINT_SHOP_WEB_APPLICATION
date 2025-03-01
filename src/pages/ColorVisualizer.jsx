import { useState, useRef, useEffect } from 'react'
import { FaUpload, FaUndo, FaRedo, FaDownload, FaPalette } from 'react-icons/fa'

const ColorVisualizer = () => {
  // Predefined room images
  const roomImages = [
    {
      id: 'living-room',
      name: 'Living Room',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      walls: [
        {x: 0.2, y: 0.3, width: 0.6, height: 0.5} // Simplified wall area coordinates (percentage of image)
      ]
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      walls: [
        {x: 0.1, y: 0.2, width: 0.8, height: 0.6}
      ]
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      src: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      walls: [
        {x: 0.1, y: 0.1, width: 0.8, height: 0.5}
      ]
    },
    {
      id: 'exterior',
      name: 'House Exterior',
      src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      walls: [
        {x: 0.2, y: 0.2, width: 0.6, height: 0.6}
      ]
    }
  ]

  // Popular paint colors
  const paintColors = [
    { name: "Serene Blue", hex: "#6A8CAF" },
    { name: "Sage Green", hex: "#9CAF88" },
    { name: "Terracotta", hex: "#CD5C45" },
    { name: "Dusty Rose", hex: "#D8A9A9" },
    { name: "Midnight Navy", hex: "#1D3461" },
    { name: "Golden Hour", hex: "#DCAE62" },
    { name: "Soft White", hex: "#F5F5F5" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Mint Green", hex: "#98FB98" },
    { name: "Lavender", hex: "#E6E6FA" }
  ]

  // State variables
  const [selectedRoom, setSelectedRoom] = useState(roomImages[0])
  const [selectedColor, setSelectedColor] = useState(paintColors[0])
  const [customColor, setCustomColor] = useState('#6A8CAF')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [opacity, setOpacity] = useState(0.7)
  
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  // Initialize canvas when component mounts or when selected room/color changes
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.src = uploadedImage || selectedRoom.src
    
    img.onload = () => {
      // Set canvas dimensions to match image
      canvas.width = img.width
      canvas.height = img.height
      
      // Draw the original image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      // Apply color to walls if not using uploaded image
      if (!uploadedImage) {
        applyColorToWalls(ctx, canvas, selectedRoom.walls, selectedColor.hex)
      }
      
      // Add to history if not navigating through history
      if (historyIndex === history.length - 1 || historyIndex === -1) {
        const newHistoryItem = canvas.toDataURL()
        setHistory([...history.slice(0, historyIndex + 1), newHistoryItem])
        setHistoryIndex(historyIndex + 1)
      }
    }
  }, [selectedRoom, selectedColor, uploadedImage])

  // Apply color to walls
  const applyColorToWalls = (ctx, canvas, walls, color) => {
    walls.forEach(wall => {
      const x = wall.x * canvas.width
      const y = wall.y * canvas.height
      const width = wall.width * canvas.width
      const height = wall.height * canvas.height
      
      ctx.fillStyle = color
      ctx.globalAlpha = opacity
      ctx.fillRect(x, y, width, height)
      ctx.globalAlpha = 1.0
    })
  }

  // Handle room selection
  const handleRoomChange = (room) => {
    setSelectedRoom(room)
    setUploadedImage(null)
  }

  // Handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color)
    setCustomColor(color.hex)
  }

  // Handle custom color change
  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value)
    setSelectedColor({ name: "Custom", hex: e.target.value })
  }

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle undo
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      const img = new Image()
      img.src = history[historyIndex - 1]
      img.onload = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
    }
  }

  // Handle redo
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      const img = new Image()
      img.src = history[historyIndex + 1]
      img.onload = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
    }
  }

  // Handle download
  const handleDownload = () => {
    const canvas = canvasRef.current
    const image = canvas.toDataURL("image/png")
    const link = document.createElement('a')
    link.download = `colorcraft-visualization-${new Date().getTime()}.png`
    link.href = image
    link.click()
  }

  // Handle opacity change
  const handleOpacityChange = (e) => {
    setOpacity(parseFloat(e.target.value))
  }

  return (
    <div className="bg-light min-h-screen">
      {/* Page Header */}
      <div className="bg-dark text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Color Visualizer</h1>
          <p className="text-xl">See how different colors look in your space before you paint.</p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Controls */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Room Selection</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {roomImages.map((room) => (
                  <div 
                    key={room.id}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${selectedRoom.id === room.id ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => handleRoomChange(room)}
                  >
                    <img 
                      src={room.src} 
                      alt={room.name} 
                      className="w-full h-24 object-cover"
                    />
                    <p className="text-center py-1 text-sm">{room.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Upload Your Own Image</h3>
                <div className="flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                  />
                  <button
                    className="btn btn-secondary flex items-center justify-center w-full"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <FaUpload className="mr-2" /> Upload Image
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Color Selection</h2>
              <div className="grid grid-cols-5 gap-2 mb-6">
                {paintColors.map((color) => (
                  <div 
                    key={color.name}
                    className={`cursor-pointer rounded-full w-10 h-10 border-2 transition-all ${selectedColor.hex === color.hex ? 'border-dark scale-110' : 'border-transparent'}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleColorChange(color)}
                    title={color.name}
                  ></div>
                ))}
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Custom Color</h3>
                <div className="flex items-center">
                  <input
                    type="color"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    className="w-10 h-10 rounded-md mr-3"
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    className="flex-1 p-2 border rounded-md"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color Opacity: {Math.round(opacity * 100)}%</h3>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={opacity}
                  onChange={handleOpacityChange}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Actions</h2>
              <div className="flex flex-wrap gap-2">
                <button 
                  className="btn btn-secondary flex-1 flex items-center justify-center py-2"
                  onClick={handleUndo}
                  disabled={historyIndex <= 0}
                >
                  <FaUndo className="mr-2" /> Undo
                </button>
                <button 
                  className="btn btn-secondary flex-1 flex items-center justify-center py-2"
                  onClick={handleRedo}
                  disabled={historyIndex >= history.length - 1}
                >
                  <FaRedo className="mr-2" /> Redo
                </button>
                <button 
                  className="btn btn-primary w-full flex items-center justify-center mt-2 py-2"
                  onClick={handleDownload}
                >
                  <FaDownload className="mr-2" /> Download
                </button>
              </div>
            </div>
          </div>
          
          {/* Canvas Display */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-auto rounded-lg"
                ></canvas>
                <div className="absolute top-4 left-4 bg-white bg-opacity-80 rounded-md p-2">
                  <div className="flex items-center">
                    <div 
                      className="w-6 h-6 rounded-full mr-2"
                      style={{ backgroundColor: selectedColor.hex }}
                    ></div>
                    <span className="text-sm font-medium">{selectedColor.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  {uploadedImage ? 
                    "Note: For uploaded images, you'll need to manually select areas to apply color." :
                    "Tip: Try different colors to see how they transform the space."
                  }
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <FaUpload className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-medium mb-2">1. Select or Upload</h3>
                  <p className="text-gray-600 text-sm">Choose a room or upload your own photo.</p>
                </div>
                <div className="text-center">
                  <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <FaPalette className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-medium mb-2">2. Choose Colors</h3>
                  <p className="text-gray-600 text-sm">Select from our trending colors or create your own.</p>
                </div>
                <div className="text-center">
                  <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <FaDownload className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-medium mb-2">3. Save & Share</h3>
                  <p className="text-gray-600 text-sm">Download your visualization or share it with friends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to bring your visualization to life?</h2>
          <p className="text-xl mb-6">Our color experts can help you choose the perfect paint for your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn bg-white text-primary hover:bg-gray-100">
              Book a Consultation
            </a>
            <a href="/products" className="btn border-2 border-white hover:bg-white hover:text-primary">
              Shop Paint Colors
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorVisualizer