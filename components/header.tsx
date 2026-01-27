"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/contact-modal";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  const { setOpen } = useContactModal();
  const t = useTranslations("header");

  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#FAF9F6]">
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
        <Link
          href="#experience"
          className="text-sm font-medium text-[#1a1a1a] tracking-wide hover:opacity-70"
        >
          {t("experience")}
        </Link>
        <Link
          href="#uni"
          className="text-sm font-medium text-[#1a1a1a] tracking-wide hover:opacity-70"
        >
          {t("uni")}
        </Link>
        <Link
          href="#skills"
          className="text-sm font-medium text-[#1a1a1a] tracking-wide hover:opacity-70"
        >
          {t("skills")}
        </Link>
        <Link
          href="#pulse"
          className="text-sm font-medium text-[#1a1a1a] tracking-wide hover:opacity-70"
        >
          {t("pulse")}
        </Link>
        <LanguageSwitcher />
      </nav>

      <Button
        onClick={() => setOpen(true)}
        className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm px-5 py-2 rounded-full"
      >
        {t("sayHello")}
      </Button>
    </header>
  );
}
