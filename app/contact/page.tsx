import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-[52px] font-bold leading-tight">
            Let’s Work <span className="text-[#B76080]">Together</span>
          </h1>
          <p className="mt-4 text-gray-500 text-lg">
            Have a project in mind or just want to say hi? Drop me a message —
            I’d love to hear from you.
          </p>

          <div className="flex gap-5 mt-10">
            <Image
              src="/images/Portfolio1.png"
              alt="P1"
              width={142}
              height={142}
              className="object-cover"
            />
            <Image
              src="/images/Portfolio2.png"
              alt="P2"
              width={100}
              height={100}
              className="object-cover"
            />
            <Image
              src="/images/Portfolio3.png"
              alt="P3"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm">Name</span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-[#F8F8F8] rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B76080]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm">Email</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-[#F8F8F8] rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B76080]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm">Message</span>
            <textarea
              placeholder="Enter Your Message"
              className="w-full bg-[#F8F8F8] rounded-2xl px-5 py-4 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-[#B76080]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#B76080] text-white rounded-2xl px-6 py-4 font-bold flex items-center justify-center gap-2 hover:bg-[#000000] transition-colors"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
