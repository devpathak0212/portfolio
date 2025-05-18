import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium mb-6">Testimonial</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Keeps Us
          <br />
          Organized
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl">
          <div className="text-4xl text-gray-200 mb-4">"</div>
          <p className="text-lg text-gray-700 mb-8">
            Dev's work exceeded our expectations—professional, innovative, and a pleasure to collaborate with. Their
            attention to detail and creative approach truly set them apart.
          </p>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
              <Image src="/placeholder.svg?height=48&width=48" alt="Testimonial author" width={48} height={48} />
            </div>
            <div>
              <h4 className="font-bold">Albert Stevenson</h4>
              <p className="text-gray-600 text-sm">Design Lead</p>
            </div>
          </div>
        </div>

        <div className="flex mt-8">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
