"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/contact-modal";
import { LanguageSwitcher } from "@/components/language-switcher";

const navLinks = ["experience", "uni", "skills", "pulse"] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setOpen } = useContactModal();
  const t = useTranslations("header");

  return (
    <header className="relative bg-[#FAF9F6]">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 bg-[#1a1a1a] rounded-sm" />
            <div className="w-2 h-2 bg-[#1a1a1a] rounded-sm" />
            <div className="w-2 h-2 bg-[#1a1a1a] rounded-sm" />
            <div className="w-2 h-2 bg-[#1a1a1a] rounded-sm" />
          </div>
          <span className="font-bold text-lg text-[#1a1a1a]">TEO.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => (
            <Link
              key={key}
              href={`#${key}`}
              className="text-sm font-medium text-[#1a1a1a] tracking-wide hover:opacity-70"
            >
              {t(key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => setOpen(true)}
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm px-5 py-2 rounded-full"
          >
            {t("sayHello")}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-[#e5e5e5] px-6 py-4 flex flex-col gap-4 bg-[#FAF9F6]">
          {navLinks.map((key) => (
            <Link
              key={key}
              href={`#${key}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#1a1a1a] tracking-wide hover:opacity-70 py-2"
            >
              {t(key)}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#e5e5e5]">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
