import React from "react";
import { useTranslation } from "react-i18next";

/* assets && icons */
import { LuGithub, LuTwitter } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import Logo from "../assets/pictures/Logo.svg";

function Footer() {
  let [t] = useTranslation();
  const MediaLink = [
    {
      icon: <LuGithub />,
      link: "https://github.com/Murodiljon07",
    },
    {
      icon: <LuTwitter />,
      link: "https://github.com/Murodiljon07",
    },
    {
      icon: <SlSocialLinkedin />,
      link: "https://github.com/Murodiljon07",
    },
  ];

  return (
    <footer>
      <div className="container flex justify-between items-center">
        <div>
          <div className="flex items-center gap-[8px]">
            <img src={Logo} alt="logo" />
            <h2 className="font-bold text-(--color-text) text-[1.8rem]">
              Web<span className="text-(--color-main)">Education</span>
            </h2>
          </div>
          <p>{t("footer.copyright")}</p>
        </div>
        <div className="text-[14px] text-(--color-text) flex gap-[19px]">
          <a href="#">{t("footer.privacy")}</a>
          <a href="#">{t("footer.terms")}</a>
        </div>
        <div className="flex gap-4 items-center justify-center">
          {MediaLink.map((item) => (
            <a
              href={item.link}
              target="_blank"
              className="text-[20px] p-[10px] border border-gray-200 rounded-3xl hover:bg-(--color-main) hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
