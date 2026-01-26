const education = [
  {
    period: "2023 - 2026",
    title: "Software Architect, Application Development RNCP",
    level: "RNCP Level 7",
    institution: "Epitech",
    details: [
      "Website development in HTML/CSS/JS, React, NextJs",
      "Web, mobile and software development",
      "IoT System Development and Implementation",
      "Project methodology",
    ],
  },
  {
    period: "2020 - 2023",
    title: "Bachelor's Degree in Applied Foreign Languages",
    level: "RNCP Level 6",
    institution: "University of Nice Côte d'Azur",
    details: [
      "Translation and linguistics skills in English and Spanish",
      "Economics, management and communication skills",
    ],
  },
];

export function EducationSection() {
  return (
    <section
      className="px-6 md:px-12 pb-16 bg-[#FAF9F6] border-x border-[#e5e5e5]"
      id="uni"
    >
      <div className="mx-auto flex gap-12 justify-between border-l border-y border-[#e5e5e5] pl-6 md:pl-12 max-w-7xl">
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-2">
            TRAINING
            <br />
            LOG
          </h2>
          <p className="text-xs tracking-wider text-[#999]">
            EDUCATION 2020 - 2026
          </p>
        </div>

        <div>
          {education.map((edu, index) => (
            <div
              key={edu.period}
              className={`${index !== 0 ? "border-t border-[#e5e5e5]" : ""} flex`}
            >
              <div
                className="border-l border-[#e5e5e5] p-6 text-5xl font-bold text-[#FAF9F6] select-none hidden lg:flex items-center w-40"
                style={{ WebkitTextStroke: "1px #e5e5e5" }}
              >
                {edu.period.slice(0, 4)}
              </div>
              <div className="border-x border-[#e5e5e5] p-6 w-full">
                <p className="text-xs tracking-widest text-[#7C3AED] mb-1 font-medium">
                  {edu.level} | {edu.institution.toUpperCase()}
                </p>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {edu.title}
                </h3>
                <ul className="list-disc list-inside text-sm text-[#666] leading-relaxed max-w-xl space-y-0.5">
                  {edu.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
