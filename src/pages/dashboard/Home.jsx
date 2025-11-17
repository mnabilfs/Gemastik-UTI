// src/pages/dashboard/Home.jsx
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Avatar from "../../assets/avatar.jpg";
import StatistikBaca from "../../components/StatistikBaca";
import ProgressLearningHub from "../../components/ProgressLearningHub";
import TopAiTheWeek from "../../components/TopAiTheWeek";

export default function Home() {
  const scrollRef = useRef(null);

  const news = [
    {
    title: "Claude 3.7 Dirilis: Reasoning Semakin Dekat ke Manusia!",
    thumbnail: "https://i.ytimg.com/vi/x2WtHZciC74/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=x2WtHZciC74",
  },
  {
    title: "Google Gemini 2.5 Pro: Fitur Multimodal Gila! Bisa Analisis Video Real-time",
    thumbnail: "https://i.ytimg.com/vi/7HuXSoDXfTY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=7HuXSoDXfTY",
  },
  {
    title: "OpenAI ChatGPT Update: Project Q* dan Masa Depan AGI",
    thumbnail: "https://i.ytimg.com/vi/DB9mjd-65gw/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=DB9mjd-65gw",
  },
  {
    title: "Midjourney v7 Resmi Launch! Rilisan Paling Realistis Sepanjang Waktu",
    thumbnail: "https://i.ytimg.com/vi/BuJwmTCfLUY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=BuJwmTCfLUY",
  },
  {
    title: "Sora AI: Video Generatif Kualitas Hollywood!",
    thumbnail: "https://i.ytimg.com/vi/3THDqe3k4X8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=3THDqe3k4X8",
  },
  {
    title: "Apple Intelligence Resmi Hadir: Siri Jadi Lebih Cerdas!",
    thumbnail: "https://i.ytimg.com/vi/HHqScHoZaOA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=HHqScHoZaOA",
  },
  {
    title: "Runway Gen-3: Revolusi Pembuatan Film Dengan AI",
    thumbnail: "https://i.ytimg.com/vi/nByslCkykj8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=nByslCkykj8",
  }
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 360 : -360,
      behavior: "smooth",
    });
  };

  // === AUTO SCROLL ===
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const itemWidth = 360;

    const interval = setInterval(() => {
      scrollAmount += itemWidth;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-6">

      {/* CARD PROFILE (FULL) */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-4 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            src={Avatar}
            alt="avatar"
            className="object-cover w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-sm font-semibold text-gray-900">
              Muhammad Nabil Farras Sulthan
            </div>
            <div className="text-xs text-gray-500">mnabilfs</div>
          </div>
        </div>
      </div>

      {/*  GRID UTAMA → Statistik kiri + Progress & TopAI kanan */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Kolom kiri (span 2) */}
        <div className="space-y-6 lg:col-span-2">
          <StatistikBaca />
        </div>

        {/* Kolom kanan */}
        <div className="space-y-6">
          <ProgressLearningHub />
          <TopAiTheWeek />
        </div>
      </div>

      {/* BERITA AI TERKINI (FULL) */}
      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Berita AI Terkini
        </h3>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide"
          >
            {news.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="min-w-[320px] max-w-[320px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="w-full h-44">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-3 text-sm text-gray-700">
                  {item.title}
                </div>
              </a>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm -bottom-4 w-9 h-9 hover:bg-gray-50 bottom-[-32px] cursor-pointer"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm -bottom-4 left-12 w-9 h-9 hover:bg-gray-50 bottom-[-32px] cursor-pointer"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

    </div>
  );
}
