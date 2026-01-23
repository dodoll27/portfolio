import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Native Spaces | TEO.",
  description:
    "Junior Software Engineer at Native Spaces - Building digital products that people love.",
};

const contributions = [
  {
    label: "PRODUCT DEVELOPMENT",
    detail:
      "Built and shipped user-facing features across the full stack, from database schema to polished UI components.",
  },
  {
    label: "USER RESEARCH",
    detail:
      "Gathered and synthesized user feedback to drive product decisions and validate feature direction.",
  },
  {
    label: "CROSS-FUNCTIONAL COLLABORATION",
    detail:
      "Worked closely with designers, PMs, and other engineers to deliver cohesive digital experiences.",
  },
  {
    label: "BACKLOG & PRIORITIES",
    detail:
      "Helped define requirements and prioritize features to keep the team focused on what matters most.",
  },
];

const stack = ["TypeScript", "React", "Next.js", "tRPC", "Tailwind CSS"];

export default function NativeSpacesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="px-6 md:px-12 py-6 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-widest text-[#7C3AED] mb-3 font-medium">
              2024 &mdash; PRESENT
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-[0.9] mb-4">
              Native
              <br />
              Spaces
            </h1>
            <p className="text-lg text-[#666] max-w-md leading-relaxed">
              Native Spaces is an online marketplace enabling event organisers
              to discover and book unique venues alongside handpicked event
              suppliers.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col items-start md:items-end gap-3">
            <Image
              src="/LogoPrimary.svg"
              alt="Native Spaces logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
            <div className="border border-[#e5e5e5] rounded-full px-4 py-2">
              <span className="text-xs tracking-widest text-[#1a1a1a] font-medium">
                JUNIOR SOFTWARE ENGINEER
              </span>
            </div>
            <p className="text-xs text-[#999] md:text-right">Apprenticeship</p>
          </div>
        </div>
      </section>

      {/* Divider with year */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-t border-[#e5e5e5] relative">
          <span
            className="absolute -top-5 right-0 text-[80px] font-bold text-[#FAF9F6] select-none hidden md:block"
            style={{ WebkitTextStroke: "1px #e5e5e5" }}
          >
            2026
          </span>
        </div>
      </div>

      {/* About the company */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              THE LORE
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base text-[#1a1a1a] leading-relaxed mb-4">
              <a
                className="text-[#7C3AED] underline hover:no-underline"
                href="https://www.native-spaces.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Native Spaces
              </a>{" "}
              is an online marketplace that makes it easy for companies and
              individuals to book truly unique venues for events such as product
              launches, company seminars, photoshoots and other. The platform
              features a curated selection of spaces, from luxury villas and
              historic châteaux to hidden gardens, boats, and yachts, with
              options to match different styles and budgets.
            </p>
            <p className="text-base text-[#666] leading-relaxed">
              Native Spaces also supports venue owners with underused properties
              by helping them showcase their spaces and connect with both
              national and international clients. The company handles key
              operational aspects, including event insurance and a secure,
              streamlined payment system.
            </p>
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto border-t py-16 border-[#e5e5e5]">
          <h2 className="text-xs tracking-widest text-[#999] mb-10">
            WHAT I DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5]">
            {contributions.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-8">
                <div className="flex items-start gap-4">
                  <span className="text-xs text-[#7C3AED] font-mono mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xs tracking-widest text-[#1a1a1a] font-medium mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-t py-16 border-[#e5e5e5]">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              TECH I WORK WITH
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

      {/* Key achievements */}
      <section className="px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-t border-[#e5e5e5]">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-[#999] mb-4">
              KEY OUTCOMES
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                <span className="text-sm text-[#1a1a1a] leading-relaxed">
                  Shipped production features used by real users
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                <span className="text-sm text-[#1a1a1a] leading-relaxed">
                  Maintained high code quality through thorough reviews and
                  shared ownership practices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                <span className="text-sm text-[#1a1a1a] leading-relaxed">
                  Balanced shipping speed with long-term maintainability across
                  multiple product surfaces
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#experience"
            className="text-sm text-[#666] hover:text-[#7C3AED] transition-colors"
          >
            &larr; Back
          </Link>
          <p className="text-xs text-[#999]">TEO.</p>
        </div>
      </footer>
    </main>
  );
}
