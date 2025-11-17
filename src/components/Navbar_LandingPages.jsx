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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setIsLoggedIn(loggedIn);
      setUserName(user.name || "");
    };

    checkLoginStatus();

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

  const isActive = (path) => location.pathname === path;
  
  const isExplorasiActive = () => {
    return ['/rekomendasi', '/tutorial'].includes(location.pathname);
  };

  return (
    <nav className={`bg-white border-b border-gray-200 transition-all duration-300 ${
      isActive('/') ? '' : 'sticky top-0 z-50'
    } ${
      scrolled && !isActive('/') ? 'shadow-lg py-0.5' : 'shadow-sm py-0'
    }`}>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-auto">
        <a href="/" className="flex items-center space-x-3">
          <img src={Logo} className="h-24" alt="Human After Tech Logo" />
        </a>
      
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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

        <div className="hidden md:flex md:items-center md:space-x-8 md:ml-17">
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

            {isExplorasiOpen && (
              <div className="dropdown-menu-fade absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 w-[400px]">
                <div className="grid grid-cols-2 gap-4">

                  <a
                    href="/rekomendasi"
                    className="flex flex-col items-start p-4 transition-all duration-300 rounded-xl hover:bg-blue-50 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 mb-3 transition-colors bg-green-100 rounded-lg group-hover:bg-green-200">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="mb-1 font-bold text-gray-900 transition-colors group-hover:text-green-600">Rekomendasi</h3>
                    <p className="text-xs leading-relaxed text-gray-500">AI tools terbaik untuk kebutuhan Anda</p>
                  </a>

                  <div className="relative flex flex-col items-start p-4 cursor-not-allowed rounded-xl bg-gray-50 opacity-60">
                    <span className="absolute top-2 right-2 text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                      Segera Hadir
                    </span>
                    <div className="flex items-center justify-center w-12 h-12 mb-3 bg-purple-100 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="mb-1 font-bold text-gray-900">Tutorial</h3>
                    <p className="text-xs leading-relaxed text-gray-500">Panduan langkah demi langkah</p>
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
        </div>

        <div className="hidden md:flex md:items-center md:space-x-3">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/home")}
                type="button"
                className="px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
              >
                Dashboard
              </button>

              <button
                onClick={handleLogout}
                type="button"
                className="px-6 py-2 font-medium text-blue-600 transition-colors border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50"
              >
                Keluar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="px-6 py-2 font-medium text-blue-600 transition-colors border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50"
              >
                Daftar
              </button>

              <button
                onClick={() => navigate("/login")}
                type="button"
                className="px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
              >
                Masuk
              </button>
            </>
          )}
        </div>

        {isMobileMenuOpen && (
          <div className="w-full pt-4 mt-4 border-t border-gray-200 md:hidden">
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
                  <div className="pl-2 mt-3 space-y-3">

                    <a
                      href="/rekomendasi"
                      className="flex items-start gap-3 p-3 transition-colors rounded-lg hover:bg-blue-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Rekomendasi</h4>
                        <p className="text-xs text-gray-500">AI tools terbaik</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 opacity-60">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold text-gray-900">
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

              <div className="flex flex-col pt-3 space-y-2">
                {isLoggedIn ? (
                  <>
                    <span className="font-medium text-gray-700">
                      Halo, {userName.split(" ")[0]}
                    </span>
                    <button
                      onClick={() => navigate("/home")}
                      type="button"
                      className="w-full px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="w-full px-6 py-2 font-medium text-blue-600 transition-colors border border-blue-600 rounded-lg hover:bg-blue-50"
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate("/register")}
                      type="button"
                      className="w-full px-6 py-2 font-medium text-blue-600 transition-colors border border-blue-600 rounded-lg hover:bg-blue-50"
                    >
                      Daftar
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      type="button"
                      className="w-full px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
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