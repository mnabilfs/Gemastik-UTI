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
      
      <Navbar toggleSidebar={toggleSidebar} />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
