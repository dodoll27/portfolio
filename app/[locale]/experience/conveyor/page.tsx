"use client";

import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

const stack = [
  "ESP8266",
  "C++",
  "PlatformIO",
  "MFRC522 (RFID)",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Recharts",
  "Dolibarr ERP",
  "MariaDB",
  "Docker",
];

export default function ConveyorPage() {
  const t = useTranslations("conveyor");

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <nav className="px-6 md:px-12 py-6 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </Link>
        </div>
      </nav>
      <section className="px-6 md:px-12 pt-16 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-widest text-[#7C3AED] mb-3 font-medium">
              {t("period")}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-[0.9] mb-4">
              RFID
              <br />
              Conveyor
            </h1>
            <p className="text-lg text-[#666] max-w-md leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col items-start md:items-end gap-3">
            <span className="text-4xl">📦</span>
            <div className="border border-[#e5e5e5] rounded-full px-4 py-2">
              <span className="text-xs tracking-widest text-[#1a1a1a] font-medium">
                {t("role")}
              </span>
            </div>
            <p className="text-xs text-[#999] md:text-right">{t("type")}</p>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-t border-[#e5e5e5] relative">
          <span
            className="absolute -top-5 right-0 text-[80px] font-bold text-[#FAF9F6] select-none hidden md:block"
            style={{ WebkitTextStroke: "1px #e5e5e5" }}
          >
            2025
          </span>
        </div>
      </div>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              {t("aboutTitle")}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base text-[#1a1a1a] leading-relaxed mb-4">
              {t("aboutP1")}
            </p>
            <p className="text-base text-[#666] leading-relaxed">
              {t("aboutP2")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto border-t py-16 border-[#e5e5e5]">
          <h2 className="text-xs tracking-widest text-[#999] mb-10">
            {t("featuresTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5]">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-8">
                <div className="flex items-start gap-4">
                  <span className="text-xs text-[#7C3AED] font-mono mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xs tracking-widest text-[#1a1a1a] font-medium mb-2">
                      {t(`features.${idx}.label`)}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {t(`features.${idx}.detail`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-t py-16 border-[#e5e5e5]">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              {t("techTitle")}
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-[#e5e5e5] rounded-full text-sm text-[#1a1a1a] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-t border-[#e5e5e5]">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              {t("architectureTitle")}
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                  <span className="text-sm text-[#1a1a1a] leading-relaxed">
                    {t(`architecture.${idx}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-t border-[#e5e5e5]">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              {t("learnedTitle")}
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                  <span className="text-sm text-[#1a1a1a] leading-relaxed">
                    {t(`learned.${idx}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-8 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#work"
            className="text-sm text-[#666] hover:text-[#7C3AED] transition-colors"
          >
            &larr; {t("backShort")}
          </Link>
          <p className="text-xs text-[#999]">TEO.</p>
        </div>
      </footer>
    </main>
  );
}
