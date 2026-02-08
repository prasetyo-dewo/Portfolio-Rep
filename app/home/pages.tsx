import React from "react";
import Image from "next/image";
import Navbar from "./../../components/Navbar";

const icons = [
  { src: "/images/hero-JS.png", alt: "JavaScript" },
  { src: "/images/hero-CSS.png", alt: "CSS" },
  { src: "/images/hero-HTML.png", alt: "HTML" },
  { src: "/images/hero-React.png", alt: "React" },
];

const pages = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#A53860F0] text-white overflow-hidden">
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          fill
          className="object-cover mix-blend-luminosity opacity-10"
          priority
        />
      </div>

      {/* HERO GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* ================= LEFT COLUMN ================= */}
        <div className="relative flex flex-col items-start gap-10">
          {/* Tech Icons */}
          <div className="hidden lg:flex">
            <div className="flex flex-col items-center gap-6 border border-white/20 rounded-full px-4 py-6">
              {icons.map((item, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:scale-110 transition"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={26}
                    height={26}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mic Icon */}
          <Image
            src="/icons/mic.svg"
            alt=""
            width={63}
            height={63}
            className="opacity-30"
          />

          {/* Text */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-lg font-bold">Hi, I&apos;m Edwin Anderson</h3>

            <p className="font-medium text-lg text-white/80 leading-relaxed">
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </div>
        </div>

        {/* ================= CENTER COLUMN ================= */}
        <div className="relative flex flex-col items-center text-center">
          {/* Available */}
          <span className="mb-6 inline-flex items-center gap-2 bg-[#7b2a45] px-4 py-2 rounded-full text-sm font-semibold z-20">
            <span className="w-2 h-2 bg-[#E26190] rounded-full" />
            Available for Hire
          </span>

          {/* Title */}
          <div className="relative leading-none z-10">
            <span className="block text-4xl italic font-[cursive] mb-2">
              Junior
            </span>

            <span className="block text-[72px] font-extrabold text-yellow-400">
              FRONTEND
            </span>

            {/* DEVELOPER (jadi anchor buat hero image) */}
            <span className="relative block text-[72px] font-extrabold text-yellow-400">
              DEVELOPER
            </span>
          </div>

          {/* Hero Image (MENEMBUS TEKS) */}
          <Image
            src="/images/HeroPerson.png"
            alt="Profile"
            width={610}
            height={735}
            priority
            className="
      absolute
      top-[55%]
      z-20
      pointer-events-none
    "
          />
          {/* SCROLL */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-white/70">
            Scroll Down
            <Image
              src="/icons/Mouse.svg"
              alt=""
              width={12}
              height={18}
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-10 text-right">
          <Stat
            value="2+"
            label="Years Experience"
          />
          <Stat
            value="99%"
            label="Client Satisfaction"
          />
          <Stat
            value="3"
            label="Project Delivered"
          />
          <Stat
            value="50"
            label="Clients Worldwide"
          />

          <button className="ml-auto bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3">
            Contact Me
            <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-yellow-400">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* STAT COMPONENT */
type StatProps = {
  value: React.ReactNode;
  label: string;
};

const Stat = ({ value, label }: StatProps) => (
  <div>
    <h4 className="text-4xl font-bold">{value}</h4>
    <p className="text-sm text-white/70">{label}</p>
  </div>
);

export default pages;
