import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import bannerImg from "../../assets/topai.jpg";

import art1 from "../../assets/gemini_pic.jpg";
import art2 from "../../assets/claude_pic.jpg";
import art3 from "../../assets/Aartikel3.jpg";
import art4 from "../../assets/PIAI.png";
import art5 from "../../assets/PerplexityAI.png";
import art6 from "../../assets/GroxAI.png";
import art7 from "../../assets/Deepseek.png";
import art8 from "../../assets/Devin.png";
import art9 from "../../assets/Github.png";
import art10 from "../../assets/Replit.png";
import art11 from "../../assets/Codesium.png";
import art12 from "../../assets/Cursor.png";
import art13 from "../../assets/Midjourney.png";
import art14 from "../../assets/Dalle.png";
import art15 from "../../assets/Stable.jpg";
import art16 from "../../assets/runway.png";
import art17 from "../../assets/Adobe.jpg";
import art18 from "../../assets/Leonardo.png";
import art19 from "../../assets/notion.png";
import art20 from "../../assets/Perplexity-AI-1.jpg";
import art21 from "../../assets/Note.png";
import art22 from "../../assets/Ms-copilot.png";
import art23 from "../../assets/tome-ai.jpg";
import art24 from "../../assets/Otter-AI.jpg";

// Import Aset Penulis
import author1 from "../../assets/pp_0.jpg";
import author2 from "../../assets/pp_3.jpg";
import author3 from "../../assets/DbzAccount_male.png";
import author4 from "../../assets/DbzDevilAngelpfp.jpg";
import author5 from "../../assets/DbzSubarupfp.jpg";
import author6 from "../../assets/DbzZlogopfp.jpg";
import author7 from "../../assets/DbzAccount_male.png";


