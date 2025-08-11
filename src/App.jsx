import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Mail, Calendar, Users, Heart, Star, Menu, X, Play, Camera, Home, Info, ImageIcon, Video, Map } from 'lucide-react';

const TempleWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Updated temple images with correct paths matching your project structure
  const templeImages = [
    "./Images/deity-main.jpg", 
    "./Images/ceremony.jpg", 
    "./Images/deity-main.jpg",
    "./Images/festival.jpg",
    "./Images/interior-worship.jpg",
    "./Images/shrine-flowers.jpg",
    "./Images/temple-exterior.jpg"
  ];

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % templeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    // { id: 'services', label: 'Services', icon: Heart },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  const dailySchedule = [
    { time: '5:30 AM', event: 'Temple Opening & Suprabhatam' },
    { time: '6:00 AM', event: 'Mangala Aarti' },
    { time: '8:00 AM', event: 'Abhisheka & Alankara' },
    { time: '9:00 AM', event: 'Seva & Darshan' },
    { time: '12:00 PM', event: 'Madhyana Aarti' },
    { time: '6:00 PM', event: 'Sandhya Aarti' },
    { time: '8:00 PM', event: 'Shej Aarti & Temple Closing' }
  ];

  const specialEvents = [
    {
      title: 'Navaratri Celebrations',
      date: 'October 15-24, 2025',
      description: 'Nine days of divine celebration with special poojas and cultural programs'
    },
    {
      title: 'Lakshmi Puja',
      date: 'November 1, 2025',
      description: 'Special worship of Goddess Lakshmi with traditional rituals'
    },
    {
      title: 'Monthly Poornima Celebration',
      date: 'Every Full Moon',
      description: 'Special abhisheka and prasadam distribution'
    }
  ];

  const services = [
    {
      title: 'Special Poojas',
      description: 'Customized worship services for devotees',
      icon: '🕉️'
    },
    {
      title: 'Wedding Ceremonies',
      description: 'Sacred marriage ceremonies in divine presence',
      icon: '💒'
    },
    {
      title: 'Annaprasana',
      description: 'First food ceremony for children',
      icon: '🍚'
    },
    {
      title: 'Housewarming Puja',
      description: 'Griha Pravesh ceremonies and blessings',
      icon: '🏠'
    },
    {
      title: 'Vehicle Blessing',
      description: 'New vehicle puja and protection rituals',
      icon: '🚗'
    },
    {
      title: 'Online Darshan',
      description: 'Virtual temple visits and live streaming',
      icon: '📱'
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <img 
                src={templeImages[currentImageIndex]}
                alt="Temple"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-4xl px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
                    ಪುತ್ತೂರು ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ದೇವಸ್ಥಾನ
                  </h1>
                  <h2 className="text-2xl md:text-3xl mb-4">
                    PUTTUR SHRI MAHALAKSHMI TEMPLE
                  </h2>
                  <p className="text-xl mb-8">ಲಕ್ಷ್ಮಿ ದೇವಿ ಬೆಟ್ಟ - Laxmi Devi Betta</p>
                  {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                    Virtual Darshan
                  </button> */}
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-2xl shadow-lg">
                <Clock className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Temple Timings</h3>
                <p className="text-gray-700">5:30 AM - 8:00 PM</p>
                <p className="text-sm text-gray-600 mt-2">Open all days</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-700">Laxmi Devi Betta</p>
                <p className="text-sm text-gray-600 mt-2">Puttur, Karnataka</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-lg">
                <Heart className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Daily Seva</h3>
                <p className="text-gray-700">Special Poojas</p>
                <p className="text-sm text-gray-600 mt-2">Prasadam available</p>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Today's Schedule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-lg font-semibold">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-8">About Our Temple</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/Images/deity-main.jpg"
                  alt="Temple Deity"
                  className="w-full rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop';
                  }}
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800">Goddess Mahalakshmi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Puttur Shri Mahalakshmi Temple, nestled on the sacred Laxmi Devi Betta, is a revered shrine dedicated to Goddess Mahalakshmi, the divine mother and bestower of wealth, prosperity, and well-being. This ancient temple has been a beacon of spiritual light for centuries, attracting devotees from across Karnataka and beyond.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The temple's unique location on the hill provides a serene and spiritually charged atmosphere, perfect for meditation and worship. The deity of Goddess Mahalakshmi is known for her benevolent grace and for fulfilling the sincere prayers of her devotees.
                </p>
              </div>
            </div>

            {/* Temple Architecture Images */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src="/Images/temple-exterior.jpg"
                  alt="Temple Exterior"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop';
                  }}
                />
                <h3 className="text-xl font-semibold text-gray-800">Temple Architecture</h3>
                <p className="text-gray-600">Beautiful traditional Dravidian architecture showcasing intricate carvings and divine artistry.</p>
              </div>
              <div className="space-y-4">
                <img 
                  src="/Images/interior-worship.jpg"
                  alt="Interior Worship"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=600&h=400&fit=crop';
                  }}
                />
                <h3 className="text-xl font-semibold text-gray-800">Sacred Interior</h3>
                <p className="text-gray-600">The sanctum sanctorum filled with divine energy and adorned with beautiful decorations.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Temple History</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-700">Ancient Origins</h4>
                  <p className="text-gray-600">
                    The temple has ancient roots dating back several centuries. According to local legends, the sacred image of Goddess Mahalakshmi was discovered by devotees in a divine vision, leading to the establishment of this holy shrine.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-700">Cultural Significance</h4>
                  <p className="text-gray-600">
                    The temple plays a vital role in preserving local traditions and cultural heritage. It serves as a center for various religious festivals and community gatherings throughout the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Temple Gallery</h1>
              <p className="text-gray-600">Experience the divine beauty of our sacred temple</p>
            </div>

            {/* Photo Gallery */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-2" />
                Photo Gallery
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {templeImages.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image}
                      alt={`Temple view ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Gallery */}
            {/* <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Video className="w-6 h-6 mr-2" />
                Video Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Morning Aarti</p>
                    <p className="text-gray-500 text-sm">Click to upload your video</p>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Festival Celebrations</p>
                    <p className="text-gray-500 text-sm">Click to upload your video</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Upload Section */}
            {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-dashed border-blue-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Share Your Temple Memories</h3>
              <p className="text-gray-600 text-center mb-4">
                You can replace the placeholder images and videos above with your actual temple photos and videos.
              </p>
              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mr-4">
                  Upload Photos
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg">
                  Upload Videos
                </button>
              </div>
            </div> */}
          </div>
        );

      // case 'services':
      //   return (
      //     <div className="space-y-12">
      //       <div className="text-center">
      //         <h1 className="text-4xl font-bold text-gray-800 mb-4">Temple Services</h1>
      //         <p className="text-gray-600">Sacred rituals and ceremonies for your spiritual journey</p>
      //       </div>

      //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      //         {services.map((service, index) => (
      //           <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      //             <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
      //               <img 
      //                 src={`/Images/${index === 0 ? 'ceremony.jpg' : index === 1 ? 'shrine-flowers.jpg' : index === 2 ? 'festival.jpg' : index === 3 ? 'temple-exterior.jpg' : index === 4 ? 'deity-main.jpg' : 'interior-worship.jpg'}`}
      //                 alt={service.title}
      //                 className="w-full h-full object-cover"
      //                 onError={(e) => {
      //                   e.target.src = `https://images.unsplash.com/photo-${index % 2 === 0 ? '1578662996442-48f60103fc96' : '1605106715994-18d3fecffb98'}?w=400&h=300&fit=crop`;
      //                 }}
      //               />
      //             </div>
      //             <div className="p-6">
      //               <div className="text-4xl mb-4">{service.icon}</div>
      //               <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
      //               <p className="text-gray-600 mb-4">{service.description}</p>
      //               <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
      //                 Book Now
      //               </button>
      //             </div>
      //           </div>
      //         ))}
      //       </div>

      //       <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl">
      //         <h2 className="text-2xl font-semibold text-center mb-6">Online Booking</h2>
      //         <div className="max-w-md mx-auto space-y-4">
      //           <input 
      //             type="text" 
      //             placeholder="Your Name"
      //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      //           />
      //           <input 
      //             type="tel" 
      //             placeholder="Phone Number"
      //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      //           />
      //           <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
      //             <option>Select Service</option>
      //             {services.map((service, index) => (
      //               <option key={index}>{service.title}</option>
      //             ))}
      //           </select>
      //           <input 
      //             type="date"
      //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      //           />
      //           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
      //             Submit Booking Request
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   );

      case 'events':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Temple Events & Festivals</h1>
              <p className="text-gray-600">Join us in celebrating divine occasions throughout the year</p>
            </div>

            <div className="space-y-8">
              {specialEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={`/Images/${index === 0 ? 'festival.jpg' : index === 1 ? 'ceremony.jpg' : 'deity-main.jpg'}`}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://images.unsplash.com/photo-${index === 0 ? '1578662996442-48f60103fc96' : index === 1 ? '1605106715994-18d3fecffb98' : '1590736969955-71cc94901144'}?w=400&h=300&fit=crop`;
                        }}
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                          <p className="text-orange-600 font-medium mb-3">{event.date}</p>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold text-center mb-6">Festival Calendar 2025</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-red-600">Makar Sankranti</p>
                  <p className="text-sm text-gray-600">January 14, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-red-600">Maha Shivaratri</p>
                  <p className="text-sm text-gray-600">February 26, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-red-600">Ram Navami</p>
                  <p className="text-sm text-gray-600">April 6, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-red-600">Krishna Janmashtami</p>
                  <p className="text-sm text-gray-600">August 16, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-red-600">Ganesh Chaturthi</p>
                  <p className="text-sm text-gray-600">August 27, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-red-600">Diwali</p>
                  <p className="text-sm text-gray-600">October 20, 2025</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
              <p className="text-gray-600">Get in touch with us for any queries or assistance</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-orange-500" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">Laxmi Devi Betta, Puttur, Karnataka, India</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-orange-500" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-orange-500" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@puttursrimahalakshmi.org</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-orange-500" />
                      <div>
                        <p className="font-medium">Temple Timings</p>
                        <p className="text-gray-600">5:30 AM - 8:00 PM (All days)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">How to Reach</h3>
                  <div className="space-y-3 text-sm">
                    <p><span className="font-medium">By Car:</span> Puttur is well-connected by road. The temple is located on Laxmi Devi Betta hill.</p>
                    <p><span className="font-medium">By Bus:</span> Regular bus services available from Mangalore, Udupi, and other nearby towns.</p>
                    <p><span className="font-medium">Nearest Railway:</span> Puttur Railway Station (2 km from temple)</p>
                    <p><span className="font-medium">Nearest Airport:</span> Mangalore International Airport (45 km)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Seva Booking</option>
                      <option>Event Information</option>
                      <option>Donation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Map className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
    {/* Mobile Menu Overlay - Shows when hamburger is clicked */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="bg-white w-64 h-full shadow-xl">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    )}

    {/* Header with Navigation */}
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Puttur Shri Mahalakshmi Temple</h1>
              <p className="text-sm text-gray-600">Laxmi Devi Betta</p>
            </div>
          </div>
          
          {/* Desktop Navigation - Always visible */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Hamburger Menu Button - Always visible */}
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6 text-gray-700" /> : 
              <Menu className="w-6 h-6 text-gray-700" />
            }
          </button>
        </div>
      </div>
    </header>




  


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ॐ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Puttur Shri Mahalakshmi Temple</h3>
                  <p className="text-gray-300">Laxmi Devi Betta</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                A sacred shrine dedicated to Goddess Mahalakshmi, offering divine blessings 
                and spiritual solace to devotees from across the region.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <span className="sr-only">YouTube</span>
                  📺
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Daily Schedule</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Booking</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Donations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Live Darshan</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Special Poojas</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wedding Ceremonies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Annaprasana</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vehicle Blessing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accommodation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2025 Puttur Shri Mahalakshmi Temple. All rights reserved. 
              <span className="mx-2">|</span>
              Made with devotion for the divine mother.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 space-y-3 z-40">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110">
          <Phone className="w-6 h-6" />
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110">
          <Heart className="w-6 h-6" />
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110">
          <Play className="w-8 h-8" />
          <span className="sr-only">Live Darshan</span>
        </button>
      </div>

      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm">
        <p>🕉️ Daily Live Aarti at 6:00 AM & 6:00 PM | Join us virtually for divine blessings 🙏</p>
      </div>
    </div>
  );
};

export default TempleWebsite;