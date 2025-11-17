// src/components/Navbar_LandingPages.jsx (UPDATED)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar_LandingPage = () => {
  const navigate = useNavigate();
  const [isExplorasiOpen, setIsExplorasiOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Cek status login saat komponen dimuat
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setIsLoggedIn(loggedIn);
      setUserName(user.name || "");
    };

    checkLoginStatus();

    // Optional: Listen untuk perubahan localStorage (jika login di tab lain)
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-auto">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-3">
          <img src={Logo} className="h-24" alt="Human After Tech Logo" />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex md:items-center md:space-x-8 md:ml-17">
          {/* Beranda */}
          <a
            href="/"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Beranda
          </a>

          {/* Tentang Kami */}
          <a
            href="/tentang-kami"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Tentang Kami
          </a>

          {/* Eksplorasi (Dropdown) */}
          <div className="relative">
            <button
              onClick={() => setIsExplorasiOpen(!isExplorasiOpen)}
              className="flex items-center space-x-1 text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              <span>Eksplorasi</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isExplorasiOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isExplorasiOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a
                  href="/blog"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/artikel"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Artikel
                </a>
                <a
                  href="/tutorial"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Tutorial
                </a>
              </div>
            )}
          </div>

          {/* Kontak */}
          <a
            href="/kontak"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Kontak
          </a>
        </div>

        {/* RIGHT SECTION - BUTTONS */}
        <div className="hidden md:flex md:items-center md:space-x-3">
          {isLoggedIn ? (
            <>
              {/* Dashboard Button */}
              <button
                onClick={() => navigate("/dashboard")}
                type="button"
                className="px-6 py-2 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Dashboard
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                type="button"
                className="px-6 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Keluar
              </button>
            </>
          ) : (
            <>
              {/* Daftar Button */}
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="px-6 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Daftar
              </button>

              {/* Masuk Button */}
              <button
                onClick={() => navigate("/login")}
                type="button"
                className="px-6 py-2 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Masuk
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="w-full md:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Beranda
              </a>
              <a
                href="/tentang-kami"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                Tentang Kami
              </a>

              {/* Mobile Eksplorasi */}
              <div>
                <button
                  onClick={() => setIsExplorasiOpen(!isExplorasiOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  <span>Eksplorasi</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isExplorasiOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isExplorasiOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="/blog"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </a>
                    <a
                      href="/artikel"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Artikel
                    </a>
                    <a
                      href="/tutorial"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Tutorial
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/kontak"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                Kontak
              </a>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 pt-3">
                {isLoggedIn ? (
                  <>
                    <span className="text-gray-700 font-medium">
                      Halo, {userName.split(" ")[0]}
                    </span>
                    <button
                      onClick={() => navigate("/dashboard")}
                      type="button"
                      className="w-full px-6 py-2 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="w-full px-6 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate("/register")}
                      type="button"
                      className="w-full px-6 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Daftar
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      type="button"
                      className="w-full px-6 py-2 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Masuk
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar_LandingPage;