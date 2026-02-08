import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "01",
    value: "item-1",
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    id: "02",
    value: "item-2",
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I’m open to freelance or remote opportunities — especially those focused on building intuitive and responsive user interfaces.",
  },
  {
    id: "03",
    value: "item-3",
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely! I specialize in translating design files into pixel-perfect, responsive frontend code with clean structure and component-based architecture.",
  },
  {
    id: "04",
    value: "item-4",
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Definitely! I enjoy working in cross-functional teams and have experience integrating frontend with various backend systems and APIs.",
  },
  {
    id: "05",
    value: "item-5",
    question: "Are you available for full-time roles?",
    answer:
      "I’m open to hearing about full-time opportunities that align with my values and growth as a frontend developer. Feel free to reach out!",
  },
];

const page = () => {
  return (
    <div className="w-full h-190.5 bg-[#F5F5F5]">
      <div className="text-center justify-center items-center pt-20">
        <h1 className="font-bold text-5xl">Let’s Clear Things Up</h1>
        <p>
          I’ve answered a few questions that usually come up when working with a
          frontend developer like me.
        </p>
      </div>
      <div className="mt-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {faqs.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-6 text-left no-underline hover:no-underline [&>svg]:hidden">
                {/* LEFT */}
                <div className="flex items-start gap-8">
                  <span className="text-lg font-semibold text-black">
                    {item.id}
                  </span>

                  <h3 className="text-xl font-semibold text-black">
                    {item.question}
                  </h3>
                </div>

                {/* RIGHT ICON */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xl font-medium transition group-data-[state=open]:rotate-180">
                  <span className="group-data-[state=open]:hidden">+</span>
                  <span className="hidden group-data-[state=open]:block">
                    −
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pl-[4.25rem] pr-12 pb-6 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default page;
