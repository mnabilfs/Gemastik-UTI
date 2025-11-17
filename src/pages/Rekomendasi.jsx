// src/pages/Rekomendasi.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar_LandingPage from "../components/Navbar_LandingPages";

// Import gambar yang sudah ada
import DbAIVenti from "../assets/DbAIVenti.jpg";
import DbAI from "../assets/DbAI.png";
import DbGPT from "../assets/DbGPT.png";
import DbZAccount_male from "../assets/DbZAccount_male.png";
import DbZZlogopfpp from "../assets/DbZZlogopfp.jpg";
import AIRekomendasiGif from "../assets/AI_Rekomendasi1.gif";

const Rekomendasi = () => {
  const navigate = useNavigate();

  const rekomendasiData = [
    {
      id: 1,
      title: "Playing a game with help of AI",
      description:
        "Pelajari cara AI merevolusi dunia game dalam memberikan bantuan informasi dan strategi.",
      category: "AI",
      author: "Muhammad Zacky Maulana",
      date: "07 June 2025",
      image: DbAIVenti,
      authorImage: DbZZlogopfpp,
    },
    {
      id: 2,
      title: "AI dalam kurikulum sekolah",
      description:
        "Ide menghadirkan AI ke sekolah bukanlah hal buruk. Di era digital ini, keterampilan teknologi adalah kebutuhan pokok dan harus bertahap.",
      category: "AI",
      author: "Bambang",
      date: "09 July 2025",
      image: DbAI,
      authorImage: DbZAccount_male,
    },
    {
      id: 3,
      title: "Apakah Chat GPT Bagus?",
      description:
        "Chat GPT bagus atau tidak tergantung pada bagaimana dan dalam konteks apa teknologi ini digunakan.",
      category: "GPT",
      author: "Unicorn",
      date: "09 May 2024",
      image: DbGPT,
      authorImage: DbZAccount_male,
    },
  ];

  const handleCardClick = () => {
    // Cek apakah user sudah login
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      // Jika sudah login, bisa navigate ke halaman detail artikel
      navigate("/dashboard");
    } else {
      // Jika belum login, arahkan ke halaman login
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar_LandingPage />

      {/* Hero Section - Sesuai Figma */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Mengetahui Seputar Kecerdasan Buatan Yang Bisa{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Digunakan Sehari-hari
                </span>
              </h1>
              <p className="text-lg md:text-lg text-gray-600 leading-relaxed">
                Rekomendasi kami berisi informasi Kecerdasan Buatan yang bisa
                digunakan dalam kehidupan sehari-hari. Memberikan recomendasi
                terbaik, agar kita tidak kebingungan di era digital saat ini.
              </p>
            </div>

            {/* Right Image - AI GIF */}
            <div className="flex justify-center md:justify-end">
              <img
                src={AIRekomendasiGif}
                alt="AI Rekomendasi Animation"
                style={{ width: "500px", maxWidth: "100%" }}
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Cards Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Beberapa List <span className="text-blue-600">Recomendasi</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rekomendasiData.map((item) => (
              <div
                key={item.id}
                onClick={handleCardClick}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-200 group"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/70 text-white text-xs font-semibold px-4 py-1.5 rounded-lg backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Author Section */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={item.authorImage}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-blue-100 shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {item.author}
                      </p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rekomendasi;