import React from "react";
import { useTranslation } from "react-i18next";

function Form() {
  const [t] = useTranslation();

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <p className="text-indigo-600 bg-indigo-100 py-2 px-4 rounded-full text-sm md:text-base mb-4">
            {t("contact.badge")}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            {t("contact.description")}
          </p>
        </div>

        {/* Form */}
        <form className="border border-gray-200 w-full max-w-xl mx-auto p-6 md:p-8 rounded-2xl shadow-sm bg-white">
          {/* Name */}
          <label className="flex flex-col mb-6">
            <span className="mb-2 text-sm md:text-base font-medium">
              {t("contact.form.name")}
            </span>
            <input
              required
              type="text"
              placeholder={t("contact.form.namePlaceholder")}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col mb-6">
            <span className="mb-2 text-sm md:text-base font-medium">
              {t("contact.form.email")}
            </span>
            <input
              required
              type="email"
              placeholder={t("contact.form.emailPlaceholder")}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col mb-6">
            <span className="mb-2 text-sm md:text-base font-medium">
              {t("contact.form.message")}
            </span>
            <textarea
              required
              rows="5"
              placeholder={t("contact.form.messagePlaceholder")}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none"
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition duration-300"
          >
            {t("contact.form.button") || "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
