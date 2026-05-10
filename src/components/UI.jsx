import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder, Award, X, Eye, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";


// ─── Section Header ──────────────────────────────────────────
// Reusable section divider with gradient lines and a label
// Usage: <SectionHeader label="Tech Stack" />
export function SectionHeader({ label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium">
                {label}
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </div>
    );
}


// ─── Link Card ───────────────────────────────────────────────
// Card with icon, label, description, and hover arrow for external links
// Used in Home (quick links) and Contact (socials)
// Usage: <LinkCard icon={FaGithub} label="GitHub" description="..." url="..." index={0} />
export function LinkCard({ icon: Icon, label, handle, description, url, index = 0, delay = 0 }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: delay + index * 0.08 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.03] group"
        >
            <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-white/10 transition-colors duration-200">
                    <Icon size={16} className="text-white/30 group-hover:text-white/55 transition-colors duration-200" />
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <p className="text-[14px] text-white/70 font-medium">{label}</p>
                        {handle && <span className="text-[11px] text-white/20">{handle}</span>}
                    </div>
                    <p className="text-[12px] text-white/25 mt-0.5">{description}</p>
                </div>
            </div>
            <motion.div
                animate={{ x: hovered ? 0 : -3, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.15 }}
            >
                <ArrowUpRight size={15} className="text-white/30" />
            </motion.div>
        </motion.a>
    );
}


// ─── Project Card ────────────────────────────────────────────
// Card for project display with title, description, tags, status, and links
// Usage: <ProjectCard project={projectObj} index={0} />
export function ProjectCard({ project, index = 0 }) {
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
            className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col justify-between transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.03]"
        >
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

            <motion.div
                className="absolute top-5 right-5 pointer-events-none"
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
                transition={{ duration: 0.2 }}
            >
            </motion.div>
        </motion.div>
    );
}


// ─── Certificate Row ─────────────────────────────────────────
// Row item for certificate display with preview and credential link
// Usage: <CertificateRow cert={certObj} index={0} onPreview={(cert) => ...} />
export function CertificateRow({ cert, index = 0, onPreview }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            onClick={() => cert.image && onPreview?.(cert)}
            className={`group flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.03] ${cert.image ? "cursor-pointer" : ""}`}
        >
            <div className="flex items-center gap-3.5 min-w-0">
                <Award size={16} className="text-white/20 shrink-0" />
                <div className="min-w-0">
                    <h3 className="text-[14px] font-medium text-white/80 tracking-wide truncate">
                        {cert.title}
                    </h3>
                    <p className="text-[12px] text-white/25 mt-0.5">
                        {cert.issuer} · {cert.date}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
                {cert.image && (
                    <span className="text-[11px] text-white/15 group-hover:text-white/35 transition-colors duration-200 flex items-center gap-1.5 tracking-wide">
                        <Eye size={12} />
                        Preview
                    </span>
                )}
                {cert.credentialUrl && (
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-white/20 hover:text-white/50 transition-colors duration-200 flex items-center gap-1.5 tracking-wide"
                    >
                        Link
                        <ExternalLink size={12} />
                    </a>
                )}
            </div>
        </motion.div>
    );
}


// ─── Lightbox Modal ──────────────────────────────────────────
// Full-screen modal for previewing certificate images/PDFs
// Supports Escape key, backdrop click, and X button to close
// Usage: <LightboxModal selected={certObj} onClose={() => ...} />
export function LightboxModal({ selected, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (selected) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [selected, onClose]);

    return (
        <AnimatePresence>
            {selected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative max-w-3xl w-full max-h-[85vh] flex flex-col rounded-2xl border border-white/[0.08] bg-zinc-950/90 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                            <div className="min-w-0">
                                <h3 className="text-[15px] font-medium text-white/80 tracking-wide truncate">
                                    {selected.title}
                                </h3>
                                <p className="text-[12px] text-white/25 mt-0.5">
                                    {selected.issuer} · {selected.date}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="shrink-0 p-1.5 rounded-lg text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-200"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
                            {selected.image?.endsWith(".pdf") ? (
                                <iframe
                                    src={selected.image}
                                    className="w-full h-[70vh] rounded-lg border border-white/[0.06]"
                                    title={selected.title}
                                />
                            ) : (
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="max-w-full max-h-[70vh] rounded-lg object-contain border border-white/[0.06]"
                                />
                            )}
                        </div>

                        {selected.credentialUrl && (
                            <div className="px-5 py-3 border-t border-white/[0.06] flex justify-end">
                                <a
                                    href={selected.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[12px] text-white/30 hover:text-white/60 transition-colors duration-200 flex items-center gap-1.5 tracking-wide"
                                >
                                    Open credential
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


// ─── Page Footer ─────────────────────────────────────────────
// Subtle centered footer text
// Usage: <PageFooter text="Built with passion and curiosity" />
export function PageFooter({ text }) {
    return (
        <p className="text-[11px] text-white/15 text-center mt-10 tracking-wider">
            — {text} —
        </p>
    );
}
