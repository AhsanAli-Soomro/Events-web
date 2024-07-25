import React from 'react'

function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/Hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-6">Welcome to Our Event</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">Join us for an unforgettable experience</p>
        <a href="/Event" className="px-6 text-white rounded-full bg-black hover:bg-slate-800 py-3 transition duration-300">Get Start</a>
      </div>
    </section>
  )
}

export default HeroSection;
