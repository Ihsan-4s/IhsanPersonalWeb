import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function ProjectCard({ project, index = 0 }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden flex flex-col transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.03]"
        >
            {project.image && (
                <div className="relative w-full h-48 overflow-hidden border-b border-white/[0.06]">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            
            <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Folder size={16} className="text-white/25" />
                            <h3 className="text-[15px] font-semibold text-white/85 tracking-wide">
                                {project.title}
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                    className="text-white/20 hover:text-white/60 transition-colors duration-200">
                                    <FaGithub size={15} />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    className="text-white/20 hover:text-white/60 transition-colors duration-200">
                                    <ExternalLink size={15} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-[13px] text-white/30 leading-relaxed mb-4">
                        {project.description}
                    </p>
                </div>

                <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span key={tag}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-white/25 border border-white/[0.04] tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span className={`shrink-0 text-[10px] font-medium px-2.5 py-0.5 rounded-full tracking-wider uppercase ${
                        project.status === "Live"
                            ? "bg-emerald-500/10 text-emerald-400/70 border border-emerald-500/10"
                            : project.status === "In Progress"
                            ? "bg-amber-500/10 text-amber-400/70 border border-amber-500/10"
                            : "bg-white/[0.04] text-white/30 border border-white/[0.04]"
                    }`}>
                        {project.status}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
