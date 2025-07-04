"use client";

export default function SheikhCaseStudiesContainer() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* SECTION 1 */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Static Section</h1>
      </div>

      {/* Sticky Image Container */}
      <div className="relative bg-red-400">
        {/* Sticky Image */}
        <div className="sticky top-0 h-screen flex items-center justify-center w-full bg-red-400">
          <img
            src="/assets/portrait.png"
            alt="Portrait"
            className="max-w-md w-full h-auto object-contain"
          />
        </div>

        {/* Content that scrolls over the sticky image */}
        <div className="relative z-10 bg-transparent">
          <div className="h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Content below the image</h2>
          </div>
          
          <div className="h-screen flex items-center justify-center bg-white">
            <h2 className="text-4xl font-bold text-black">More content</h2>
          </div>
          
          <div className="h-screen flex items-center justify-center bg-blue-500">
            <h2 className="text-4xl font-bold text-white">Final section</h2>
          </div>
        </div>
      </div>
    </div>
  );
}