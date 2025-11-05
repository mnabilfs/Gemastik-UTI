import React from 'react';
import Navbar_LandingPage from '../components/Navbar_LandingPages';

const LandingPages = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar_LandingPage />
      
      {/* Hero Section - Placeholder */}
      <section className="max-w-screen-xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Selamat Datang di Human After Tech
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Platform pembelajaran teknologi terbaik untuk masa depan Anda
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Mulai Belajar
            </button>
            <button className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Lihat Tutorial
            </button>
          </div>
        </div>
      </section>

      {/* Content sections bisa ditambahkan di sini */}
    </div>
  );
};

export default LandingPages;