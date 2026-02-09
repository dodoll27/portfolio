import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const works = [
  {
    title: "Aegis Protocol",
    category: "2024 / FULLSTACK DEVELOPMENT",
    image: "https://picsum.photos/seed/aegis/800/600",
    size: "large",
    href: null,
  },
  {
    title: "Mange Bien",
    category: "2024 / MOBILE APP",
    image: "https://picsum.photos/seed/mangebien/600/500",
    size: "medium",
    href: "/experience/mange-bien",
  },
  {
    title: "Kernel Core",
    category: "2023 / ARCHITECTURE",
    image: "https://picsum.photos/seed/kernel/500/550",
    size: "medium",
    href: null,
  },
  {
    title: "Global Mesh",
    category: "2022 / DEVOPS",
    image: "https://picsum.photos/seed/globalmesh/700/550",
    size: "medium",
    href: null,
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
          {/* Aegis Protocol - Large */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a]">
              <Image
                src={works[0].image || "/placeholder.svg"}
                alt={works[0].title}
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xs tracking-wider text-[#7C3AED] mb-1">
                  {works[0].category}
                </p>
                <h3 className="text-lg font-bold text-[#1a1a1a]">
                  {works[0].title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-[#1a1a1a] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Mange Bien */}
          <Link
            href={works[1].href!}
            className="md:col-span-4 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#f0f0f0]">
              <Image
                src={works[1].image || "/placeholder.svg"}
                alt={works[1].title}
                width={400}
                height={300}
                className="w-full h-[250px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xs tracking-wider text-[#7C3AED] mb-1">
                  {works[1].category}
                </p>
                <h3 className="text-lg font-bold text-[#1a1a1a]">
                  {works[1].title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-[#1a1a1a] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Kernel Core */}
          <div className="md:col-span-5 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-[#1a1a1a]">
              <Image
                src={works[2].image || "/placeholder.svg"}
                alt={works[2].title}
                width={300}
                height={350}
                className="w-full h-[300px] md:h-[350px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
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
          </div>

          {/* Global Mesh */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a]">
              <Image
                src={works[3].image || "/placeholder.svg"}
                alt={works[3].title}
                width={400}
                height={300}
                className="w-full h-[300px] md:h-[350px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-wider text-[#7C3AED] mb-1">
                {works[3].category}
              </p>
              <h3 className="text-lg font-bold text-[#1a1a1a]">
                {works[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
