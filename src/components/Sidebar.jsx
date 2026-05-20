import {
    Home,
    FolderKanban,
    User,
    Mail,
    Menu,
    X,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from '../assets/profile.png';

export default function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    return (
        <>
            <div className="sticky top-0 z-50 lg:hidden">
                <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl px-4 py-3 text-white shadow-2xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={profile}
                                alt="profile"
                                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                            />
                            <span className="text-base font-semibold tracking-tight">Ihsan Maulana</span>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    <div
                        className={`grid transition-all duration-300 ease-in-out ${mobileMenuOpen
                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                : "grid-rows-[0fr] opacity-0 mt-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <nav className="flex flex-col gap-1 pb-1">
                                <SidebarItem to="/" icon={<Home size={18} />} label="Home" onClick={() => setMobileMenuOpen(false)} />
                                <SidebarItem to="/about" icon={<User size={18} />} label="About" onClick={() => setMobileMenuOpen(false)} />
                                <SidebarItem to="/projects" icon={<FolderKanban size={18} />} label="Projects & Certificates" onClick={() => setMobileMenuOpen(false)} />
                                <SidebarItem to="/contact" icon={<Mail size={18} />} label="Contact" onClick={() => setMobileMenuOpen(false)} />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            <aside className="hidden lg:flex lg:flex-col sticky top-6 h-[calc(100vh-48px)] w-72 shrink-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white shadow-2xl z-20">
                <div className="mb-8 flex flex-col items-start">
                    <img
                        src={profile}
                        alt="profile"
                        className="mb-4 h-20 w-20 rounded-full object-cover"
                    />
                    <h1 className="text-2xl font-semibold">Ihsan Maulana Rizky</h1>
                </div>
                <nav className="flex flex-col gap-3">
                    <SidebarItem to="/" icon={<Home size={18} />} label="Home" />
                    <SidebarItem to="/about" icon={<User size={18} />} label="About" />
                    <SidebarItem to="/projects" icon={<FolderKanban size={18} />} label="Projects & Certificates" />
                    <SidebarItem to="/contact" icon={<Mail size={18} />} label="Contact" />
                </nav>
            </aside>
        </>
    );
}

function SidebarItem({ to, icon, label, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink
            to={to}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex w-full items-center gap-3.5 py-2.5 px-3 text-sm transition-colors duration-300 select-none group"
        >
            <motion.div
                className={`transition-colors duration-300 ${isActive ? "text-blue-400" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                animate={{
                    scale: isHovered ? 1.08 : 1,
                    y: isHovered && !isActive ? -1 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
                {icon}
            </motion.div>

            <div className="relative py-0.5 flex flex-col items-start">
                <span
                    className={`font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}
                >
                    {label}
                </span>

                <div className="absolute -bottom-1 left-0 right-0 h-[1.5px] overflow-visible">
                    <motion.div
                        className="absolute inset-x-0 h-full bg-zinc-500/40 origin-center rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered && !isActive ? 1 : 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    />

                    {isActive && (
                        <motion.div
                            layoutId="activeSidebarUnderline"
                            className="absolute inset-x-0 h-full bg-gradient-to-r from-blue-400 to-blue-400 rounded-full shadow-[0_1px_6px_rgba(59,130,246,0.4)]"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                    )}
                </div>
            </div>
        </NavLink>
    );
}