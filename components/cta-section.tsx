"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/contact-modal";

const socialLinks = [
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/teodora-botezatu-b87537205/" },
  { name: "GITHUB", href: "https://github.com/dodoll27" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/teo_devo/" },
];

export function CTASection() {
  const { setOpen } = useContactModal();
  const t = useTranslations("cta");

  return (
    <section className="px-6 md:px-12 py-12 md:py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {t("title1")}
            <br />
            <span className="italic text-[#E9D5FF]">{t("title2")}</span>
          </h2>

          <div className="flex flex-wrap gap-4 md:gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider text-[#999] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-lg px-12 py-6 rounded-full h-auto w-full md:w-auto"
        >
          {t("sayHello")}
        </Button>
      </div>
    </section>
  );
}
