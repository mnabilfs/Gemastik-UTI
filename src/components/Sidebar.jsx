// components/Sidebar.jsx
import React from "react";
import {
  FaChevronRight,
  FaHome,
  FaBrain,
  FaUserGraduate,
  FaBookOpen,
  FaRegComments,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  const menu = [
    { label: "Home", icon: <FaHome />, path: "/home" },
    { label: "Eksplorasi AI", icon: <FaBrain />, path: "/eksplorasi-ai" },
    { label: "Internship", icon: <FaUserGraduate />, path: "/internship" },
    { label: "Learning Hub", icon: <FaBookOpen />, path: "/learning-hub" },
    { label: "Aktifitas Saya", icon: <FaRegComments />, path: "/aktifitas" },
  ];

  return (
    <div
      style={{
        width: isCollapsed ? "80px" : "220px",
        backgroundColor: "#268AFD",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: isCollapsed ? "center" : "flex-start",
        padding: "20px 10px",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        <FaChevronRight
          style={{
            width: "32px",
            height: "32px",
            color: "white",
            transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      {/* Menu Items */}
      {menu.map((item, i) => (
        <button
          key={i}
          onClick={() => navigate(item.path)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed ? "center" : "flex-start",
            backgroundColor: "transparent",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "8px",
            cursor: "pointer",
            color: "white",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <span
            style={{
              fontSize: "24px",
              marginRight: isCollapsed ? "0" : "10px",
            }}
          >
            {item.icon}
          </span>

          {!isCollapsed && <span>{item.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
