export default function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium mb-6">About Me</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Driven - And
          <br />
          Adaptable
        </h2>

        <p className="text-lg text-gray-700 mb-4 max-w-2xl">
          Passionate about creating seamless user experiences. Over 3 years in the digital development world. Expert in
          AI/ML design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="flex items-start">
            <span className="text-3xl font-bold mr-2">+</span>
            <div>
              <h3 className="text-6xl font-bold mb-4">8</h3>
              <p className="text-gray-600 uppercase text-sm tracking-wider">
                TOTAL PROJECTS
                <br />
                COMPLETED
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl font-bold mr-2">+</span>
            <div>
              <h3 className="text-6xl font-bold mb-4">3</h3>
              <p className="text-gray-600 uppercase text-sm tracking-wider">
                YEARS OF
                <br />
                EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