// ==================== DATA ARTIKEL ====================
const articles = [
  // --- CHATBOTS (6) ---
  { id: 1, category: "Chatbots", title: "Gemini Al: Apa itu Gemini Al?", img: art1, author: "Oleh Muhammad Nabil Farras Sulthan", authorImg: author1, date: "November 3, 2025", description: "Gemini Al memiliki potensi besar untuk membantu pengguna di berbagai bidang." },
  { id: 2, category: "Chatbots", title: "kenapa Banyak Orang Memilih Claude?", img: art2, author: "Oleh Muhammad Zacky Maulana", authorImg: author2, date: "November 3, 2025", description: "Claude dikenal sebagai AI dengan jawaban yang terstruktur, tenang, dan sangat rapi." },
  { id: 3, category: "Chatbots", title: "Gemini (Google): Multimodal dan Terintegrasi Google", img: art3, author: "Oleh Luca", authorImg: author3, date: "November 15, 2025", description: "AI yang fokus pada percakapan, reasoning, dan bantuan teks." },
  { id: 4, category: "Chatbots", title: "Pi AI (Inflection AI): Pendamping Percakapan yang Personal", img: art4, author: "Oleh Aoirun", authorImg: author7, date: "Oktober 14, 2025", description: "AI yang fokus pada percakapan, reasoning, dan bantuan teks." },
  { id: 5, category: "Chatbots", title: "Perplexity AI: AI Riset yang Jauh Lebih Akurat", img: art5, author: "Oleh Oozora subaru", authorImg: author5, date: "Januari 13, 2025", description: "AI yang fokus pada percakapan, reasoning, dan bantuan teks." },
  { id: 6, category: "Chatbots", title: "Grok (xAI): AI canggih dari Elon Musk", img: art6, author: "Oleh Zhari", authorImg: author6, date: "Mei 12, 2025", description: "AI yang fokus pada percakapan, reasoning, dan bantuan teks." },

  // --- CODING AI (6) ---
  { id: 7, category: "Coding AI", title: "DeepSeek-Coder: Open-Source Code Generator Terbaik", img: art7, author: "Oleh Andre", authorImg: author7, date: "Januari 11, 2025", description: "Generator kode open source untuk membuat dan memperbaiki kode dengan cepat." },
  { id: 8, category: "Coding AI", title: "Devin AI (Cognition): Apakah Ini Programmer AI Pertama?", img: art8, author: "Oleh Shinta", authorImg: author7, date: "Maret 10, 2025", description: "AI yang mampu mengerjakan tugas pemrograman secara otomatis." },
  { id: 9, category: "Coding AI", title: "GitHub Copilot: Asisten Wajib Para Developer", img: art9, author: "Oleh Bima", authorImg: author7, date: "Febuari 9, 2025", description: "Asisten coding dengan autocomplete cerdas dan saran konteks kode." },
  { id: 10, category: "Coding AI", title: "Replit AI: Kembangkan Aplikasi Langsung di Browser", img: art10, author: "Oleh Nina", authorImg: author7, date: "Agustus 8, 2025", description: "AI coding berbasis browser untuk membuat aplikasi tanpa setup rumit." },
  { id: 11, category: "Coding AI", title: "Codeium: Alternatif Gratis dan Cepat dari Copilot", img: art11, author: "Oleh Koko", authorImg: author7, date: "Desember 7, 2025", description: "Asisten coding gratis dengan autocomplete cepat dan multibahasa." },
  { id: 12, category: "Coding AI", title: "Cursor: Editor Kode yang Terintegrasi AI Penuh", img: art12, author: "Oleh Lia", authorImg: author7, date: "April 6, 2025", description: "Editor AI untuk refactor, debugging, dan generate kode otomatis." },

  // --- CREATIVE AI (6) ---
  { id: 13, category: "Creative AI", title: "Midjourney: Pembuat Seni AI dengan Estetika Terbaik", img: art13, author: "Oleh Dani", authorImg: author7, date: "Juni 5, 2025", description: "AI pembuat gambar dengan kualitas visual estetis dan detail tinggi." },
  { id: 14, category: "Creative AI", title: "DALL-E 3 (OpenAI): Integrasi ChatGPT untuk Prompt Akurat", img: art14, author: "Oleh Saiful", authorImg: author7, date: "Agustus 4, 2025", description: "Generator gambar yang sangat akurat memahami prompt." },
  { id: 15, category: "Creative AI", title: "Stable Diffusion: Open-Source untuk Customisasi Tanpa Batas", img: art15, author: "Oleh Risa", authorImg: author7, date: "Juli 3, 2025", description: "Model generatif open source yang bisa dikustomisasi bebas." },
  { id: 16, category: "Creative AI", title: "Runway Gen-3: Video AI Kualitas Sinematik", img: art16, author: "Oleh Aidil", authorImg: author7, date: "Oktober 2, 2025", description: "AI pembuat video sinematik dari prompt teks atau gambar." },
  { id: 17, category: "Creative AI", title: "Adobe Firefly: AI Generatif Khusus untuk Desainer", img: art17, author: "Oleh Fadlan", authorImg: author7, date: "November 1, 2025", description: "AI kreatif untuk efek, desain, dan manipulasi gambar." },
  { id: 18, category: "Creative AI", title: "Leonardo AI: Alat Kreatif Penuh untuk Creator", img: art18, author: "Oleh Dr Tirto", authorImg: author7, date: "October 31, 2025", description: "Tools generatif untuk membuat aset visual dan karakter." },

  // --- PRODUCTIVITY AI (6) ---
  { id: 19, category: "Productivity AI", title: "Notion AI: Asisten Kerja Terintegrasi dalam Workspace", img: art19, author: "Oleh Nana", authorImg: author7, date: "september 30, 2025", description: "Asisten AI untuk ringkasan, riset, dan produktivitas kerja." },
  { id: 20, category: "Productivity AI", title: "Perplexity: Riset Cepat dan Rapi untuk Produktivitas", img: art20, author: "Oleh Ryanagita", authorImg: author7, date: "October 29, 2025", description: "AI pencarian cepat dengan jawaban ringkas dan akurat." },
  { id: 21, category: "Productivity AI", title: "NotebookLM: Asisten Pembaca Berbasis Dokumen", img: art21, author: "Oleh Eko", authorImg: author7, date: "Mei 28, 2025", description: "AI yang merangkum dan memahami dokumen panjang." },
  { id: 22, category: "Productivity AI", title: "Microsoft Copilot: Integrasi Penuh di Microsoft 365", img: art22, author: "Oleh Angel", authorImg: author4, date: "April 27, 2025", description: "Asisten kerja AI dalam Word, Excel, dan aplikasi Microsoft." },
  { id: 23, category: "Productivity AI", title: "Tome AI: Presentasi Otomatis dalam Hitungan Detik", img: art23, author: "Oleh Eka Prasetio", authorImg: author7, date: "Januari 26, 2025", description: "AI pembuat presentasi cepat dari teks dan ide." },
  { id: 24, category: "Productivity AI", title: "Otter.ai: Transkrip Meeting Realtime yang Akurat", img: art24, author: "Oleh BBnos Ironmouse", authorImg: author7, date: "Januari 25, 2025", description: "AI untuk transkrip meeting otomatis dan akurat." },
];


