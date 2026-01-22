const experiences = [
  {
    year: "2026",
    label: "JUNIOR SOFTWARE ENGINEER",
    company: "Native Spaces",
    description:
      "Collaborated with cross-functional teams to ship quality digital products. Helped define requirements, prioritize features, and manage the backlog to keep everything aligned. Gathered user feedback to make informed decisions and ensure people actually love what we build. Supported development with clear documentation and kept stakeholders in the loop.",
    icon: null,
  },
  {
    year: "2022",
    label: "JUNIOR SOFTWARE ENGINEER",
    company: "Native Spaces",
    description:
      "Collaborates with cross-functional teams to ship quality digital products. Helps define requirements, prioritize features, and manage the backlog to keep everything aligned. Gathers user feedback to make informed decisions and ensure people actually love what we build. Supports development with clear documentation and keeps stakeholders in the loop.",
    icon: null,
  },
];

export function CVSection() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 pb-16 bg-[#FAF9F6]  border-[#e5e5e5]"
    >
      <div className="mx-auto flex gap-12 justify-between border-l border-y border-[#e5e5e5] pl-6 md:pl-12 max-w-7xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-2 py-8">
            VERSION 
            <br />
            HISTORY
          </h2>
          <p className="text-xs tracking-wider text-[#999] ">
            EXPERIENCE 2022 - 2026
          </p>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${
                index !== 0 && "border-t border-[#e5e5e5]"
              }relative flex justify-between`}
            >
              <div
                className=" border-[#e5e5e5]  border-l p-8 text-[80px] font-bold text-[#FAF9F6] select-none hidden lg:block"
                style={{ WebkitTextStroke: "1px #e5e5e5" }}
              >
                {exp.year}
              </div>
              <div className=" border-x border-[#e5e5e5] p-8">
                <p className="text-xs tracking-widest text-[#7C3AED] mb-2 font-medium">
                  {exp.label}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    {exp.company}
                  </h3>
                  {exp.icon && (
                    <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white">
                      {exp.icon}
                    </div>
                  )}
                </div>
                <p className="text-sm text-[#666] leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
