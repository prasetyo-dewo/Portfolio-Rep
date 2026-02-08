import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0D12] py-10">
      {/* Container utama dengan max-width agar sejajar dengan konten atas */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Garis pemisah tipis di bagian atas sesuai desain gambar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Teks Hak Cipta di sisi kiri */}
          <div className="text-gray-400 text-sm">
            <p>© 2025 Edwin Anderson. All rights reserved.</p>
          </div>

          {/* Ikon Sosial Media di sisi kanan */}
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/Facebook.svg"
                alt="Facebook"
                width={24} // Ukuran ikon di footer biasanya lebih kecil (24px)
                height={24}
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/Linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/Tik Tok.svg"
                alt="Tiktok"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
