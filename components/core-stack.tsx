"use client";

import { useTranslations } from "next-intl";

type StackItem = {
  name: string;
  tag: string;
  noteKey?: string;
};

const languages: StackItem[] = [
  { name: "JavaScript / TypeScript", tag: "CORE" },
  { name: "PHP", tag: "BACK" },
  { name: "C++", tag: "SYS" },
];

const frameworks: StackItem[] = [
  { name: "React / Next.js", tag: "CORE" },
  { name: "tRPC", tag: "API" },
  { name: "Tailwind CSS", tag: "UI" },
];

const tools: StackItem[] = [
  { name: "Figma", tag: "DESIGN" },
  { name: "GitHub", tag: "OPS" },
  { name: "Postman", tag: "API" },
  { name: "DBeaver", tag: "DB" },
  { name: "Claude / Claude Code", tag: "AI", noteKey: "claudeNote" },
];

export function CoreStack() {
  const t = useTranslations("stack");

  const categories = [
    { labelKey: "tools" as const, items: tools },
    { labelKey: "languages" as const, items: languages },
    { labelKey: "frameworks" as const, items: frameworks },
  ];

  return (
    <section id="skills" className="px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-[#e5e5e5] py-12 md:py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7C3AED] mb-2">
            {t("title")}
          </h2>
          <p className="text-sm text-[#666] mb-4 leading-relaxed">
            {t("description")}
          </p>
          <p
            className="text-6xl md:text-7xl font-bold text-[#FAF9F6] select-none"
            style={{ WebkitTextStroke: "1px #ddd" }}
          >
            TECH
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.labelKey}>
            <h3 className="text-xs tracking-widest text-[#999] mb-6 font-medium">
              {t(`categories.${category.labelKey}`)}
            </h3>
            <ul className="space-y-4">
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#7C3AED]">→</span>
                      <span className="text-sm font-medium text-[#1a1a1a]">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#999] bg-white px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>
                  {item.noteKey && (
                    <p className="text-xs text-[#bbb] italic mt-1.5 ml-5">
                      {t(item.noteKey)}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
