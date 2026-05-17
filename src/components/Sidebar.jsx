import {
    Home,
    FolderKanban,
    User,
    Mail,
    Menu,
    X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import profile from '../assets/profile.png'

export default function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu on route change (via resize or escape)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
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
            {/* ─── Mobile Top Bar ─── */}
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

                    {/* Mobile dropdown menu */}
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${
                            mobileMenuOpen
                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                    >
                        <div className="overflow-hidden">
                            <nav className="flex flex-col gap-1 pb-1">
                                <SidebarItem to="/" icon={<Home size={18} />} label="Home" onClick={() => setMobileMenuOpen(false)} />
                                <SidebarItem to="/about" icon={<User size={18} />} label="About" onClick={() => setMobileMenuOpen(false)} />
                                <SidebarItem to="/projects" icon={<FolderKanban size={18} />} label="Projects" onClick={() => setMobileMenuOpen(false)} />
                                <SidebarItem to="/contact" icon={<Mail size={18} />} label="Contact" onClick={() => setMobileMenuOpen(false)} />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile overlay backdrop */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* ─── Desktop Sidebar ─── */}
            <aside className="hidden lg:flex lg:flex-col sticky top-6 h-[calc(100vh-48px)] w-72 shrink-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white shadow-2xl z-20">
                <div className="mb-8 flex flex-col items-start">
                    <img
                        src={profile}
                        alt="profile"
                        className="mb-4 h-20 w-20 rounded-full object-cover"
                    />
                    <h1 className="text-2xl font-semibold">Ihsan Maulana Rizky</h1>
                </div>
                {/* Menu */}
                <nav className="flex flex-col gap-2">
                    <SidebarItem to="/" icon={<Home size={18} />} label="Home" />
                    <SidebarItem to="/about" icon={<User size={18} />} label="About" />
                    <SidebarItem to="/projects" icon={<FolderKanban size={18} />} label="Projects" />
                    <SidebarItem to="/contact" icon={<Mail size={18} />} label="Contact" />
                </nav>
            </aside>
        </>
    );
}

function SidebarItem({ to, icon, label, onClick }) {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                    isActive
                        ? "bg-zinc-800 text-white shadow-lg shadow-black/20"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
}