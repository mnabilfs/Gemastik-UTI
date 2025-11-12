import React from "react";

// Import logo-logo AI (pastikan file ini ada di folder assets)
// Contoh: import ChatGPTLogo from "../assets/chatgpt-logo.png";
// Anda bisa sesuaikan dengan nama file yang ada

const Hero_LandingPage = () => {
  // Data untuk floating icons
  const floatingIcons = [
    { 
      id: 1, 
      // src: ChatGPTLogo, // ganti dengan import logo
      alt: "ChatGPT",
      position: "top-20 left-16",
      size: "w-24 h-24",
      rotation: "rotate-12",
      delay: "0s"
    },
    { 
      id: 2,
      // src: GeminiLogo,
      alt: "Gemini",
      position: "top-32 left-48",
      size: "w-20 h-20",
      rotation: "-rotate-6",
      delay: "0.5s"
    },
    { 
      id: 3,
      // src: ClaudeLogo,
      alt: "Claude",
      position: "top-64 left-32",
      size: "w-20 h-20",
      rotation: "rotate-3",
      delay: "1s"
    },
    { 
      id: 4,
      // src: PerplexityLogo,
      alt: "Perplexity",
      position: "bottom-32 left-20",
      size: "w-24 h-24",
      rotation: "-rotate-12",
      delay: "1.5s"
    },
    { 
      id: 5,
      // src: MidjourneyLogo,
      alt: "Midjourney",
      position: "bottom-20 left-52",
      size: "w-28 h-28",
      rotation: "rotate-6",
      delay: "2s"
    },
    { 
      id: 6,
      // src: BlackboxLogo,
      alt: "Blackbox AI",
      position: "top-20 right-16",
      size: "w-32 h-32",
      rotation: "-rotate-6",
      delay: "0.3s"
    },
    { 
      id: 7,
      // src: CopilotLogo,
      alt: "Copilot",
      position: "top-48 right-48",
      size: "w-20 h-20",
      rotation: "rotate-12",
      delay: "0.8s"
    },
    { 
      id: 8,
      // src: NotionLogo,
      alt: "Notion AI",
      position: "top-80 right-32",
      size: "w-24 h-24",
      rotation: "-rotate-3",
      delay: "1.3s"
    },
    { 
      id: 9,
      // src: VSCodeLogo,
      alt: "VS Code",
      position: "bottom-40 right-20",
      size: "w-28 h-28",
      rotation: "rotate-6",
      delay: "1.8s"
    },
    { 
      id: 10,
      // src: WixLogo,
      alt: "Wix",
      position: "bottom-16 right-56",
      size: "w-20 h-20",
      rotation: "-rotate-12",
      delay: "2.3s"
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Background Pattern - Optional */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Floating AI Icons */}
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.position} ${icon.size} hidden lg:block animate-float`}
          style={{
            animationDelay: icon.delay,
            animationDuration: "6s"
          }}
        >
          <div className={`w-full h-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl ${icon.rotation} hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
            {/* Placeholder - Ganti dengan logo asli */}
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xs">
              {icon.alt.substring(0, 2)}
            </div>
            {/* Uncomment jika sudah import logo:
            <img 
              src={icon.src} 
              alt={icon.alt}
              className="w-16 h-16 object-contain"
            /> */}
          </div>
        </div>
      ))}

      {/* Main Content Card */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-gradient-to-br from-gray-400/40 to-gray-500/40 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 text-center border border-white/20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            Jelajahi AI Bersama Kami
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg md:text-xl mb-8 font-medium leading-relaxed">
            Artikel ringan, panduan praktis, dan rekomendasi<br />
            tools AI untuk dipakai sehari-hari.
          </p>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Mulai Membaca
          </button>
        </div>
      </div>

      {/* Custom Float Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero_LandingPage;