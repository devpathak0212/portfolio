export default function Research() {
  return (
    <section id="research" className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Research</h2>
        <div className="h-1 w-16 bg-purple-600 mb-12 rounded-full"></div>

        <div className="group bg-neutral-900/60 border border-neutral-800 hover:border-purple-900/40 p-8 rounded-xl transition-all backdrop-blur-sm hover:shadow-md hover:shadow-purple-900/5 relative overflow-hidden">
          {/* Background gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            <div className="md:col-span-4">
              <div className="inline-block px-2 py-1 bg-purple-900/30 rounded-md text-purple-400 text-xs font-medium mb-4">
                Research Paper
              </div>
              <h3 className="text-xl font-medium group-hover:text-purple-300 transition-colors mb-2">
                A Lightweight Deep Learning Framework
              </h3>
              <p className="text-neutral-400 text-sm">
                2025 6th International Conference for Emerging Technology
                (INCET)
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-400 text-sm font-medium">
                  2nd Author
                </span>
                <a
                  href="#"
                  className="text-neutral-300 text-sm hover:text-purple-400 transition-colors flex items-center"
                >
                  View Publication
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
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                This research presents a lightweight deep learning framework
                designed for efficient land cover classification using
                Sentinel-2 satellite imagery, optimizing for both accuracy and
                computational efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Deep Learning",
                  "Remote Sensing",
                  "Sentinel-2",
                  "Land Cover Classification",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-neutral-800 rounded-full text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-neutral-900/60 border border-neutral-800 p-8 rounded-xl">
          <h3 className="text-2xl font-medium mb-6">Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-600"></div>
              <h4 className="text-lg font-medium text-purple-400 mb-3">
                Deep Learning with Remote Sensing
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                Exploring the intersection of deep learning techniques and
                remote sensing data to solve environmental monitoring
                challenges, land use classification, and disaster response
                applications.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-600"></div>
              <h4 className="text-lg font-medium text-purple-400 mb-3">
                AI for Environmental Applications
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                Using artificial intelligence to tackle environmental
                challenges, including climate change monitoring, biodiversity
                assessment, and sustainable resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
