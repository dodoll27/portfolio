"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/contact-modal";

const socialLinks = [
  { name: "LINKEDIN", href: "https://linkedin.com/in/teogarzotto" },
  { name: "GITHUB", href: "https://github.com/dodoll27" },
  { name: "INSTAGRAM", href: "https://instagram.com/teo.garzotto" },
];

export function CTASection() {
  const { setOpen } = useContactModal();
  return (
    <section className="px-6 md:px-12 py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Let's build the
            <br />
            <span className="italic text-[#E9D5FF]">next big thing.</span>
          </h2>

          <div className="flex flex-wrap gap-4 md:gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs tracking-wider text-[#999] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-lg px-12 py-6 rounded-full h-auto"
        >
          SAY HELLO
        </Button>
      </div>
    </section>
  );
}
