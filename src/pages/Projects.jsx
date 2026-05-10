import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import CertificateRow from "../components/CertificateRow";
import LightboxModal from "../components/LightboxModal";
import PageFooter from "../components/PageFooter";



const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A personal website built with React and Tailwind CSS to showcase my projects, skills, and journey as a developer.",
        tags: ["React", "Tailwind"],
        liveUrl: "https://ihsan-personal-web.vercel.app/",
        githubUrl: "https://github.com/Ihsan-4s/IhsanPersonalWeb",
        status: "Live",
        image: "/projects/personal.png",
    },
    {
        id: 2,
        title: "Cryptarithm Puzzle Solver",
        description: "A mobile application for solving cryptarithm puzzles with a user-friendly interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://ihsan-4s.github.io/cryptarithm/",
        githubUrl: "https://github.com/Ihsan-4s/cryptarithm",
        status: "Completed",
        image: "/projects/cryptarithm.png",
    },
    {
        id: 3,
        title: "Dictionary App",
        description: "A clean dictionary application that fetches word definitions, phonetics, and examples from a public API.",
        tags: ["React", "API", "Tailwind"],
        liveUrl: "https://dictionaruy.vercel.app/",
        githubUrl: "https://github.com/Ihsan-4s/Dictionaruy",
        status: "Completed",
        image: "/projects/dictionaruy.png",
    },
    {
        id: 4,
        title: "Echolearn",
        description: "A website for learning live healthy lifestyle with a focus on visual feedback and interactive learning.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "https://lnkd.in/g2yg3zWR",
        githubUrl: null,
        status: "Completed",
        image: "/projects/echolearn.png",
    },
    {
        id: 5,
        title: "Forum App",
        description: "A simple forum application with features like creating posts, commenting, and user authentication.",
        tags: ["PHP", "MySQL"],
        liveUrl: null,
        githubUrl: "https://github.com/Ihsan-4s/Forum-Online",
        status: "Completed",
        image: "/projects/forum.png",
    },
];

const certificatesData = [
    {
        id: 1,
        title: "React JS Front-End Web Developer",
        issuer: "DigiUp ",
        image: "/certificates/digiup.png",
    },
    {
        id: 2,
        title: "FullStack Web Development",
        issuer: "DBS Foundation x Dicoding Indonesia",
        image: "/certificates/dbs.png",
    },
    {
        id: 3,
        title: "Git & GitHub",
        issuer: "Dicoding Indonesia",
        image: "/certificates/git.png",
    },
    {
        id: 4,
        title: "K3 Safety and Health Practitioner",
        issuer: "International Labour Organization (ILO)",
        image: "/certificates/k3.png",
    },
];

const allTags = ["All", ...new Set(projectsData.flatMap(p => p.tags))];


export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedCert, setSelectedCert] = useState(null);

    const filtered = activeFilter === "All"
        ? projectsData
        : projectsData.filter(p => p.tags.includes(activeFilter));

    return (
        <div>
            <h1 className="text-3xl md:text-4xl">Projects</h1>
            <p className="mt-4 text-zinc-400">
                A collection of things I've <span className="text-white">built</span> — from experiments to real-world applications.
            </p>
            <p className="text-zinc-400">
                Each project reflects a <span className="underline">problem solved</span>, a skill learned, or an idea explored.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveFilter(tag)}
                        className={`px-3.5 py-1.5 text-[12px] rounded-md font-medium tracking-wide transition-all duration-200 border ${
                            activeFilter === tag
                                ? "bg-white/10 text-white/80 border-white/15"
                                : "bg-transparent text-white/30 border-white/[0.06] hover:text-white/50 hover:border-white/10"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </div>
            <PageFooter text="More projects coming soon" />
            <div className="mt-16 mb-12 border-t border-white/[0.06]" />
            <h2 className="text-2xl md:text-3xl">Certificates</h2>
            <p className="mt-4 text-zinc-400">
                Credentials and certifications I've <span className="text-white">earned</span> along the way.
            </p>
            <div className="mt-8 flex flex-col gap-3">
                {certificatesData.map((cert, index) => (
                    <CertificateRow
                        key={cert.id}
                        cert={cert}
                        index={index}
                        onPreview={setSelectedCert}
                    />
                ))}
            </div>
            <PageFooter text="Always learning, always growing" />
            <LightboxModal
                selected={selectedCert}
                onClose={() => setSelectedCert(null)}
            />
        </div>
    );
}