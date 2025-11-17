import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

// Import icon sidebar
import iconHome from '../assets/iconHome.png';
import iconBlog from '../assets/iconBlog.png';
import iconInternship from '../assets/iconInternship.png';
import iconWorkshop from '../assets/iconWorkshop.png';
import iconChat from '../assets/iconChat.png';
import iconRecommend from '../assets/iconRecommend.png';
import iconAccount from '../assets/iconAccount.png';
import toggleIcon from '../assets/toggleIcon.png'; // tombol gulir sidebar

const Internship = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <Navbar />

      <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
        
        <div
          style={{
            width: isCollapsed ? "80px" : "220px",
            backgroundColor: "#eaf1fb",
            transition: "width 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: isCollapsed ? "center" : "flex-start",
            padding: "20px 10px",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            height: "100vh",
            overflowY: "auto",
            position: "sticky",
            top: 0,
          }}
        >
          <button
            onClick={toggleSidebar}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: "20px",
              padding: 0,
            }}
          >
            <img
              src={toggleIcon}
              alt="toggle sidebar"
              style={{
                width: "40px",
                height: "40px",
                transition: "transform 0.3s ease",
                transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {/* Menu Sidebar */}
          {[
            { label: "Home", icon: iconHome, path: "/notfound" },
            { label: "Blog", icon: iconBlog, path: "/notfound" },
            { label: "Internship", icon: iconInternship, path: "/intern", active: true },
            { label: "Workshop", icon: iconWorkshop, path: "/notfound" },
            { label: "Chat", icon: iconChat, path: "/notfound" },
            { label: "Recommendation", icon: iconRecommend, path: "/dashboard" },
            { label: "Account", icon: iconAccount, path: "/notfound" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: isCollapsed ? "center" : "flex-start",
                backgroundColor: item.active ? "#d4eaf8" : "transparent",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "8px",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#dce6f7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  item.active ? "#d4eaf8" : "transparent")
              }
            >
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: isCollapsed ? "0" : "10px",
                  objectFit: "contain",
                }}
              />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div style={{ flex: 1, padding: "30px" }}>

          {/* Klik area kosong → /notfound */}
          <div onClick={() => navigate('/notfound')} style={{ cursor: "pointer" }}>

            <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>Internship Opportunities</h1>

            {/* LIST CARD */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* CARD 1 */}
              <div
                onClick={() => navigate('/notfound')}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e5e5",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  HR Training & Compliance Internship
                </h2>
                <p style={{ color: "#666" }}>PT Sumber Bintang Perkasa</p>

                <span
                  style={{
                    marginTop: "8px",
                    display: "inline-block",
                    padding: "5px 10px",
                    background: "#dce9ff",
                    color: "#4774c2",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Be an early applicant
                </span>

                <p style={{ marginTop: "10px", color: "#444" }}>
                  West Jakarta, Jakarta
                </p>
                <p style={{ marginTop: "8px", color: "#444" }}>
                  We are always open for new family members. We’re learning, studying,
                  sharing and having fun together. YOU should join us!
                </p>
                <p style={{ marginTop: "8px", fontSize: "12px", color: "#888" }}>2m ago</p>
              </div>

              {/* CARD 2 */}
              <div
                onClick={() => navigate('/notfound')}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e5e5",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Administration Intern
                </h2>

                <p style={{ color: "#666" }}>PT Dipo Star Finance</p>
                <p style={{ marginTop: "8px", color: "#444" }}>Central Jakarta, Jakarta</p>
                <p style={{ marginTop: "5px", color: "#444" }}>
                  Rp 2.500.000 – Rp 3.000.000 per month
                </p>
                <p style={{ marginTop: "8px", fontSize: "12px", color: "#888" }}>4d ago</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Internship;