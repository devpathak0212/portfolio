import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-white">D</span>
              <span className="text-gray-400">P</span>
            </Link>
            <p className="text-gray-400 mt-2">Developer & Researcher</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/devpathak0212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-pathak0212/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:devbrijenpathak@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Dev Pathak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
