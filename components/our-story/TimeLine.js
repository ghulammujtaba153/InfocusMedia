import React from 'react';

const data = [
  { title: 2015, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: true },
  { title: 2016, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: true },
  { title: 2017, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: true },
  { title: 2018, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2019, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2020, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2021, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2022, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2023, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2024, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
  { title: 2025, subTitle: "We Begin Our Journey", description: "+Video and Photo Graphy", active: false },
];

const TimeLine = () => {
  const lastActiveIndex = data.map(d => d.active).lastIndexOf(true);

  return (
    <div className="w-full px-[5%] py-20 overflow-x-auto">
      <div className="flex gap-12 min-w-[900px] md:min-w-[1200px]">
        {data.map((item, index) => {
          const isLastActive = index === lastActiveIndex;

          return (
            <div key={index} className="flex flex-col items-center relative min-w-[150px]">
              {/* Text section (above the line and dot) */}
              <div className="text-center mb-6">
                <div className={`text-lg font-bold ${isLastActive ? 'text-green-500' : 'text-black'}`}>
                  {item.title}
                </div>
                <div className="text-sm font-medium">{item.subTitle}</div>
                <div className="text-sm">{item.description}</div>
              </div>

              {/* Dot and connecting line below */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div className={`w-4 h-4 rounded-full ${item.active ? 'bg-green-500' : 'bg-gray-300'} z-10`} />

                {/* Line to next item (horizontal) */}
                {index !== data.length - 1 && (
                  <div className={`h-1 w-24 ${item.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
