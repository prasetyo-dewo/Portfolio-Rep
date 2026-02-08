import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

const technologies = [
  {
    iconSrc: "/images/tech-html.png",
    title: "HTML",
    description: "Crafting semantic, accessible HTML structures.",
    highlight: true,
  },
  {
    iconSrc: "/images/tech-css.png",
    title: "CSS",
    description: "Crafting semantic, accessible HTML structures.",
    highlight: false,
  },
  {
    iconSrc: "/images/tech-js.png",
    title: "JAVASCRIPT",
    description: "Crafting semantic, accessible HTML structures.",
    highlight: true,
  },
  {
    iconSrc: "/images/tech-react.png",
    title: "REACT",
    description: "Crafting semantic, accessible HTML structures.",
    highlight: false,
  },
];

const comparison = [
  { me: "React Expert", others: "Basic React Knowledge" },
  {
    me: "Precise Website Implementation",
    others: "Inconsistent Design Translation",
  },
  {
    me: "TypeScript Proficiency",
    others: "Little to No TypeScript Knowledge",
  },
  { me: "Clean, Maintainable Code", others: "Unstructured Code" },
  {
    me: "Responsive Website Development",
    others: "Inconsistent Responsiveness",
  },
  { me: "Performance Optimization", others: "Slow and Heavy Websites" },
  { me: "UI Design Proficiency (Figma)", others: "No Design Skills" },
];

const page = () => {
  return (
    <main className="relative w-full overflow-x-hiddenbg-[#FFFFFF] font-sans">
      {/* SECTION 1: TECH STACK */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Code, Design, and Everything in Between
          </h2>
          <p className="text-gray-600 mb-16 text-lg">
            These are the technologies that power my workflow and bring ideas to
            life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`
        flex flex-col items-center gap-3
        w-[215px] h-[281px]
        py-10 px-4
        rounded-[100px]
        transition-transform duration-300 hover:scale-105
        ${tech.highlight ? "bg-[#F3B64C]" : "bg-white border border-gray-200"}
      `}
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={tech.iconSrc}
                    alt={tech.title}
                    width={40}
                    height={40}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-bold text-[#1a1a1a]">
                  {tech.title}
                </h3>

                {/* DESC */}
                <p className="text-center text-sm text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPARISON (More Than Just Code) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              More Than Just Code
            </h2>
            <p className="text-gray-600 text-lg">
              We care about design, performance, and user experience all in one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Column: With Me */}
            <div className="bg-[#ebbc6c] rounded-[40px] p-8 md:p-12 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a]">
                  With Me
                </h3>
                <div className="w-28 h-28 rounded-full overflow-hidden  bg-[#B76080] ">
                  <Image
                    src="/images/HeroPerson.png"
                    alt="Edwin Profile"
                    width={112}
                    height={112}
                    className="object-cover justify-center items-center"
                  />
                </div>
              </div>

              <ul className="space-y-5 w-full max-w-sm">
                {comparison.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 font-semibold text-[#1a1a1a]"
                  >
                    <Check
                      size={22}
                      className="shrink-0 bg-white/30 rounded-full p-1"
                    />
                    <span className="text-base md:text-lg">{item.me}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Another Talent */}
            <div className="bg-white border border-gray-100 rounded-[40px] p-8 md:p-12 flex flex-col items-center shadow-sm transition-transform hover:-translate-y-1">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Another Talent
                </h3>
                <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                  <svg
                    className="w-14 h-14 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <ul className="space-y-5 w-full max-w-sm">
                {comparison.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 font-medium text-gray-500"
                  >
                    <X
                      size={22}
                      className="text-red-400 shrink-0"
                    />
                    <span className="text-base md:text-lg">{item.others}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
