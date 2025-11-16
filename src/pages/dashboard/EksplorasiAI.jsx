import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ==================== IMPORT GAMBAR ====================
import bannerImg from "../../assets/DbGPT.png";

import art1 from "../../assets/DbUMKM.png";
import art2 from "../../assets/Aartikel2.jpg";
import art3 from "../../assets/Aartikel3.jpg";
import art4 from "../../assets/chatgpt_pic.jpg";
import art5 from "../../assets/Aartikel5.jpg";
import art6 from "../../assets/Aartikel6.jpg";

// Author
import author1 from "../../assets/DbzAccount_male.png";
import author2 from "../../assets/DbzAccount_male.png";
import author3 from "../../assets/DbzAccount_male.png";
import author4 from "../../assets/DbzDevilAngelpfp.jpg";
import author5 from "../../assets/DbzSubarupfp.jpg";
import author6 from "../../assets/DbzZlogopfp.jpg";

// ==================== DATA ARTIKEL ====================
const articles = [
  { 
    id: 1, 
    category: "Chatbots", 
    title: "Owen is Most Useful AI to Code for Startup Company. Is It Worth It?", 
    img: art1, 
    author: "Dr. Sarah Himwell",
    authorImg: author1
  },
  { 
    id: 2, 
    category: "Chatbots", 
    title: "How AI Changes the Way Developers Build Software in 2025", 
    img: art2, 
    author: "Bambang",
    authorImg: author2
  },
  { 
    id: 3, 
    category: "Chatbots", 
    title: "Future of AI Assistants That Understand Human Emotion", 
    img: art3, 
    author: "Luca",
    authorImg: author3
  },
  { 
    id: 4, 
    category: "Coding AI", 
    title: "Is AI the Key to Faster and Cheaper App Development?", 
    img: art4, 
    author: "Aoirun",
    authorImg: author4
  },
  { 
    id: 5, 
    category: "Creative AI", 
    title: "Smarter AI Agents: What Makes Them Different from Chatbots", 
    img: art5, 
    author: "Great Moon Aroma",
    authorImg: author5
  },
  { 
    id: 6, 
    category: "Production AI", 
    title: "Can AI Replace Entry Level Developers? Real Analysis", 
    img: art6, 
    author: "Muhammad Zacky Maulana",
    authorImg: author6
  },
];

export default function EksplorasiAI() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const categories = ["All", "Chatbots", "Coding AI", "Creative AI", "Production AI"];

  // FILTER ARTIKEL
  const filteredArticles = articles.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ padding: "20px 40px", width: "100%" }}>

      {/* ==================== BANNER REKOMENDASI ==================== */}
      <div
        onClick={() => navigate("/notfound")}
        style={{
          width: "100%",
          background: "#f5f5f5",
          borderRadius: "12px",
          padding: "20px",
          display: "flex",
          gap: "25px",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "35px",
        }}
      >
        <img
          src={bannerImg}
          alt="banner"
          style={{
            width: "180px",
            height: "130px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "5px" }}>
            Using AI for Effeciencie productivity.
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            AI always solve problem quickly.
          </p>

          <button
            onClick={() => navigate("/notfound")}
            style={{
              marginTop: "12px",
              padding: "8px 20px",
              background: "#007BFF",
              color: "white",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Learn More →
          </button>
        </div>
      </div>

      {/* ==================== TITLE ==================== */}
      <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "10px" }}>
        Explore
      </h2>

      {/* ==================== CATEGORY + SEARCH BAR ==================== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        {/* CATEGORY MENU */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
          }}
        >
          {categories.map((cat) => (
            <p
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                cursor: "pointer",
                paddingBottom: "8px",
                borderBottom:
                  activeCategory === cat
                    ? "3px solid #007BFF"
                    : "3px solid transparent",
                color: activeCategory === cat ? "#007BFF" : "#444",
                fontWeight: activeCategory === cat ? "600" : "400",
              }}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 15px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
      </div>

      {/* ==================== GRID ARTIKEL ==================== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {filteredArticles.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate("/notfound")}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 5px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={item.img}
              alt="artikel"
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />

            <p style={{ fontSize: "13px", color: "#777" }}>{item.category}</p>

            <h4 style={{ fontSize: "16px", fontWeight: "600", marginTop: "5px" }}>
              {item.title}
            </h4>

            {/* AUTHOR */}
            <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
              <img
                src={item.authorImg}
                alt="author"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontSize: "14px", color: "#444" }}>{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
