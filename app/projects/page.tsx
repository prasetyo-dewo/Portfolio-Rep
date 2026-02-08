import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    imgSrc: "/images/Portfolio1.png",
    title: "Portfolio 1",
    description: "Web Development",
    label: "Best Portfolio",
  },
  {
    id: 2,
    imgSrc: "/images/Portfolio2.png",
    title: "Portfoio 2",
    description: "Web Development",
    label: "Best Portfolio",
  },
  {
    id: 3,
    imgSrc: "/images/Portfolio3.png",
    title: "Portfolio 3",
    description: "Web Development",
    label: "Best Portfolio",
  },
];

const Page = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* SECTION: DESIGN TO CODE ACCURACY */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Header with See All Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h1 className="font-bold text-[40px] md:text-5xl leading-tight text-[#1a1a1a]">
              Design to <span className="text-[#B76080]">Code Accuracy</span>
            </h1>
            <p className="mt-4 text-gray-600 text-[16px] leading-relaxed">
              We translated design mockups into pixel-perfect, responsive
              components, ensuring a smooth user experience across all devices.
            </p>
          </div>

          {/* See All Button - As seen in your latest screenshot */}
          <button className="group flex items-center gap-3 border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-50 transition-all shadow-sm">
            <span className="font-semibold text-[#1a1a1a]">See All</span>
            <div className="bg-[#1a1a1a] text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="bg-[#f2f2f2] rounded-[40px] p-6 transition-all duration-300 group-hover:shadow-xl">
                {/* Image Wrapper */}
                <div className="relative aspect-[4/5] rounded-[25px] overflow-hidden mb-8 shadow-sm">
                  {/* Gold Ribbon Badge */}
                  <div className="absolute top-4 left-0 z-10">
                    <div className="bg-[#ebbc6c] text-[#1a1a1a] text-[10px] font-bold px-4 py-1.5 rounded-r-full flex items-center gap-2 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full"></span>
                      {project.label}
                    </div>
                  </div>

                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card Footer Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-2">
                    <p className="text-gray-500 font-medium text-sm">
                      {project.description}
                    </p>

                    {/* Circle Arrow Button (Dusty Rose color) */}
                    <div className="w-10 h-10 bg-[#b67382] rounded-full flex items-center justify-center text-white transition-all group-hover:rotate-[-45deg]">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: EXPERIENCES */}
      <div className="py-24 bg-[#0A0D12] text-white px-4">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Experiences That <br />
              <span className="text-yellow-400">Shaped Me!</span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md md:ml-auto">
              From startups to side projects, every step has been a chance to
              learn, build, and level up.
            </p>
          </div>

          {/* EXPERIENCE LIST */}
          <div className="space-y-16">
            <ExperienceItem
              company="airbnb"
              logo="/icons/airbnb.svg"
              role="Frontend Developer"
              date="2025 - Present"
            />

            <ExperienceItem
              company="Airtasker"
              logo="/icons/airtasker.svg"
              role="Frontend Developer"
              date="2025 - Present"
            />

            <ExperienceItem
              company="Slack"
              logo="/icons/slack.svg"
              role="Frontend Developer"
              date="2025 - Present"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-20">
          <h2 className="text-4xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            What They Say About Working With Me
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real words from clients, teammates, and mentors I've collaborated
            with on various projects.
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="relative group max-w-4xl mx-auto">
          {/* Background Layers (Stacked effect) */}
          <div className="absolute inset-0 bg-[#b67382]/20 translate-y-6 rounded-[40px] scale-[0.95]"></div>
          <div className="absolute inset-0 bg-[#b67382]/40 translate-y-3 rounded-[40px] scale-[0.98]"></div>

          {/* Main Card */}
          <div className="relative bg-[#B76080] rounded-[40px] p-8 md:p-16 text-center text-white shadow-xl">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  fill="#ebbc6c"
                  color="#ebbc6c"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-10">
              "Working with Edwin Anderson was a smooth experience from start to
              finish. He translated our design into clean, responsive code and
              even suggested improvements we hadn't thought of. Highly
              recommended!"
            </blockquote>

            {/* Profile */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                <Image
                  src="/images/TestimoniPerson.png"
                  alt="Sarah Tan"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
              <h4 className="font-bold text-lg">Sarah Tan</h4>
              <p className="text-white/70 text-sm">
                Product Manager at Finovate
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-16">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-gray-400">
            <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-gray-900">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
const ExperienceItem = ({
  company,
  logo,
  role,
  date,
}: {
  company: string;
  logo: string;
  role: string;
  date: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-t border-white/10 pt-10">
      {/* LEFT */}
      <div>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h4 className="font-semibold">{role}</h4>
      </div>

      {/* CENTER */}
      <div className="flex md:justify-center">
        <div className="bg-[#0f131a] border border-white/10 rounded-xl p-6 w-40 flex items-center justify-center">
          <Image
            src={logo}
            alt={company}
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* RIGHT */}
      <p className="text-gray-400 leading-relaxed text-sm">
        Built responsive web interfaces using modern frameworks like React.js,
        ensuring seamless integration with backend systems. Optimized
        performance, implemented accessible designs, and delivered clean,
        reusable code to enhance user experience and scalability.
      </p>
    </div>
  );
};

export default Page;
