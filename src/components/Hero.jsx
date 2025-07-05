import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import earthGif from "../assets/PX5H.gif";
const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#00292f] flex items-center justify-center min-h-screen w-full overflow-hidden"
    >
      {/* Geometric shapes */}
      <div
        className="absolute bottom-2.5 left-0 h-screen w-[70vw] z-10 bg-[rgb(115,146,173)] animate-[corner-1-animation_0.5s_linear]"
        style={{
          clipPath:
            "polygon(0% 73%, 7% 79%, 16% 77%, 23% 83%, 30% 84%, 35% 87%, 41% 84%, 44% 91%, 53% 93%, 63% 100%, 0% 100%)",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 h-screen w-[70vw] z-[11] bg-[#2d6d79] animate-[corner-2-animation_0.5s_linear]"
        style={{
          clipPath:
            "polygon(0 75%, 7% 81%, 15% 79%, 21% 86%, 30% 84%, 35% 90%, 41% 88%, 47% 89%, 53% 94%, 68% 100%, 0% 100%)",
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center h-[100vh] w-full max-w-7xl mx-auto px-4 gap-8 lg:gap-8">
        {/* Text Content */}
        <div className="relative flex flex-col items-start justify-center text-white z-[100] max-w-2xl pt-16">
          <h1 className="text-3xl md:text-4xl lg:text-[40px]  font-bold mb-5 font-['Poppins'] lg:leading-[3.5rem]">
            START OUR
            <br />
            AMAZING
            <span className="relative inline-block mx-2 px-2 text-[#2d6d79] border border-[rgb(115,146,173)]">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#275058] border border-[rgb(115,146,173)]"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#275058] border border-[rgb(115,146,173)]"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#275058] border border-[rgb(115,146,173)]"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#275058] border border-[rgb(115,146,173)]"></div>
              JOURNEY
            </span>
            NOW.
          </h1>

          <div className="text-lg md:text-xl text-gray-300 mb-3 h-7">
            <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="text-base text-gray-300  leading-relaxed max-w-xl">
            Passionate about creating innovative web solutions and bringing
            ideas to life through code. I specialize in building responsive,
            user-friendly applications with modern technologies.
          </p>

          <button
            className="mt-4 h-12 w-36 rounded-2xl border border-[rgb(115,146,173)] bg-[#00292f] text-[rgb(115,146,173)] font-semibold text-sm font-['Poppins'] transition-all duration-200 cursor-pointer hover:bg-[rgb(115,146,173)] hover:text-[#00292f] z-[200] ml-96"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </button>
        </div>

        {/* Image Container */}
        <div className="pt-20">
          <div className="flex justify-center items-center h-[600px] w-[600px] z-[90] hidden lg:flex">
            <div className="flex justify-center items-center h-[450px] w-[450px] rounded-full shadow-[0_5px_15px_black] transition-all duration-[250ms] hover:shadow-[0_5px_30px_black] hover:scale-[1.02] z-[97] animate-[outer-circle-animation_1.3s_linear]">
              <div className="flex justify-center items-center h-[325px] w-[325px] rounded-full shadow-[0_5px_15px_black] transition-all duration-[250ms] hover:shadow-[0_5px_30px_black] hover:scale-[1.02] z-[98] animate-[middle-circle-animation_1.3s_linear]">
                <div className="flex justify-center items-center h-[200px] w-[200px] rounded-full shadow-[0_5px_15px_black] transition-all duration-[250ms] hover:shadow-[0_5px_30px_black] hover:scale-[1.02] z-[99] animate-[inner-circle-animation_1.3s_linear]">
                  <img
                    src={earthGif}
                    alt="Dulam Chandu"
                    className="h-[125px] w-[125px] object-cover rounded-full transition-all duration-[2s] z-[100] animate-[image-animation_1.3s_linear] hover:scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-[100]">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-[#2d6d79] transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <style>{`
        @keyframes corner-1-animation {
          0% {
            transform: translateY(15vh);
          }
          60% {
            transform: translateY(-1vh);
          }
          70% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes corner-2-animation {
          0% {
            transform: translateY(15vh);
          }
          40% {
            transform: translateY(15vh);
          }
          90% {
            transform: translateY(-1vh);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes outer-circle-animation {
          0% {
            transform: scale(0);
          }
          30% {
            transform: scale(1.1);
          }
          38.46% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes middle-circle-animation {
          0% {
            transform: scale(0);
          }
          23.07% {
            transform: scale(0);
          }
          55% {
            transform: scale(1.1);
          }
          61.53% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes inner-circle-animation {
          0% {
            transform: scale(0);
          }
          48.15% {
            transform: scale(0);
          }
          76% {
            transform: scale(1.1);
          }
          84.61% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes image-animation {
          0% {
            transform: scale(0);
          }
          69.23% {
            transform: scale(0);
          }
          92% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
