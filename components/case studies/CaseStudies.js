import React from "react";

const data = [
  {
    title: "Title 1",
    description: "This is the first case study description.",
    image: "/assets/expertise/image1.png",
  },
  {
    title: "Title 2",
    description: "This is the second case study description.",
    image: "/assets/expertise/image2.png",
  },
  {
    title: "Title 3",
    description: "This is the third case study description.",
    image: "/assets/expertise/image3.png",
  },
];

const CaseStudies = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Wrapper with Hover Group */}
              <div className="relative group overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[430px] object-cover transition-all duration-300 group-hover:blur-sm"
                />
                {/* Hover Button */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                  <span className="bg-white text-black px-4 py-2 text-sm font-medium rounded shadow-md">
                    Read
                  </span>
                </button>
              </div>

              {/* Title and Description */}
              <div className="mt-4 px-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-gray-700 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
