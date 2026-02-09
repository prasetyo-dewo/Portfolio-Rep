"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleNavigate = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };
  const menu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skill", href: "/skill" },
    { label: "Projects", href: "/projects" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-[#7b2a45] rounded-full px-8 py-3 flex gap-6 text-sm text-white shadow-lg backdrop-blur">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={handleNavigate}
              className="cursor-pointer hover:text-yellow-300 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%]">
        <div className="bg-[#7b2a45] rounded-2xl px-4 py-3 flex items-center justify-between text-white shadow-lg">
          <span className="font-bold">Edwin</span>

          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* DROPDOWN */}
        {open && (
          <div className="mt-2 bg-[#7b2a45] rounded-2xl py-4 shadow-lg text-white">
            {menu.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={handleNavigate}
                className="block px-4 py-2 text-center hover:text-yellow-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
