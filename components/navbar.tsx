"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-medium tracking-tighter">
              <span className="text-white">Dev Pathak</span>
              <span className="text-purple-500"></span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <Link
                href="#projects"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-all hover:translate-y-[-2px]"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-all hover:translate-y-[-2px]"
              >
                Experience
              </Link>
              <Link
                href="#research"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-all hover:translate-y-[-2px]"
              >
                Research
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-all hover:translate-y-[-2px]"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-neutral-900/80 text-neutral-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              href="#projects"
              className="block py-3 px-4 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="block py-3 px-4 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#research"
              className="block py-3 px-4 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="#contact"
              className="block py-3 px-4 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
