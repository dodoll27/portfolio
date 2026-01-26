type StackItem = {
  name: string;
  tag: string;
  note?: string | null;
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
  {
    name: "Claude / Claude Code",
    tag: "AI",
    note: "ngl this whole portfolio was vibe coded — proof i know how to use it",
  },
];

export function CoreStack() {
  return (
    <section id="skills" className="px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-[#e5e5e5] py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7C3AED] mb-2">
            Core Stack
          </h2>
          <p className="text-sm text-[#666] mb-4 leading-relaxed">
            Tools and technologies I use to build scalable digital solutions.
          </p>
          <p
            className="text-6xl md:text-7xl font-bold text-[#FAF9F6] select-none"
            style={{ WebkitTextStroke: "1px #ddd" }}
          >
            TECH
          </p>
        </div>

        {[
          { label: "TOOLS", items: tools },
          { label: "LANGUAGES", items: languages },
          { label: "FRAMEWORKS", items: frameworks },
        ].map((category) => (
          <div key={category.label}>
            <h3 className="text-xs tracking-widest text-[#999] mb-6 font-medium">
              {category.label}
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
                  {item.note && (
                    <p className="text-xs text-[#bbb] italic mt-1.5 ml-5">
                      {item.note}
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
