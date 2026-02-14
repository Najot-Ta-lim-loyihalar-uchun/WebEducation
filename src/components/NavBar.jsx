import React from "react";
import logo from "../assets/pictures/Logo.svg";
import { useTranslation } from "react-i18next";

function NavBar() {
  let { t, i18n } = useTranslation();

  let activeLang = "bg-(--color-main) text-[#fff]";

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <nav className=" w-full pt-[14px] pb-[15px] bg-[--color-box] border-b border-b-gray-300">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-[8px]">
          <img src={logo} alt="logo" />
          <h2 className="font-bold text-(--color-text) text-[1.8rem]">
            Web<span className="text-(--color-main)">Education</span>
          </h2>
        </div>

        <div className="flex items-center gap-[2rem] text-[1.6rem] text-(--color-text) font-[400]">
          <a href="#">{t("navbar.features")}</a>
          <a href="#">{t("navbar.contact")}</a>
        </div>

        <div className="flex items-center p-1 bg-(--color-line-bg) rounded-[10px] text-[1.4rem] text-(--color-text) overflow-hidden">
          <button
            className={`lang-btn  ${t("navbar.language") == "UZ" ? activeLang : ""}`}
            onClick={() => {
              changeLang("uz");
            }}
          >
            Uz
          </button>
          <button
            className={`lang-btn ${t("navbar.language") == "EN" ? activeLang : ""}`}
            onClick={() => {
              changeLang("eng");
            }}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
