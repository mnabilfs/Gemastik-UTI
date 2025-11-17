// src/pages/TentangKami.jsx
import React from "react";
import Navbar_LandingPage from "../components/Navbar_LandingPages";
import { Users, Target, Eye, Zap, Award, Heart } from "lucide-react";
import AIImage from "../assets/AI_TentangKami1.webp";

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar_LandingPage />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-blue-600">HAT</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Kami adalah platform edukasi teknologi yang berfokus pada membantu
            Anda memahami dan memanfaatkan kecerdasan buatan dalam kehidupan
            sehari-hari.
          </p>

          {/* Gambar AI */}
          <div className="mt-8 flex justify-center">
            <img
              src={AIImage}
              alt="AI Technology Illustration"
              className="rounded-2xl shadow-xl object-cover"
              style={{ width: "930px", height: "360px" }}
            />
          </div>
        </div>
      </section>

      {/* Misi & Visi */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Visi Kami</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform edukasi teknologi yang memberdayakan
                setiap individu untuk memahami dan memanfaatkan
                kecerdasan buatan secara etis dan efektif dalam era digital.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Misi Kami</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menyediakan edukasi berkualitas, tutorial praktis,
                dan sumber daya yang mudah dipahami untuk membantu
                beradaptasi dengan perkembangan teknologi AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Kami */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Inovasi */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inovasi</h3>
              <p className="text-gray-600">
                Selalu menghadirkan konten terkini tentang perkembangan
                teknologi AI.
              </p>
            </div>

            {/* Kualitas */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kualitas</h3>
              <p className="text-gray-600">
                Menyajikan informasi yang akurat dan mudah
                dipahami oleh semua kalangan.
              </p>
            </div>

            {/* Kebermanfaatan */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manfaat
              </h3>
              <p className="text-gray-600">
                Fokus pada solusi praktis yang dapat langsung diterapkan dalam
                kehidupan sehari-hari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apa yang Kami Tawarkan */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Apa yang Kami Sediakan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog & Artikel */}
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📝 Blog & Artikel
              </h3>
              <p className="text-gray-600">
                Artikel mendalam tentang berbagai AI tools seperti ChatGPT,
                Claude, Gemini, dan Qwen.
              </p>
            </div>

            {/* Tutorial Praktis */}
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🎓 Tutorial Praktis
              </h3>
              <p className="text-gray-600">
                Panduan langkah demi langkah untuk menggunakan AI dalam berbagai
                keperluan.
              </p>
            </div>

            {/* Berita Terkini */}
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📰 Berita Terkini
              </h3>
              <p className="text-gray-600">
                Update terbaru seputar perkembangan teknologi AI di dunia dan
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Human After Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TentangKami;
