import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Research from "@/components/research"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Research />
        <Contact />
      </div>
    </main>
  )
}
