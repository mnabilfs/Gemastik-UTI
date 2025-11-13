import React from "react";

// Import logo-logo AI
import LogoGPT from "../assets/Logo_GPT.png";
import LogoGemini from "../assets/Logo_Gemini.png";
import LogoClaude from "../assets/Logo_Claude.png";
import LogoHumata from "../assets/Logo_Humata.png";
import LogoBing from "../assets/Logo_Bing.png";
import LogoMeta from "../assets/Logo_Meta.png";

const Hero_LandingPage = () => {
  // Data untuk floating icons - Sisi Kiri Vertikal
  const floatingIcons = [
    { 
      id: 1, 
      src: LogoGPT,
      alt: "ChatGPT",
      position: "top-[65px] left-[35px]",
      size: "w-[102px] h-[115px]",
      rotation: "-rotate-[8.3deg]",
      delay: "0s",
      // Styling khusus untuk container
      containerStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(4px)',
        borderRadius: '20px',
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(8.3deg)'
      },
      // Styling khusus untuk image
      imageStyle: {
        filter: 'drop-shadow(0 0 0 transparent)',
        backgroundColor: 'transparent'
      }
    },
    { 
      id: 2, 
      src: LogoGemini,
      alt: "Gemini",
      position: "top-[187px] left-[164px]",
      size: "w-[76px] h-[80px]",
      rotation: "rotate-[0.78deg]",
      delay: "0s",
      containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        borderRadius: '20px',
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(0.78deg)'
      },
      imageStyle: {
        filter: 'drop-shadow(0 0 0 transparent)',
        backgroundColor: 'transparent'
      }
    },
    { 
      id: 3,
      src: LogoClaude,
      alt: "Claude",
      position: "top-[270px] left-[35px]",
      size: "w-[129.03px] h-[135.73px]",
      rotation: "rotate-[-22.85deg]",
      delay: "0s",
      containerStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(4px)',
        borderRadius: '20px',
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(-22.85deg)'
      },
      imageStyle: {
        filter: 'drop-shadow(0 0 0 transparent)',
        backgroundColor: 'transparent'
      }
    },
    { 
      id: 4,
      src: LogoMeta,
      alt: "Meta AI",
      position: "top-[455px] left-[10px]",
      size: "w-[81px] h-[83px]",
      rotation: "rotate-[28.58deg]",
      delay: "0s",
      containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        borderRadius: '20px',
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(28.58deg)'
      },
      imageStyle: {
        filter: 'drop-shadow(0 0 0 transparent)',
        backgroundColor: 'transparent'
      }
    },
    { 
      id: 5,
      src: LogoHumata,
      alt: "Humata",
      position: "top-[465px] left-[190px]",
      size: "w-[127.13px] h-[128.71px]",
      rotation: "rotate-[-0.78deg]",
      delay: "0s",
      containerStyle: {
        backgroundColor: 'rgba(255, 184, 184, 0.6)',
        backdropFilter: 'blur(4px)',
        borderRadius: '20px',
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(-0.78deg)'
      },
      imageStyle: {
       filter: 'drop-shadow(0 0 0 transparent)',
        backgroundColor: 'transparent'
      }
    },
    { 
      id: 6,
      src: LogoBing,
      alt: "Bing AI",
      position: "top-[605px] left-[130px]",
      size: "w-[73.85px] h-[75.28px]",
      rotation: "rotate-[5.44deg]",
      delay: "0s",
      containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        borderRadius: '20px',
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(5.44deg)'
      },
      imageStyle: {
        filter: 'drop-shadow(0 0 0 transparent)',
        backgroundColor: 'transparent'
      }
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
          <div 
            className="w-full h-full hover:scale-110 transition-transform duration-300 flex items-center justify-center p-3"
            style={icon.containerStyle}
          >
            <img 
              src={icon.src} 
              alt={icon.alt}
              className="w-full h-full object-contain"
              style={icon.imageStyle}
            />
          </div>
        </div>
      ))}

      {/* Main Content Card */}
      <div className="relative z-10 max-w-3xl w-full">
        <div className="bg-[#ffffff] backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-22 text-center border border-white/20">
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