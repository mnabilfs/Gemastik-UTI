import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

// ==================== IMPORT GAMBAR ====================
import bannerImg from "../../assets/DbGPT.png";

import art1 from "../../assets/gemini_pic.jpg";
import art2 from "../../assets/claude_pic.jpg";
import art3 from "../../assets/Aartikel3.jpg";
import art4 from "../../assets/chatgpt_pic.jpg";
import art5 from "../../assets/Aartikel5.jpg";
import art6 from "../../assets/Aartikel6.jpg";
import art7 from "../../assets/DbGPT.png";
import art8 from "../../assets/DbUMKM.png";
import art9 from "../../assets/LlamaCover-1.png";

import author1 from "../../assets/pp_0.jpg";
import author2 from "../../assets/pp_3.jpg";
import author3 from "../../assets/DbzAccount_male.png";
import author4 from "../../assets/DbzDevilAngelpfp.jpg";
import author5 from "../../assets/DbzSubarupfp.jpg";
import author6 from "../../assets/DbzZlogopfp.jpg";
import author7 from "../../assets/DbzAccount_male.png";
import author8 from "../../assets/DbzAccount_male.png";
import author9 from "../../assets/DbzAccount_male.png";

// ==================== DATA ARTIKEL (Mengandung Tanggal & Deskripsi) ====================
const articles = [
  { id: 1, category: "Chatbots", title: "Gemini Al: Apa itu Gemini Al?", img: art1, author: "Oleh Muhammad Nabil Farras Sulthan", authorImg: author1, date: "November 3, 2025", description: "Gemini Al memiliki potensi besar untuk membantu pengguna di berbagai bidang." },
  { id: 2, category: "Chatbots", title: "Kenapa Banyak Orang Memilih Claude?", img: art2, author: "Oleh Muhammad Zacky Maulana", authorImg: author2, date: "November 3, 2025", description: "Claude dikenal sebagai Al dengan jawaban yang terstruktur, tenang, dan sangat rapi." },
  { id: 3, category: "Chatbots", title: "Claude 4.2: AI Natural untuk Percakapan Panjang", img: art3, author: "Luca", authorImg: author3, date: "November 15, 2025", description: "Claude dikenal sebagai AI dengan jawaban yang terstruktur, tenang, dan sangat rapi." },
  { id: 4, category: "Coding AI", title: "Devin AI Update 2025: Sekarang Bisa Kerja Fullstack Sendiri?", img: art4, author: "Aoirun", authorImg: author4, date: "November 14, 2025", description: "Devin AI telah diperbarui dengan kemampuan baru,yaitu ngehandle proyek fullstack dengan mandiri." },
  { id: 5, category: "Creative AI", title: "Suno V4 Pro: Generasi Musik AI yang Nyaris Mirip Manusia", img: art5, author: "Great Moon Aroma", authorImg: author5, date: "November 13, 2025", description: "Suno V4 Pro menghadirkan kualitas audio yang sangat realistis." },
  { id: 6, category: "Production AI", title: "OpenAI Sora+ 2025: Video Realistis 10x Lebih Cepat", img: art6, author: "Muhammad Zacky Maulana", authorImg: author6, date: "November 12, 2025", description: "OpenAI meluncurkan Sora+, menjanjikan rendering video 10 kali lebih cepat dari versi sebelumnya." },
  { id: 7, category: "Creative AI", title: "Runway Gen-3 Alpha: Film AI Kualitas Hollywood", img: art7, author: "Alex", authorImg: author7, date: "November 11, 2025", description: "Runway Gen-3 Alpha bertujuan untuk mendefinisikan kembali produksi film dengan AI." },
  { id: 8, category: "Production AI", title: "Luma Ray 2: AI Kamera 3D untuk Creator Masa Depan", img: art8, author: "Michael", authorImg: author8, date: "November 10, 2025", description: "Luma Ray 2 adalah alat 3D canggih yang memungkinkan kreator  memproses adegan 3D secara langsung." },
  { id: 9, category: "Chatbots", title: "Meta Llama 4: Gratis Tapi Saingan Model Premium?", img: art9, author: "Rio", authorImg: author9, date: "November 9, 2025", description: "Meta Llama 4 hadir sebagai model open-source yang memiliki performa setara dengan model berbayar, mengguncang pasar AI." },
];

