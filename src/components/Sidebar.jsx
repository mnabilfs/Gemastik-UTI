// components/Sidebar.jsx
import React from "react";
import {
  FaChevronRight,
  FaHome,
  FaBrain,
  FaBookOpen,
  FaRegComments,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  const menu = [
    { label: "Home", icon: <FaHome />, path: "/home" },
    { label: "Eksplorasi AI", icon: <FaBrain />, path: "/eksplorasi-ai" },
    { label: "Learning Hub", icon: <FaBookOpen />, path: "/learning-hub" },
    { label: "Aktifitas Saya", icon: <FaRegComments />, path: "/aktifitas" },
  ];

  return (
    <div
      className={`flex flex-col ${
        isCollapsed ? "items-center" : "items-start"
      } bg-[#268AFD] h-screen relative p-5 transition-width duration-300`}
      style={{ width: isCollapsed ? "80px" : "220px" }}
    >
      {/* Toggle Button (di samping Home, lebih atas) */}
      <button
        onClick={toggleSidebar}
        className="absolute right-[-16px] bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10 cursor-pointer"
        style={{ top: "30px" }} // posisi dinaikkan agar lebih dekat dengan Home
      >
        <FaChevronRight
          className={`w-4.5 h-4.5 text-[#268AFD] transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Menu Items */}
      <div className="w-full mt-10"> {/* sedikit dinaikkan dari semula 60px */}
        {menu.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            } bg-transparent border-none p-2.5 rounded-lg mb-2 cursor-pointer text-white transition-all duration-200 hover:bg-white/25`}
          >
            <span className={`text-2xl ${isCollapsed ? "mr-0" : "mr-2.5"}`}>
              {item.icon}
            </span>
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
