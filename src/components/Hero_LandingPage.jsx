// Import logo-logo AI
import LogoGPT from "../assets/Logo_GPT.png";
import LogoGemini from "../assets/Logo_Gemini.png";
import LogoClaude from "../assets/Logo_Claude.png";
import LogoHumata from "../assets/Logo_Humata.png";
import LogoBing from "../assets/Logo_Bing.png";
import LogoMeta from "../assets/Logo_Meta.png";
import Logocopilot from "../assets/Logo_copilot.png";
import LogoBlackBox from "../assets/Logo_BlackBox.png";
import LogoMD from "../assets/Logo_MD.png";
import LogoCopyAI from "../assets/Logo_CopyAI.png";
import LogoAdobeFirefly from "../assets/Logo_AdobeFirefly.png";
import LogoMidjourney from "../assets/Logo_Midjourney.png";
import { useNavigate } from "react-router-dom";

const Hero_LandingPage = () => {
  const navigate = useNavigate(); // TAMBAHKAN INI
  const floatingIcons = [
    {
      id: 1,
      position: "top-[160px] left-[-25px]",
      size: "w-[105px] h-[113px]",
      rotation: "rotate-[8deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(8deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      id: 2,
      position: "top-[70px] left-[255px]",
      size: "w-[88.07px] h-[88.61px]",
      rotation: "rotate-[-1.25deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(-1.25deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      id: 3,
      position: "top-[320px] left-[170px]",
      size: "w-[115px] h-[123px]",
      rotation: "rotate-[0deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(0deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      id: 4,
      position: "top-[495px] left-[70px]",
      size: "w-[167px] h-[182px]",
      rotation: "rotate-[0deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(0deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      //Untuk Sebelah Kiri
      id: 5,
      src: LogoGPT,
      alt: "ChatGPT",
      position: "xl:top-[65px] xl:left-[35px] 2xl:top-[105px] 2xl:left-[75px]",
      size: "w-[102px] h-[115px] 2xl:w-[202px] 2xl:h-[215px]",
      rotation: "-rotate-[8.3deg]",
      delay: "0s",
      animation: "float-smooth",
      containerStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(8.3deg)",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
      },
    },
    {
      id: 6,
      src: LogoGemini,
      alt: "Gemini",
      position:
        "xl:top-[187px] xl:left-[164px] 2:xltop-[237px] 2xl:left-[114px]",
      size: "w-[76px] h-[80px]",
      rotation: "rotate-[0.78deg]",
      delay: "1.5s",
      animation: "float-gentle",
      containerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(0.78deg)",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
      },
    },
    {
      id: 7,
      src: LogoClaude,
      alt: "Claude",
      position: "top-[270px] left-[35px]",
      size: "w-[129.03px] h-[135.73px]",
      rotation: "rotate-[-22.85deg]",
      delay: "0.8s",
      animation: "float-wave",
      containerStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(-22.85deg)",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
      },
    },
    {
      id: 8,
      src: LogoMeta,
      alt: "Meta AI",
      position: "top-[455px] left-[10px]",
      size: "w-[81px] h-[83px]",
      rotation: "rotate-[28.58deg]",
      delay: "2.2s",
      animation: "float-slow",
      containerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(28.58deg)",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
      },
    },
    {
      id: 9,
      src: LogoHumata,
      alt: "Humata",
      position: "top-[465px] left-[190px]",
      size: "w-[127.13px] h-[128.71px]",
      rotation: "rotate-[-0.78deg]",
      delay: "1.2s",
      animation: "float-gentle",
      containerStyle: {
        backgroundColor: "rgba(255, 184, 184, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(-0.78deg)",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
      },
    },
    {
      id: 10,
      src: LogoBing,
      alt: "Bing AI",
      position: "top-[605px] left-[130px]",
      size: "w-[73.85px] h-[75.28px]",
      rotation: "rotate-[5.44deg]",
      delay: "0.4s",
      animation: "float-smooth",
      containerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(5.44deg)",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
      },
    },
    //Untuk Blok Kosong Kanan
    {
      id: 11,
      position: "top-[115px] right-[195px]",
      size: "w-[140px] h-[159px]",
      rotation: "rotate-[0.85deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(0.85deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      id: 12,
      position: "top-[335px] right-[-35px]",
      size: "w-[115px] h-[123px]",
      rotation: "rotate-[-33.19deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(-33.19deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      id: 13,
      position: "top-[515px] right-[5px]",
      size: "w-[150px] h-[169px]",
      rotation: "rotate-[0.85deg]",
      animation: "fade-in-out",
      containerStyle: {
        backgroundColor: "rgba(73, 157, 254, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
        transform: "rotate(0.85deg)",
      },
      imageStyle: {
        display: "None",
      },
    },
    {
      //Untuk Sebelah Kanan
      id: 14,
      src: Logocopilot,
      alt: "Copilot",
      position: "top-[103px] right-[235px]",
      size: "w-[50.07px] h-[58.90px]",
      rotation: "rotate-[10.39deg]",
      delay: "1.8s",
      animation: "float-wave",
      containerStyle: {
        backgroundColor: "rgba(255, 173, 244, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(10.39deg)",
        padding: "7px",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
        objectFit: "contain",
        width: "100%",
        height: "100%",
      },
    },
    {
      id: 15,
      src: LogoBlackBox,
      alt: "BlackBox",
      position: "top-[35px] right-[04px]",
      size: "w-[192px] h-[218px]",
      rotation: "rotate-[-15.61deg]",
      delay: "0.6s",
      animation: "float-slow",
      containerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(-5.61deg)",
        padding: "0.1px",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
        objectFit: "contain",
        width: "100%",
        height: "100%",
      },
    },
    {
      id: 16,
      src: LogoMD,
      alt: "MD AI",
      position:
        "xl:top-[305px] xl:right-[114px] 2xl:top-[545px] 2xl:right-[324px] 3xl:top-[670px] 3xl:right-[449px]",
      size: "xl:w-[127.132px] xl:h-[128.71px] 2xl:w-[258px] 2xl:h-[259.30px] 3xl:w-[332px] 3xl:h-[344px]",
      rotation: "rotate-[0.04deg]",
      delay: "2s",
      animation: "float-gentle",
      containerStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(0.04deg)",
        padding: "0.5px",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
        objectFit: "contain",
        width: "100%",
        height: "100%",
      },
    },
    {
      id: 17,
      src: LogoCopyAI,
      alt: "Copy AI",
      position: "top-[410px] right-[-4px]",
      size: "w-[80px] h-[80px]",
      rotation: "rotate-[-29.33deg]",
      delay: "1s",
      animation: "float-wave",
      containerStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(-29.33deg)",
        padding: "1px",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
        objectFit: "contain",
        width: "100%",
        height: "100%",
      },
    },
    {
      id: 18,
      src: LogoAdobeFirefly,
      alt: "Adobe Firefly",
      position: "top-[495px] right-[214px]",
      size: "w-[80px] h-[80px]",
      rotation: "rotate-[21.71deg]",
      delay: "0.3s",
      animation: "float-smooth",
      containerStyle: {
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(21.71deg)",
        padding: "5px",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
        objectFit: "contain",
        width: "100%",
        height: "100%",
      },
    },
    {
      id: 19,
      src: LogoMidjourney,
      alt: "Midjourney",
      position: "top-[550px] right-[55px]",
      size: "w-[167.04px] h-[178.87px]",
      rotation: "rotate-[-5.23deg]",
      delay: "1.6s",
      animation: "float-slow",
      containerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
        transform: "rotate(-5.23deg)",
        padding: "0.1px",
      },
      imageStyle: {
        filter: "drop-shadow(0 0 0 transparent)",
        backgroundColor: "transparent",
        objectFit: "contain",
        width: "100%",
        height: "100%",
      },
    },
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>

      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0M50 0m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M50 100m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M0 50m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M100 50m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 Q30 40 60 60 T120 60' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 0 Q30 -20 60 0 T120 0' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 120 Q30 100 60 120 T120 120' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          backgroundPosition: "10px 10px",
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.6) 0.5px, transparent 0.5px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {floatingIcons.map((icon, index) => {
        const nonInteractiveIds = [1, 2, 3, 4, 11, 12, 13];
        const isNonInteractive = nonInteractiveIds.includes(icon.id);

        const baseDelay = 0.2;
        const step = 0.15;

        const customDelays = {
          1: 1.5,
          2: 0.5,
          3: 2.4,
          4: 2.5,
          11: 1.8,
          12: 0.5,
          13: 3.0,
        };

        const parsedIconDelay =
          typeof icon.delay === "string"
            ? (() => {
                const n = parseFloat(icon.delay.replace("s", "").trim());
                return Number.isFinite(n) ? n : null;
              })()
            : typeof icon.delay === "number"
            ? icon.delay
            : null;

        const finalDelay =
          parsedIconDelay !== null
            ? parsedIconDelay
            : customDelays[icon.id] ?? baseDelay + index * step;

        const wrapperClasses = `absolute ${icon.position} ${
          icon.size
        } hidden lg:block ${icon.animation} ${
          isNonInteractive
            ? "pointer-events-none select-none cursor-default"
            : "hover:scale-110 transition-transform duration-300"
        }`;

        return (
          <div
            key={icon.id}
            className={wrapperClasses}
            style={{
              animationDelay: `${finalDelay}s`,
              pointerEvents: isNonInteractive ? "none" : undefined,
            }}
            aria-hidden={isNonInteractive ? "true" : "false"}
            tabIndex={isNonInteractive ? -1 : 0}
            role={isNonInteractive ? "presentation" : undefined}
            onClick={isNonInteractive ? (e) => e.stopPropagation() : undefined}
            onMouseDown={
              isNonInteractive ? (e) => e.preventDefault() : undefined
            }
          >
            <div
              className="flex items-center justify-center w-full h-full p-3"
              style={{
                ...icon.containerStyle,
                pointerEvents: isNonInteractive ? "none" : undefined,
                userSelect: isNonInteractive ? "none" : undefined,
              }}
            >
              {icon.src && (
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="object-contain w-full h-full"
                  style={{
                    ...icon.imageStyle,
                    pointerEvents: isNonInteractive ? "none" : undefined,
                    userSelect: isNonInteractive ? "none" : undefined,
                  }}
                />
              )}
            </div>
          </div>
        );
      })}

      <div className="relative z-10 w-full max-w-3xl">
        <div className="relative p-12 text-center rounded-3xl md:p-25">
          <div
            className="absolute inset-0 rounded-3xl fade-in-out"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.0)",
              backdropFilter: "blur(2px)",
              boxShadow: "0 4px 40px rgba(0, 0, 0, 0.1)",
              animationDelay: "0s",
            }}
          ></div>

          <div className="relative z-10">
            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-600 bg-clip-text drop-shadow-lg">
              Jelajahi AI Bersama Kami
            </h1>

            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-300 md:text-lg">
              Artikel ringan, panduan praktis, dan rekomendasi
              <br />
              tools AI untuk dipakai sehari-hari.
            </p>

            <button
              onClick={() => {
                const isLoggedIn =
                  localStorage.getItem("isLoggedIn") === "true";
                if (isLoggedIn) {
                  navigate("/home");
                } else {
                  navigate("/login");
                }
              }}
              className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-blue-700 shadow-lg hover:bg-blue-800 rounded-xl hover:shadow-xl hover:scale-105"
            >
              Mulai Membaca
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_LandingPage;
