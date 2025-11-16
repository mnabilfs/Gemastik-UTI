// layouts/MainLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* NAVBAR SELALU DI ATAS & FULL WIDTH */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* CONTENT AREA */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        
        {/* SIDEBAR DI KIRI */}
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

        {/* HALAMAN UTAMA */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
