"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="px-6 md:px-12 py-4 bg-[#FAF9F6] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#999]">
        <div className="flex items-center gap-4">
          <span>• {t("available")}</span>
        </div>
        <span>{t("copyright")}</span>
      </div>
    </footer>
  );
}
