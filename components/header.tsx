"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-purple-600">DP</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">
              Work
            </Link>
            <Link href="#resume" className="text-gray-700 hover:text-gray-900 transition-colors">
              Resume
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">Contact Me</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#work"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#resume"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">Contact Me</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
