"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { worldMapPaths } from '@/data/worldMapData'

export function WorldMap() {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

    // Custom viewBox to fit the provided path coordinates
    // The provided paths seem to be in a specific coordinate system (around 900x440 based on the "insets" in the user prompt)
    const viewBox = "0 0 900 441"

    return (
        <div className="w-full bg-[#f0f4f8] py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0f1025]">
                    Explore These Mind-Blowing Study Abroad Hotspots!
                </h2>
            </div>

            <div className="relative w-full max-w-6xl mx-auto aspect-[2/1]">
                <svg
                    viewBox={viewBox}
                    className="w-full h-full drop-shadow-xl"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
                >
                    {/* Render all countries from the data */}
                    {Object.entries(worldMapPaths).map(([code, { path, name }]) => {
                        const isHovered = hoveredCountry === code

                        return (
                            <motion.path
                                key={code}
                                d={path}
                                fill={isHovered ? "#2563eb" : "#205d86"} // Darker blue on hover, default requested blue
                                stroke="white"
                                strokeWidth="0.5"
                                initial={{ opacity: 0, pathLength: 0 }}
                                animate={{ opacity: 1, pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                onMouseEnter={() => setHoveredCountry(code)}
                                onMouseLeave={() => setHoveredCountry(null)}
                                className="cursor-pointer transition-colors duration-300"
                                style={{
                                    // Fill color logic:
                                    // The image shows varying shades. We can simulate this or just use a solid logic.
                                    // Let's use a base color.
                                    fill: isHovered ? '#1d4ed8' : '#3b82f6',
                                    opacity: isHovered ? 1 : 0.8
                                }}
                            />
                        )
                    })}
                </svg>

                {/* Tooltip */}
                {hoveredCountry && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-[#38bdf8] text-white px-4 py-2 rounded shadow-lg text-sm font-bold z-10 pointer-events-none"
                        style={{
                            // Simple positioning for demo; in a real app, track mouse coordinates
                            top: "20%",
                        }}
                    >
                        {worldMapPaths[hoveredCountry as keyof typeof worldMapPaths]?.name}:
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-[#38bdf8]"></div>
                    </motion.div>
                )}
            </div>

            {/* Decorative background elements (clouds/waves as hints in the image) */}
            <div className="absolute bottom-0 left-10 opacity-20">
                {/* Simple subtle wave or cloud shape */}
                <svg width="100" height="50" viewBox="0 0 100 50">
                    <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="#94a3b8" strokeWidth="2" />
                </svg>
            </div>
        </div>
    )
}
