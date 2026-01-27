"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const localeNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/") || "/");
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          <button
            onClick={() => switchLocale(loc)}
            className={`px-1 transition-colors ${
              locale === loc
                ? "text-[#7C3AED] font-medium"
                : "text-[#999] hover:text-[#1a1a1a]"
            }`}
          >
            {localeNames[loc]}
          </button>
          {index < locales.length - 1 && (
            <span className="text-[#e5e5e5]">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
