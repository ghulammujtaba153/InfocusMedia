import React from "react";

const BuilderSection = () => {
  return (
    <div className="bg-white w-full min-h-screen px-8 py-20 flex md:flex-row flex-col justify-between gap-8">
      <div className="md:w-1/2 md:sticky md:top-20 flex flex-col self-start">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          WE ARE
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          FUTURE BUILDERS
        </h1>
      </div>

      <div className="md:w-1/2 h-screen flex flex-col justify-between p-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          Our stories are distinctive, and our content captures the essence of
          our community with clarity and depth. We champion an open-door policy
          that nurtures collaboration and productivity, breaking free from the
          confines of traditional offices. Rather than idolizing titles, we
          empower individuals, fostering a workplace rooted in trust and
          collective growth.
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold text-gray-900 leading-relaxed">
            Our approach to planning is proactive and reflective, as we
            continuously assess ourselves and cultivate a cohesive team that
            embraces technological advancements.
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed">
            We confront challenges with resilience and creativity, believing
            that healthy competition propels us forward and shapes us into our
            best selves. Together, we are not just building an exceptional team;
            we are crafting a legacy of success, forging a pathway rich with
            achievements and inspiring stories that uplift us all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;
