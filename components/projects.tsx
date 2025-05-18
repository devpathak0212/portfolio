import { Button } from "./ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Oil Spill Detection System",
      description:
        "A water pollution monitoring system to detect oil spills from SAR remote sensing data using deep learning frameworks..",
      technologies: ["Python", "UNet", "DeepLabV3+", "PSPNet", "Sentinel-1"],
      githubLink: "https://github.com/devpathak0212/Oil-Spill-Detection",
    },
    {
      id: 2,
      title: "Digitone",
      description:
        "An AI-powered platform that generates unique, customized ringtones based on user prompts..",
      technologies: ["Python", "Flask", "MusicGen-small"],
      githubLink: "https://github.com/devpathak0212/Digitone",
    },
    {
      id: 3,
      title: "Product Sentiment Analysis",
      description:
        "An application to analyze customer feedback and classify opinions based on sentiment for product reviews.",
      technologies: ["Python", "React.js", "NLP", "textblob"],
      githubLink: "https://github.com/devpathak0212/Product_Sentiment_Analysis",
    },
    {
      id: 4,
      title: "Server Room Access Management System",
      description:
        "A system used for analysing and controlling the accessibility of server rooms located at multiple locations.",
      technologies: ["React.js", "Node.js", "MySQL"],
      githubLink: "#",
    },
    {
      id: 5,
      title: "LinkedIn Clone",
      description:
        "Full-featured social networking platform inspired by LinkedIn.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubLink: "https://github.com/devpathak0212/LinkedIn-Clone",
    },
    {
      id: 6,
      title: "Customer Personality Analysis",
      description:
        "A data science project that analyze and categorize customer personalities from data of their purchases.",
      technologies: ["Python", "NumPy", "Pandas", "Keras", "TensorFlow"],
      githubLink: "https://github.com/devpathak0212/Customer-Personality-Analysis",
    },
    {
      id: 7,
      title: "ChatApp",
      description:
        "Real-time messaging application with user authentication and group chats.",
      technologies: ["React.js", "Firebase"],
      githubLink: "https://github.com/devpathak0212/ChatRoom",
    },
    {
      id: 8,
      title: "Phishing Domain Detection",
      description:
        "A data science project that focuses on detecting phishing domains to strengthen cybersecurity..",
      technologies: ["Python", "Keras", "TensorFlow"],
      githubLink: "https://github.com/username/phishing-detection",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900 dark:text-white">
          Projects
        </h2>
        <div className="h-1 w-16 bg-blue-500 mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-neutral-900/60 border border-neutral-800 hover:border-purple-900/40  rounded-xl transition-all backdrop-blur-sm hover:shadow-md hover:shadow-purple-900/5 relative overflow-hidden"
            >
              {/* Glass effect inspired by Apple */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-blue-500 dark:text-blue-400 text-sm font-medium">
                    0{project.id}
                  </span>

                  {/* Project links with improved visibility */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                    >
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-medium mb-3 text-neutral-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}