import React from "react";
import Image from "next/image";

const features = [
  {
    iconSrc: "/images/feature-Gear.png",
    title: "COMPONENT-BASED DEVELOPMENT",
    description:
      "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    iconSrc: "/images/feature-Pallet.png",
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    description:
      "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    iconSrc: "/images/feature-Smartphone.png",
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    description:
      "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];
const page = () => {
  return (
    <main className="w-full h-full">
      {/* Intro Text */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <p className="max-w-3xl text-[40px] text-gray-700">
          As frontend developers, we bring designs to life with{" "}
          <span className="font-semibold text-[#B76080]">
            clean, responsive code
          </span>{" "}
          that blends creativity 🎨 with usability 🌟.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative px-6 text-center"
              >
                {index !== features.length - 1 && (
                  <div className="absolute right-0 top-0 hidden h-full w-px bg-gray-200 md:block" />
                )}

                {/* Image Icon */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gray-300">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={35}
                    height={35}
                    priority={false}
                  />
                </div>

                <h3 className="mb-3 text-sm font-bold tracking-wide text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
