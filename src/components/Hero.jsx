import React from "react";
import { useTranslation } from "react-i18next";
import StudentPng from "../assets/pictures/Students.png";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-5 py-2 rounded-full text-base font-semibold mb-5">
              🚀 {t("hero.badge")}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-2xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="px-10 py-4 rounded-xl text-lg text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition">
                {t("hero.getStarted")}
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>

              <button className="px-10 py-4 rounded-xl text-lg border border-gray-300 bg-white hover:bg-gray-50 transition">
                <i className="fa-regular fa-comment mr-2"></i>
                {t("hero.contactUs")}
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              <div>
                <h3 className="text-3xl font-bold">1,000+</h3>
                <p className="text-gray-600">{t("hero.students")}</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-gray-600">{t("hero.projects")}</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold flex items-center gap-1 justify-center lg:justify-start">
                  4.9 <i className="fa-solid fa-star text-yellow-400"></i>
                </h3>
                <p className="text-gray-600">{t("hero.rating")}</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-[644px]">
              <img
                src={StudentPng}
                alt="Students"
                className="w-full aspect-[644/362.25] object-contain"
              />

              <div
                className="
      absolute
      top-[90px]
      -left-[16px]
      w-[102px]
      h-[58px]
      bg-white
      shadow-lg
      rounded-xl
      flex
      items-center
      justify-center
      gap-2
    "
              >
                <div className="bg-purple-600 text-white p-2 rounded-lg">
                  ⚛️
                </div>
                <span className="font-semibold text-sm">React</span>
              </div>

              <div
                className="
      absolute
      bottom-[90px]
      -right-[16px]
      w-[102px]
      h-[58px]
      bg-white
      shadow-lg
      rounded-xl
      flex
      items-center
      justify-center
      gap-2
    "
              >
                <div className="bg-teal-500 text-white p-2 rounded-lg">🌐</div>
                <span className="font-semibold text-sm">i18next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
