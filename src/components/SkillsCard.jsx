import React from "react";
import { skillsData } from "../data/SkillsData";
import { useTranslation } from "react-i18next";

function SkillsCard() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
        >
          {/* Icon */}
          <img
            className="mb-5 w-12 h-12 object-contain"
            src={t(item.icon)}
            alt="skill icon"
          />

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            {t(item.titleKey)}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base mb-6 flex-grow">
            {t(item.descKey)}
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all duration-300"
          >
            {t(item.linkKey)}
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>
        </div>
      ))}
    </div>
  );
}

export default SkillsCard;
