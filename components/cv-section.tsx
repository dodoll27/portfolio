"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export function CVSection() {
  const t = useTranslations("cv");

  const experiences = [
    {
      key: "nativeSpaces",
      href: "/experience/native-spaces",
    },
  ];

  return (
    <section
      id="experience"
      className="px-6 md:px-12 pb-16 bg-[#FAF9F6] border-x border-[#e5e5e5]"
    >
      <div className="mx-auto flex gap-12 justify-between border-l border-y border-[#e5e5e5] pl-6 md:pl-12 max-w-7xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-2 py-8">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
          <p className="text-xs tracking-wider text-[#999]">{t("subtitle")}</p>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <div
              key={exp.key}
              className={`${
                index !== 0 && "border-t border-[#e5e5e5]"
              }relative flex justify-between`}
            >
              <div
                className=" border-[#e5e5e5]  border-l p-8 text-[80px] font-bold text-[#FAF9F6] select-none hidden lg:block"
                style={{ WebkitTextStroke: "1px #e5e5e5" }}
              >
                {t(`experiences.${exp.key}.year`)}
              </div>
              <div className=" border-x border-[#e5e5e5] p-8">
                <p className="text-xs tracking-widest text-[#7C3AED] mb-2 font-medium">
                  {t(`experiences.${exp.key}.label`)}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    {t(`experiences.${exp.key}.company`)}
                  </h3>
                  {exp.href && (
                    <Link
                      href={exp.href}
                      className="w-8 h-8 border border-[#e5e5e5] rounded-full flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-all duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                <p className="text-sm text-[#666] leading-relaxed max-w-xl">
                  {t(`experiences.${exp.key}.description`)}
                </p>
                <ul className="list-disc list-inside text-sm text-[#666] leading-relaxed max-w-xl mt-4">
                  {[0, 1, 2].map((idx) => (
                    <li key={idx}>{t(`experiences.${exp.key}.list.${idx}`)}</li>
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
