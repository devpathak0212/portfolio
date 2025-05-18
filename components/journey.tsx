const experiences = [
  {
    id: "01",
    role: "Research Intern",
    company: "CHARUSAT Space Research",
    period: "Dec 2024 - May 2025",
    location: "CHARUSAT",
  },
  {
    id: "02",
    role: "AI/ML Intern",
    company: "iNeuron.ai",
    period: "May 2024 - Jun 2024",
    location: "iNeuron",
  },
  {
    id: "03",
    role: "Industry Intern",
    company: "Transpek Ind. Ltd.",
    period: "May 2023 - Jun 2023",
    location: "Transpek",
  },
]

export default function Journey() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg text-gray-600 mb-12">My professional journey</h3>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-1 text-xl font-bold text-gray-400">{exp.id}</div>
              <div className="col-span-5 md:col-span-3">
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <p className="text-gray-600">
                  ({exp.period.split(" - ")[0].split(" ")[0]} - {exp.period.split(" - ")[1].split(" ")[0]})
                </p>
              </div>
              <div className="col-span-6 md:col-span-6 text-right md:text-left">
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <div className="col-span-12 md:col-span-2 flex justify-end">
                {exp.id === "02" && (
                  <div className="flex space-x-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-xs">AI</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-900 rounded-md flex items-center justify-center">
                      <span className="text-xs text-white">ML</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="border border-gray-300 rounded-full px-6 py-2 text-sm flex items-center hover:bg-gray-50 transition-colors">
            Download my resume
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path d="M8 12L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 8L8 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
