import React from "react";

const data = [
  { image: "/assets/Team/image-1.png", occupation: "CEO", name: "Abass" },
  { image: "/assets/Team/image-2.png", occupation: "CTO", name: "Layla" },
  { image: "/assets/Team/image-3.png", occupation: "Designer", name: "Zayd" },
  { image: "/assets/Team/image-4.png", occupation: "Engineer", name: "Aisha" },
  { image: "/assets/Team/image-5.png", occupation: "Product", name: "Omar" },
  { image: "/assets/Team/image-6.png", occupation: "Developer", name: "Noor" },
  { image: "/assets/Team/image-7.png", occupation: "COO", name: "Yusuf" },
  { image: "/assets/Team/image-8.png", occupation: "HR", name: "Fatima" },
];

const MembersSection = () => {
  return (
    <div className="flex flex-col w-full px-6 py-20">
      <div className="flex flex-col items-center justify-center w-full relative">
        {/* Shadow wrapper */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full z-0 pointer-events-none"
          style={{
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow:
              "0 -20px 30px -10px rgba(255, 255, 0, 0.6), 0 20px 30px -10px rgba(0, 128, 0, 0.5)",
          }}
        />

        {/* Image */}
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden z-10">
          <img
            src={data[0].image}
            alt="/"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center justify-center w-full mt-2 z-10">
          <p className="text-gray-500 text-sm font-semibold">
            {data[0].occupation}
          </p>
          <h1 className="font-bold text-xl">{data[0].name}</h1>
        </div>
      </div>

      {/* Other members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
        {data.slice(1).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full"
          >
            <img
              src={item.image}
              alt="/"
              className="w-[300px] h-[300px] rounded-full"
            />
            <p className="text-gray-500 text-sm font-semibold">
              {item.occupation}
            </p>
            <h1 className="font-bold text-xl">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSection;
