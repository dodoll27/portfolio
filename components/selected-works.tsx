import Image from "next/image";
import Link from "next/link";

const works = [
  {
    title: "Alertify",
    category: "2024-2026 / DISASTER MANAGEMENT PLATFORM",
    image: "/alertify.webp",
    href: "/experience/alertify",
  },
  {
    title: "RFID Conveyor",
    category: "2025 / IOT & FULLSTACK",
    image: "/conveyor.webp",
    href: "/experience/conveyor",
  },
  {
    title: "Mange Bien",
    category: "2026 / RECIPE SHARING MOBILE APP",
    image: "/mangebien.webp",
    href: "/experience/mange-bien",
  },
];

export function SelectedWorks() {
  return (
    <section id="work" className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-t py-16 bg-[#FAF9F6]">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Selected Works
            </h2>
            <span className="text-xs text-[#999] ml-2">06</span>
          </div>
          <p className="text-xs tracking-widest text-[#999]">
            SCROLL TO EXPLORE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Alertify - Large */}
          <Link
            href={works[0].href}
            className="md:col-span-8 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a]">
              <Image
                src={works[0].image}
                alt={works[0].title}
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-wider text-[#7C3AED] mb-1">
                {works[0].category}
              </p>
              <h3 className="text-lg font-bold text-[#1a1a1a]">
                {works[0].title}
              </h3>
            </div>
          </Link>

          {/* RFID Conveyor */}
          <Link
            href={works[1].href}
            className="md:col-span-4 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#1a1a1a]">
              <Image
                src={works[1].image}
                alt={works[1].title}
                width={400}
                height={300}
                className="w-full h-[250px] md:h-[400px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-wider text-[#7C3AED] mb-1">
                {works[1].category}
              </p>
              <h3 className="text-lg font-bold text-[#1a1a1a]">
                {works[1].title}
              </h3>
            </div>
          </Link>

          {/* Mange Bien - pushed right */}
          <Link
            href={works[2].href}
            className="md:col-span-8 md:col-start-5 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#1a1a1a]">
              <Image
                src={works[2].image}
                alt={works[2].title}
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-wider text-[#7C3AED] mb-1">
                {works[2].category}
              </p>
              <h3 className="text-lg font-bold text-[#1a1a1a]">
                {works[2].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