export default function EksplorasiAI() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8); 

  const navigate = useNavigate();

  const categories = ["All", "Chatbots", "Coding AI", "Creative AI", "Productivity AI"];


  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(2); 
      } else {
        
        setCardsPerPage(8); 
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);


  const filteredArticles = articles.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / cardsPerPage);
  const paginated = filteredArticles.slice((page - 1) * cardsPerPage, page * cardsPerPage);



  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5; 
    
    if (totalPages <= maxButtonsToShow) {
      
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1); 

      // Menentukan jendela halaman yang akan ditampilkan di tengah
      let start = Math.max(2, page - 1);
      let end = Math.min(totalPages - 1, page + 1);

      // Adjust window if near the start/end
      if (page <= 3) {
        end = 4; 
      } else if (page >= totalPages - 2) {
        start = totalPages - 3;
      }

      // Tambahkan Ellipsis Awal
      if (start > 2) {
        buttons.push('...'); 
      }
      
      // Tombol Tengah
      for (let i = start; i <= end; i++) {
        if (i > 1 && i < totalPages) {
          buttons.push(i);
        }
      }

      // Tambahkan Ellipsis Akhir
      if (end < totalPages - 1) {
        buttons.push('...');
      }

      // Tombol terakhir (halaman N)
      if (totalPages > 1) {
        buttons.push(totalPages);
      }
    }
    
    // Hapus duplikat dan kembalikan urutan yang unik
    return [...new Set(buttons)].filter(p => p !== '...' || buttons.indexOf(p) === buttons.lastIndexOf(p));
  };


  return (
    <div className="w-full px-6 md:px-12 lg:px-16">


      <div
        onClick={() => navigate("/notfound")}
        className="flex items-center gap-6 p-5 mb-10 transition bg-gray-100 cursor-pointer rounded-xl hover:shadow-lg"
      >
        <img src={bannerImg} className="object-cover h-32 rounded-lg w-44" alt="Banner" />

        <div>
          <h3 className="mb-1 text-lg font-bold">Top AI of The Week</h3>
          <p className="text-sm text-gray-600">Pilihan AI terbaik berdasarkan tren terbaru.</p>

          <button
            onClick={() => navigate("/notfound")}
            className="px-5 py-2 mt-3 text-sm text-white transition bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700"
          >
            Learn More →
          </button>
        </div>
      </div>


      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Explore</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search AI models..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-lg w-72"
          />
          <IoSearch className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2" />
        </div>
      </div>


      <div className="mb-8">
        <div className="inline-flex justify-start gap-6 border-b border-gray-300"> 
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


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-7">
        
        {paginated.map((item) => (
          <div
            key={item.id}
            className="p-4 transition-all duration-300 transform bg-white border border-gray-200 shadow cursor-pointer rounded-xl hover:scale-105 hover:shadow-lg active:scale-100"
            onClick={() => item.id === 1 ? navigate("/blog/gemini-ai") : navigate("/notfound")}
          >

            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-40 mb-4 rounded-lg"
            />

           
            <p className="pb-2 text-sm font-medium text-blue-900">
              {item.date}
            </p>

            <h5 className="pb-3 font-semibold text-gray-900 text-md">
              {item.title}
            </h5>
            
            <p className="pb-3 mb-2 text-sm text-gray-700">
              {item.description}
            </p>

            <div className="flex items-center gap-2 mt-3"> 
              <img src={item.authorImg} className="w-6 h-6 rounded-full" alt="author" />
              <p className="text-xs font-medium text-blue-900 hover:underline">
                {item.author}
              </p>
            </div>
          </div>
        ))}

      </div>


      {filteredArticles.length > 0 && (
        <div className="flex items-center justify-center gap-1 mt-10 text-sm"> 
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex items-center justify-center w-10 h-10 text-blue-600 transition bg-transparent rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &lt;
          </button>

          {getPaginationButtons().map((p, index) => (
            <button
              key={index}
              onClick={() => typeof p === 'number' && setPage(p)}
              disabled={p === '...'}
              className={`
                w-10 h-10 flex items-center justify-center font-medium transition
                ${
                  typeof p === 'number'
                  ? page === p 
                    ? "bg-blue-100 text-blue-600 rounded-xl font-bold"
                    : "bg-transparent text-gray-500 rounded-full hover:bg-gray-100"
                  : 
                    "bg-transparent text-gray-500 cursor-default"
                }
              `}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex items-center justify-center w-10 h-10 text-blue-600 transition bg-transparent rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}