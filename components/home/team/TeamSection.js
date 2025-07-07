"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Location from "./Location";

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

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    // Auto-play functionality
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Pause auto-play on hover
    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
    };

    const getVisibleItems = () => {
        const items = [];
        const totalItems = data.length;

        // Get 5 items centered around current index
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + totalItems) % totalItems;
            items.push({
                ...data[index],
                originalIndex: index,
                position: i,
            });
        }

        return items;
    };

    const visibleItems = getVisibleItems();

    return (
        <section className="relative bg-black text-white py-20 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet The Team</h2>
                
            </div>

            <div
                className="relative flex items-center justify-center px-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="cursor-pointer absolute left-4 z-20 bg-white/10 backdrop-blur-md p-4 rounded-md hover:bg-white/20 transition-all duration-300"
                    aria-label="Previous team member"
                >
                    <FaChevronLeft className="text-white text-xl" />
                </button>


                {/* Carousel Container */}
                <div className="flex gap-8 items-center justify-center max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {visibleItems.map((item, idx) => {
                            const isCenter = item.position === 0;
                            const isFar = Math.abs(item.position) === 2;

                            return (
                                <motion.div
                                    key={`${item.originalIndex}-${currentIndex}`}
                                    initial={{
                                        opacity: isFar ? 0.3 : Math.abs(item.position) === 1 ? 0.6 : 1,
                                        scale: isFar ? 0.8 : Math.abs(item.position) === 1 ? 0.9 : 1.1,
                                        y: isFar ? 20 : Math.abs(item.position) === 1 ? 10 : 0
                                    }}
                                    animate={{
                                        opacity: isFar ? 0.3 : Math.abs(item.position) === 1 ? 0.6 : 1,
                                        scale: isFar ? 0.8 : Math.abs(item.position) === 1 ? 0.9 : 1.1,
                                        y: isFar ? 20 : Math.abs(item.position) === 1 ? 10 : 0
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className={`flex flex-col items-center justify-center text-center transition-all duration-500 ${isCenter ? 'z-10' : 'z-0'
                                        }`}
                                >
                                    <div className={`relative rounded-2xl p-6 ${isCenter ? 'md:max-w-[500px] max-h-[500px] mt-[0px]' : Math.abs(item.position) === 1 ? 'max-w-[500px] max-h-[500px]' : 'max-w-[500px] max-h-[500px]'
                                        }`}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={`rounded-full object-cover mx-auto mb-4 ${isCenter ? 'max-w-[250px] max-h-[250px] md:max-w-[414px] md:max-h-[414px]' : Math.abs(item.position) === 1 ? 'max-w-[230px] max-h-[230px] md:max-w-[350px] md:max-h-[350px] ' : 'max-w-[230px] max-h-[230px] md:max-w-[350px] md:max-h-[350px]'
                                                }`}
                                        />
                                        <p className="text-sm  uppercase tracking-wider font-semibold mb-2">
                                            {item.occupation}
                                        </p>
                                        <h3 className={`font-bold text-white ${isCenter ? 'text-2xl' : Math.abs(item.position) === 1 ? 'text-xl' : 'text-lg'
                                            }`}>
                                            {item.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="cursor-pointer absolute right-4 z-20 bg-white/10 backdrop-blur-md p-4 rounded-md hover:bg-white/20 transition-all duration-300"
                    aria-label="Next team member"
                >
                    <FaChevronRight className="text-white text-xl" />
                </button>
            </div>


        </section>
    );
};

export default TeamSection;