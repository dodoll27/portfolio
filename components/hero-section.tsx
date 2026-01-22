"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 ">
        <div
          className="text-[120px] -rotate-90 md:text-[180px] font-bold text-[#FAF9F6] select-none self-center "
          style={{ WebkitTextStroke: "2px #e5e5e5" }}
        >
          TEO
        </div>
        <div className="flex-1 ">
          <p className="text-xs tracking-widest text-[#7C3AED] mb-4 font-medium">
            SOFTWARE ENGINEER, GEN-Z EDITION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Crafting Digital
            <br />
            <span className="text-[#7C3AED]">Ecosystems.</span>
          </h1>
          <p className="text-[#666] max-w-md mb-8 leading-relaxed">
            Based in the intersection of robust code and Swiss design
            principles. Focused on building interfaces that are as functional as
            they are beautiful.
          </p>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white group bg-transparent"
            onClick={() => window.open("https://github.com/dodoll27", "_blank")}
          >
            GitHub
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
