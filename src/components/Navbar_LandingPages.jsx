// src/components/Navbar_LandingPages.jsx (COMPLETE VERSION)
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar_LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExplorasiOpen, setIsExplorasiOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk animasi navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Helper function untuk cek apakah menu aktif
  const isActive = (path) => location.pathname === path;
  
  // Helper function untuk cek apakah submenu eksplorasi aktif
  const isExplorasiActive = () => {
    return ['/rekomendasi', '/tutorial'].includes(location.pathname);
  };

  return (
    <nav className={`bg-white border-b border-gray-200 transition-all duration-300 ${
      isActive('/') ? '' : 'sticky top-0 z-50'
    } ${
      scrolled && !isActive('/') ? 'shadow-lg py-0.5' : 'shadow-sm py-0'
    }`}>
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
            className={`font-medium transition-colors ${
              isActive('/') 
                ? 'text-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Beranda
          </a>

          {/* Tentang Kami */}
          <a
            href="/tentang-kami"
            className={`font-medium transition-colors ${
              isActive('/tentang-kami') 
                ? 'text-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Tentang Kami
          </a>

          {/* Eksplorasi (Dropdown) - NEW DESIGN */}
          <div className="relative">
            <button
              onClick={() => setIsExplorasiOpen(!isExplorasiOpen)}
              className={`flex items-center space-x-1 font-medium transition-colors ${
                isExplorasiActive() 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
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

            {/* Dropdown Menu - NEW DESIGN */}
            {isExplorasiOpen && (
              <div className="dropdown-menu-fade absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 w-[400px]">
                <div className="grid grid-cols-2 gap-4">

                  {/* Rekomendasi Card */}
                  <a
                    href="/rekomendasi"
                    className="flex flex-col items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">Rekomendasi</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">AI tools terbaik untuk kebutuhan Anda</p>
                  </a>

                  {/* Tutorial Card - Coming Soon */}
                  <div className="relative flex flex-col items-start p-4 rounded-xl bg-gray-50 cursor-not-allowed opacity-60">
                    <span className="absolute top-2 right-2 text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                      Segera Hadir
                    </span>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">Tutorial</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Panduan langkah demi langkah</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Kontak */}
          <a
            href="/kontak"
            className={`font-medium transition-colors ${
              isActive('/kontak') 
                ? 'text-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
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
                className={`font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Beranda
              </a>
              <a
                href="/tentang-kami"
                className={`font-medium transition-colors ${
                  isActive('/tentang-kami') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Tentang Kami
              </a>

              {/* Mobile Eksplorasi - NEW DESIGN */}
              <div>
                <button
                  onClick={() => setIsExplorasiOpen(!isExplorasiOpen)}
                  className={`flex items-center justify-between w-full font-medium transition-colors ${
                    isExplorasiActive() 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
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
                  <div className="mt-3 space-y-3 pl-2">

                    {/* Rekomendasi */}
                    <a
                      href="/rekomendasi"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Rekomendasi</h4>
                        <p className="text-xs text-gray-500">AI tools terbaik</p>
                      </div>
                    </a>

                    {/* Tutorial - Coming Soon */}
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 opacity-60">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          Tutorial
                          <span className="text-[9px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Segera</span>
                        </h4>
                        <p className="text-xs text-gray-500">Panduan lengkap</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/kontak"
                className={`font-medium transition-colors ${
                  isActive('/kontak') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
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