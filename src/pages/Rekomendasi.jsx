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
      navigate("/home");
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
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 md:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-4xl">
                Mengetahui Seputar Kecerdasan Buatan Yang Bisa{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Digunakan Sehari-hari
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 md:text-lg">
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
                className="transition-transform duration-300 transform shadow-2xl rounded-2xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Cards Section */}
      <section className="px-4 py-12 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Beberapa List <span className="text-blue-600">Recomendasi</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rekomendasiData.map((item) => (
              <div
                key={item.id}
                onClick={handleCardClick}
                className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-200 shadow-md cursor-pointer rounded-3xl hover:shadow-2xl hover:-translate-y-2 group"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden bg-gray-100 h-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors line-clamp-2 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Author Section */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={item.authorImage}
                      alt={item.author}
                      className="object-cover border-2 border-blue-100 rounded-full shadow-sm w-11 h-11"
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