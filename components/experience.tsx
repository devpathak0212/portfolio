export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Research Intern",
      company: "CHARUSAT Space Research and Technology Center",
      period: "Dec 2024 - May 2025",
      description:
        "Conducted research on oil spill detection using remote sensing technologies and deep learning applications for water pollution monitoring.",
    },
    {
      id: 2,
      role: "Intern",
      company: "iNeuron.ai",
      period: "May 2024 - Jun 2024",
      description:
        "Worked on implementing Machine Learning techniques to analyze customer purchase data to predict their personalities.",
    },
    {
      id: 3,
      role: "Intern",
      company: "Transpek Ind. Ltd.",
      period: "May 2023 - Jun 2023",
      description:
        "Development an Access Managment System integrated with the security system of company's server room to monitor the server's accessibility.",
    },
  ];

  const skills = [
    "Python",
    "React.js",
    "Node.js",
    "TensorFlow",
    "Keras",
    "Deep Learning",
    "NLP",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Flask",
    "Remote Sensing",
  ];

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-16 bg-purple-600 mb-12 rounded-full"></div>

        {/* Timeline with experiences */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative pl-8 md:pl-0">
              {/* Timeline line and dot */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 md:hidden"></div>
              <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-purple-600 md:hidden"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block px-2 py-1 bg-purple-900/30 rounded-md text-purple-400 text-xs font-medium">
                      0{exp.id}
                    </span>
                    <span className="h-px flex-grow bg-neutral-800 hidden md:inline-block"></span>
                  </div>
                  <h3 className="text-xl font-medium mt-2 group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-1">{exp.company}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-purple-400 text-sm mb-3 font-medium">
                    {exp.period}
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills section */}
        <div className="mt-24">
          <h3 className="text-2xl font-medium mb-8">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-neutral-900/60 border border-neutral-800 hover:border-purple-900/40 rounded-lg transition-all hover:shadow-sm hover:shadow-purple-900/5 hover:bg-neutral-900"
              >
                <p className="text-neutral-300 text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
