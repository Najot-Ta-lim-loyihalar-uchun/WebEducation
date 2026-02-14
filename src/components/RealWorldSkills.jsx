import React from "react";
import { useTranslation } from "react-i18next";
import SkilsCard from "./SkillsCard";

function RealWorldSkills() {
  let { t } = useTranslation();
  return (
    <section id="features" className="py-24 bg-[#e9e8f2]">
      <div className="container">
        <div className="flex mb-18 flex-col justify-center items-center">
          <p className="bg-[#14B8A51A] mb-4 w-fit px-3 py-2 rounded-2xl text-[#14B8A5]">
            {t("skills.badge")}
          </p>
          <h2 className="text-[36px] text-center md:text-[48px] lg:text-[60px] pb-4 font-extrabold leading-13 bg-linear-to-r mb-6 from-[#2d24c7] to-[#b360e2] bg-clip-text text-transparent ">
            {t("skills.title")}
          </h2>
          <p className="w-full max-w-162.5 text-center text-[#6B7280] text-[18px]">
            {t("skills.description")}
          </p>
        </div>
        <div>
          <SkilsCard />
        </div>
      </div>
    </section>
  );
}

export default RealWorldSkills;
