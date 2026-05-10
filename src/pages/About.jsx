import { Kanban, CardSim, School, GraduationCap, MapPin, Calendar, BookOpen, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import cv from "../assets/cv.pdf"


const educationData = [
    {
        id: 1,
        degree: "SMK Wikrama — Computer Science",
        institution: "SMK Wikrama Bogor",
        location: "Bogor, Indonesia",
        period: "2024 — 2027",
        status: "Ongoing",
        description: "Focusing on Software Engineering and Web Development. Active in class tech communities",
    },
    {
        id: 2,
        degree: "Junior High School —",
        institution: "SMPN 1 Cisarua",
        location: "Cisarua, Bogor",
        period: "2021 — 2024",
        status: "Graduated",
        description: "Mastering the academic section at school and be the second best at class.",
    },
];


export default function About() {
    const [activeTab, setActiveTab] = useState('overview');
    const [hoveredCard, setHoveredCard] = useState(null);
    const tabs = [
        { id: 'overview', label: 'Overview', icon: Kanban },
        { id: 'CV', label: 'CV', icon: CardSim },
        { id: 'education', label: 'Education', icon: School }
    ];
    return (
        <div>
            <h1 className="text-4xl">About Me</h1>
            <p className="mt-4 text-zinc-400">
                A deeper look into who <span className="text-white">I am</span> — shaped through passion, curiosity, and creativity.
            </p>
            <p className="text-zinc-400">
                More than just <span className="underline">code and design</span> — a reflection of my journey, mindset, and vision.
            </p>
            <div className=" bg-[#121212] text-gray-300">
                <div className="max-w-4xl mx-auto border border-gray-800 rounded-sm overflow-hidden flex bg-[#2a2a2a] mt-8">

                    {tabs.map((tab) => {
                        const TabIcon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors relative
                    ${activeTab === tab.id
                                        ? 'bg-[#888888] text-black'
                                        : 'hover:bg-[#333333] text-gray-400'
                                    }`}
                            >
                                <TabIcon size={15} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
                <div className="p-8 leading-relaxed space-y-6 text-[17px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="leading-relaxed"
                            >
                                <div className="mb-6">
                                    <SectionHeader label="About Me" />
                                </div>

                                <div className="border-l border-white/10 pl-5 mb-5">
                                    <p className="text-[15px] text-white/50 leading-relaxed tracking-wide">
                                        Hi! Thanks for visiting my personal website.
                                    </p>
                                </div>

                                <div className="space-y-4 text-[14px] text-white/35 leading-[1.8] tracking-wide">
                                    <p>
                                        I'm someone who finds meaning in building things from nothing—turning abstract ideas into structured, functional, and visually engaging digital experiences. What started as curiosity about how websites work has evolved into a deeper passion for crafting solutions that are not only functional, but also intentional in their design and experience.
                                    </p>
                                    <p>
                                        I see technology as more than just tools and frameworks. To me, it's a medium of expression—one that allows ideas to take shape, evolve, and interact with the world. Every line of code I write is part of a larger process of exploration, problem-solving, and continuous learning.
                                    </p>
                                    <p>
                                        My journey as a developer has been shaped by experimentation, mistakes, and constant improvement. I enjoy diving into both front-end and back-end development, understanding how systems connect, and how user experiences are formed from the smallest details to the biggest interactions. Whether it's designing interfaces that feel intuitive or building logic that runs efficiently behind the scenes, I aim to bridge creativity with structure.
                                    </p>
                                    <p>
                                        This portfolio is not just a collection of projects—it's a reflection of my growth, my curiosity, and my journey as a developer. Each project represents a step forward, a lesson learned, and a new perspective gained.
                                    </p>
                                    <p className="text-white/45">
                                        And this is just the beginning. I'm continuously evolving, refining my skills, and pushing myself to build things that matter.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'CV' && (
                            <motion.div
                                key="cv"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col"
                            >
                                <div className="mb-6">
                                    <SectionHeader label="Curriculum Vitae" />
                                </div>

                                <div className="flex items-center gap-3 mb-6">
                                    <a className="inline-flex items-center gap-2 border rounded-lg border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-white/60 transition-all duration-200 hover:border-white/25 hover:text-white/80 hover:bg-white/[0.06]"
                                        href={cv}
                                        download="CV - Ihsan.pdf"
                                    >
                                        <Download size={14} />
                                        Download CV
                                    </a>
                                    <a className="inline-flex items-center gap-2 border rounded-lg border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-white/60 transition-all duration-200 hover:border-white/25 hover:text-white/80 hover:bg-white/[0.06]"
                                        href="https://drive.google.com/file/d/1rk3QKbloWZ_IBpfH6i-tOj-5WoIYfC7-/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink size={14} />
                                        Open in Drive
                                    </a>
                                </div>

                                <div className="w-full h-[600px] rounded-lg border border-white/[0.06] overflow-hidden">
                                    <iframe
                                        src="https://drive.google.com/file/d/1rk3QKbloWZ_IBpfH6i-tOj-5WoIYfC7-/preview"
                                        width="100%"
                                        height="100%"
                                        allow="autoplay"
                                        className="bg-white/[0.02]">
                                    </iframe>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'education' && (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-8">
                                    <SectionHeader label="Academic Journey" />
                                </div>
                                <div className="relative">
                                    {educationData.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="relative pl-8 pb-10 last:pb-0 group"
                                        >
                                            <motion.div
                                                onHoverStart={() => setHoveredCard(item.id)}
                                                onHoverEnd={() => setHoveredCard(null)}
                                                whileHover={{ y: -2 }}
                                                transition={{ duration: 0.25 }}
                                                className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
                                            >
                                                <div className="p-6">
                                                    <div className="flex items-start justify-between gap-4 mb-4">
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <GraduationCap size={16} className="text-white/40 shrink-0" />
                                                                <h3 className="text-[15px] font-semibold text-white/90 tracking-wide truncate">
                                                                    {item.degree}
                                                                </h3>
                                                            </div>
                                                            <p className="text-[13px] text-white/40 font-medium tracking-wide">
                                                                {item.institution}
                                                            </p>
                                                        </div>
                                                        <span className={`shrink-0 text-[11px] font-medium px-3 py-1 rounded-full tracking-wider uppercase ${item.status === "Ongoing"
                                                                ? "bg-emerald-500/10 text-emerald-400/80 border border-emerald-500/15"
                                                                : "bg-white/[0.04] text-white/35 border border-white/[0.06]"
                                                            }`}>
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                                                        <div className="flex items-center gap-1.5 text-[12px] text-white/30">
                                                            <Calendar size={12} />
                                                            <span>{item.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-[12px] text-white/30">
                                                            <MapPin size={12} />
                                                            <span>{item.location}</span>
                                                        </div>
                                                        {item.gpa && (
                                                            <div className="flex items-center gap-1.5 text-[12px] text-white/30">
                                                                <BookOpen size={12} />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <p className="text-[13px] text-white/35 leading-relaxed mb-4">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <motion.div
                                                    className="absolute inset-0 rounded-xl pointer-events-none"
                                                    style={{
                                                        background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.015), transparent 40%)",
                                                    }}
                                                    animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-[11px] text-white/15 text-center mt-8 tracking-wider">— Education is the foundation of every innovation —</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}