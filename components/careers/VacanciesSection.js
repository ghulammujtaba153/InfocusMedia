"use client";
import React, { useState } from "react";
import ApplyingModal from "./ApplyingModal";

const vacancies = [
  {
    id: 1,
    title: "3D Animator",
    location: "Dubai, UAE",
    type: "Full-time",
    rote:
      "You’ll be responsible for bringing ideas to life through stunning 3D animations, visual storytelling, and motion graphics for digital campaigns, product visuals, and brand content.",
  },
  {
    id: 2,
    title: "Motion Designer",
    location: "Remote",
    type: "Contract",
    rote:
      "Create high-impact visuals, transitions, and animations for social media and branding campaigns. Collaborate closely with creative directors.",
  },
  {
    id: 3,
    title: "Visual Editor",
    location: "Dubai, UAE",
    type: "Part-time",
    rote:
      "Edit compelling videos and help bring the vision of the creative team to life using After Effects and Premiere Pro.",
  },
];

const VacanciesSection = () => {
  const [openId, setOpenId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null); // store the clicked job

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-white py-20">
      {/* Modal */}
      {selectedJob && (
        <ApplyingModal
          id={selectedJob.id}
          title={selectedJob.title}
          onClose={() => setSelectedJob(null)}
        />
      )}

      <div className="container mx-auto px-6">
        {vacancies.length === 0 ? (
          <div className="text-center flex flex-col justify-center items-center mb-16 h-screen">
            <h1 className="text-2xl md:text-5xl font-bold mb-2">
              No Open Vacancies
            </h1>
            <p>
              We’re not hiring right now, but we’re always happy to hear from
              talented people.
            </p>
            <p>
              Feel free to send your resume to{" "}
              <strong>contact@infocusmedia.ae</strong>
            </p>
            <p>We’ll be in touch if something opens up!</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vacancies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vacancies.map((job) => (
                <div
                  key={job.id}
                  className="border-b border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer transition"
                    onClick={() => toggleOpen(job.id)}
                  >
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      {/* horizontal bar */}
                      <div className="absolute w-full h-[2px] bg-black" />
                      {/* vertical bar for plus */}
                      {openId !== job.id && (
                        <div className="absolute h-full w-[2px] bg-black" />
                      )}
                    </div>
                  </div>

                  {openId === job.id && (
                    <div className="p-4 border-t border-gray-200 bg-white text-sm space-y-2">
                      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                        <div className="w-full">
                          <p className="font-semibold text-gray-400">
                            LOCATION
                          </p>
                          <p>{job.location}</p>
                        </div>

                        <div className="w-full">
                          <p className="font-semibold text-gray-400">
                            EMPLOYMENT TYPE
                          </p>
                          <p>{job.type}</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-400">ABOUT ROLE</p>
                        <p>{job.rote}</p>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-4">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="font-semibold bg-black text-white px-4 py-2 rounded-md hover:opacity-90"
                        >
                          Apply Now
                        </button>
                        <button className="font-semibold text-black bg-gray-200 px-4 py-2 rounded-md hover:opacity-90">
                          Read More
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VacanciesSection;