export default function EksplorasiAI() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  const navigate = useNavigate();

  const categories = ["All", "Chatbots", "Coding AI", "Creative AI", "Production AI"];

  // ==================== RESPONSIVE CARD PER PAGE ====================
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(2); // mobile
      } else {
        setCardsPerPage(6); // md ke atas → FIXED
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // ==================== FILTER ====================
  const filteredArticles = articles.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / cardsPerPage);
  const paginated = filteredArticles.slice((page - 1) * cardsPerPage, page * cardsPerPage);

  return (
    <div className="px-6 md:px-12 lg:px-16 w-full">

      {/* ==================== BANNER ==================== */}
      <div
        onClick={() => navigate("/notfound")}
        className="flex items-center bg-gray-100 rounded-xl p-5 mb-10 gap-6 cursor-pointer hover:shadow-lg transition"
      >
        <img src={bannerImg} className="w-44 h-32 rounded-lg object-cover" alt="" />

        <div>
          <h3 className="text-lg font-bold mb-1">Top AI of The Week</h3>
          <p className="text-gray-600 text-sm">Pilihan AI terbaik berdasarkan tren terbaru.</p>

          <button
            onClick={() => navigate("/notfound")}
            className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
          >
            Learn More →
          </button>
        </div>
      </div>

      {/* ==================== TITLE + SEARCH ==================== */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Explore</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search AI models..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="border border-gray-300 rounded-lg pl-4 pr-10 py-2 w-72 text-sm"
          />
          <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* ==================== CATEGORY ==================== */}
      <div className="border-b border-gray-300 mb-8">
        <div className="flex justify-center gap-6">
          {categories.map((cat) => (
            <p
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`cursor-pointer pb-2 transition font-semibold -mb-px ${
                activeCategory === cat
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-700 border-b-4 border-transparent"
              }`}
            >
              {cat}
            </p>
          ))}
        </div>
      </div>

      {/* ==================== GRID (KARTU DIUBAH MENGIKUTI SNIPPET BARU) ==================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        
        {paginated.map((item) => (
          <div
            key={item.id}
            // Style kartu dari snippet (border, shadow, hover:scale-105)
            className="p-4 transition-all duration-300 transform bg-white border border-gray-200 shadow cursor-pointer rounded-xl hover:scale-105 hover:shadow-lg active:scale-100"
            onClick={() => item.id === 1 ? navigate("/blog/gemini-ai") : navigate("/notfound")}
          >
            {/* Gambar (h-40) */}
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-40 mb-4 rounded-lg"
            />

            {/* Tanggal (text-blue-900) */}
            <p className="pb-2 text-sm font-medium text-blue-900">
              {item.date}
            </p>

            {/* Judul (text-md, line-clamp-2) */}
            <h5 className="pb-3 font-semibold text-gray-900 text-md line-clamp-2">
              {item.title}
            </h5>
            
            {/* Deskripsi */}
            <p className="pb-3 mb-2 text-sm text-gray-700 line-clamp-3">
              {item.description}
            </p>

            {/* Author (w-6 h-6, text-xs, blue link) */}
            <div className="flex items-center gap-2 mt-3"> 
              <img src={item.authorImg} className="w-6 h-6 rounded-full" alt="author" />
              <p className="text-xs font-medium text-blue-900 hover:underline">
                Oleh {item.author}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* ==================== PAGINATION ==================== */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="w-10 h-10 bg-white shadow rounded-lg hover:bg-gray-100"
        >
          ◀
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 rounded-lg font-bold ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="w-10 h-10 bg-white shadow rounded-lg hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </div>
  );
}