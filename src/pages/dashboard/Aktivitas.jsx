import React from "react";
import Avatar from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import QwenPic from "../../assets/qwen_pic.jpg";
import DeepseekPic from "../../assets/deepseek_pic.jpg";
import GeminiPic from "../../assets/gemini_pic.jpg";
import ClaudePic from "../../assets/claude_pic.jpg";
import ChatGPTPic from "../../assets/chatgpt_pic.jpg";
import PhotoProfile1 from "../../assets/pp_0.jpg";
import PhotoProfile2 from "../../assets/pp_3.jpg";
import PhotoProfile3 from "../../assets/pp_2.jpg";
import PhotoProfile4 from "../../assets/pp_4.jpg";

export default function Aktivitas() {
  const historyItems = [
    {
      id: 1,
      title: "Gemini AI: Apa itu Gemini AI?",
      image: GeminiPic,
      date: "November 3, 2025",
      description:
        "Gemini AI memiliki potensi besar untuk membantu pengguna di berbagai bidang profesional.",
      profile: PhotoProfile1,
      author: "Muhammad Nabil Farras Sulthan",
      link: "/blog/gemini-ai",
    },
    {
      id: 1,
      title: "Kenapa Banyak Orang Memilih Claude?",
      image: ClaudePic,
      date: "November 3, 2025",
      description:
        "Claude dikenal sebagai AI dengan jawaban yang terstruktur, tenang, dan sangat rapi.",
      profile: PhotoProfile2,
      author: "Muhammad Zacky Maulana",
      link: "/blog/claude-ai",
    },
  ];

  const savedItems = [
    {
      id: 1,
      title:
        "Qwen AI: Inovasi Open-Source dari Alibaba",
      image: QwenPic,
      date: "November 3, 2025",
      description:
        "Qwen AI menjadi sorotan berkat kemampuannya yang kuat dan sifatnya yang terbuka.",
      profile: PhotoProfile4,
      author: "Rikza Ahmad Nur Muhammad",
      link: "/blog/qwen-ai",
    },
  ];

  const likedItems = [
    {
      id: 1,
      title: "Evolusi ChatGPT: Dari GPT-3 ke GPT-5",
      image: ChatGPTPic,
      date: "November 3, 2025",
      description: "ChatGPT terus berevolusi dari sekadar chatbot menjadi asisten pintar.",
      profile: PhotoProfile1,
      author: "Muhammad Nabil Farras Sulthan",
      link: "/blog/chatgpt-ai",
    },
  ];

  const ratingItems = [
    {
      id: 1,
      title: "DeepSeek AI: Kecepatan, Efisiensi, dan Ketelitian",
      image: DeepseekPic,
      date: "November 3, 2025",
      description: "DeepSeek dikenal sebagai AI yang sangat cepat, ringan, dan kuat dalam reasoning teknis.",
      profile: PhotoProfile2,
      author: "Muhammad Zacky Maulana",
      link: "/blog/deepseek-ai",
    }
  ]

  return (
    <div className="w-full p-6">
      {/* TOP PROFILE + STATS */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
        {/* CARD PROFILE (FOLLOWING YOUR STYLE) */}
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

        {/* STAT BOX 1 */}
        <div className="flex flex-col justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          <span className="text-sm text-gray-600">Blog Tersimpan</span>
          <span className="ml-1 text-lg font-semibold text-blue-600">1</span>
        </div>

        {/* STAT BOX 2 */}
        <div className="flex flex-col justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          <span className="text-sm text-gray-600">Blog Disukai</span>
          <span className="ml-1 text-lg font-semibold text-blue-600">1</span>
        </div>

        {/* STAT BOX 3 */}
        <div className="flex flex-col justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          <span className="text-sm text-gray-600">Rating Blog</span>
          <span className="ml-1 text-lg font-semibold text-blue-600">1</span>
        </div>
      </div>

      {/* HISTORY */}
      <Section title="History" items={historyItems} />

      {/* BLOG TERSIMPAN */}
      <Section title="Blog Tersimpan" items={savedItems} />

      {/* BLOG DISUKAI */}
      <Section title="Blog Disukai" items={likedItems} />

      {/* BLOG RATING */}
      <Section title="Rating Blog" items={ratingItems} />
    </div>
  );
}

// Reusable Section Component
function Section({ title, items }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">{title}</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="max-w-sm p-4 transition-all duration-300 transform bg-white border border-gray-200 shadow cursor-pointer rounded-xl hover:scale-105 hover:shadow-lg active:scale-100"
            onClick={() => handleClick(item.link)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-40 mb-4 rounded-lg"
            />

            <p className="pb-2 text-sm font-medium text-blue-900">
              {item.date || "Tanpa tanggal"}
            </p>

            <h5 className="pb-3 font-semibold text-gray-900 text-md line-clamp-2">
              {item.title}
            </h5>

            <p className="pb-3 mb-2 text-sm text-gray-700 line-clamp-3">
              {item.description || "Tidak ada deskripsi."}
            </p>

            <div className="flex items-center gap-2 mt-3">
              <img
                src={item.profile}
                className="w-6 h-6 rounded-full"
                alt="author"
              />
              <p className="text-xs font-medium text-blue-900 hover:underline">
                Oleh {item.author || "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
