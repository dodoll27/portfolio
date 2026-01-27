"use client";

import { useTranslations } from "next-intl";

const educationKeys = ["epitech", "university"] as const;

export function EducationSection() {
  const t = useTranslations("education");

  return (
    <section
      className="px-6 md:px-12 pb-16 bg-[#FAF9F6] border-x border-[#e5e5e5]"
      id="uni"
    >
      <div className="mx-auto flex gap-12 justify-between border-l border-y border-[#e5e5e5] pl-6 md:pl-12 max-w-7xl">
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-2">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
          <p className="text-xs tracking-wider text-[#999]">{t("subtitle")}</p>
        </div>

        <div>
          {educationKeys.map((key, index) => (
            <div
              key={key}
              className={`${index !== 0 ? "border-t border-[#e5e5e5]" : ""} flex`}
            >
              <div
                className="border-l border-[#e5e5e5] p-6 text-5xl font-bold text-[#FAF9F6] select-none hidden lg:flex items-center w-40"
                style={{ WebkitTextStroke: "1px #e5e5e5" }}
              >
                {t(`entries.${key}.year`)}
              </div>
              <div className="border-x border-[#e5e5e5] p-6 w-full">
                <p className="text-xs tracking-widest text-[#7C3AED] mb-1 font-medium">
                  {t(`entries.${key}.level`)} |{" "}
                  {t(`entries.${key}.institution`).toUpperCase()}
                </p>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {t(`entries.${key}.title`)}
                </h3>
                <ul className="list-disc list-inside text-sm text-[#666] leading-relaxed max-w-xl space-y-0.5">
                  {(key === "epitech" ? [0, 1, 2, 3] : [0, 1]).map((idx) => (
                    <li key={idx}>{t(`entries.${key}.details.${idx}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
