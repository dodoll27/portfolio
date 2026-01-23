const engineering = [
  { name: "JavaScript/ TypeScript", tag: "CORE" },
  { name: "React / Next.js", tag: "CORE" },
  { name: "PHP", tag: "SYS" },
  { name: "C++", tag: "CORE" },
];

const designSystems = [
  { name: "Figma", tag: "UI" },
  { name: "Github", tag: "OPS" },
  { name: "Postman", tag: "NEW" },
  { name: "Git / CI/CD", tag: "OPS" },
];

export function CoreStack() {
  return (
    <section id="skills" className="px-6 md:px-12 py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7C3AED] mb-2">
            Core Stack
          </h2>
          <p className="text-sm text-[#666] mb-4 leading-relaxed">
            Tools and technologies I use to build scalable digital solutions.
          </p>
          <p
            className="text-6xl md:text-7xl font-bold text-[#f5f5f0] select-none"
            style={{ WebkitTextStroke: "1px #ddd" }}
          >
            TECH
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-widest text-[#999] mb-6 font-medium">
            ENGINEERING
          </h3>
          <ul className="space-y-4">
            {engineering.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#7C3AED]">→</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs text-[#999] bg-white px-2 py-1 rounded">
                  {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest text-[#999] mb-6 font-medium">
            DESIGN & SYSTEMS
          </h3>
          <ul className="space-y-4">
            {designSystems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#7C3AED]">→</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">
                    {item.name}
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    item.tag === "NEW"
                      ? "bg-[#FEF3C7] text-[#D97706]"
                      : "bg-white text-[#999]"
                  }`}
                >
                  {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
