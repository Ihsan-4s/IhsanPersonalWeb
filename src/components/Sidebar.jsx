import {
    Home,
    LayoutDashboard,
    FolderKanban,
    User,
    Mail,
    BookOpenText,
    Search,
    Moon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import profile from '../assets/profile.png'

export default function Sidebar() {
    return (
        <aside className="static lg:sticky lg:top-6 lg:h-[calc(100vh-48px)] w-full lg:w-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white shadow-2xl z-20">     
            <div className="mb-6 lg:mb-8 flex items-center lg:flex-col lg:items-start gap-4 lg:gap-0">
                <img
                    src={profile}
                    alt="profile"
                    className="h-16 w-16 lg:mb-4 lg:h-20 lg:w-20 rounded-full object-cover shrink-0"
                />
                <h1 className="text-xl lg:text-2xl font-semibold">Ihsan Maulana Rizky</h1>
            </div>
            {/* Menu */}
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                <SidebarItem 
                to="/" 
                icon={<Home size={18} />} 
                label="Home" />
                <SidebarItem
                    to="/about"
                    icon={<User size={18} />}
                    label="About"
                />
                <SidebarItem
                    to="/projects"
                    icon={<FolderKanban size={18} />}
                    label="Projects"
                />
                <SidebarItem
                    to="/contact"
                    icon={<Mail size={18} />}
                    label="Contact"
                />
            </nav>
            {/* <div className="mt-8 border-t border-zinc-800 pt-6">
                <p className="mb-3 text-sm text-zinc-500">Theme</p>
                <button className="flex w-full items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 transition hover:bg-zinc-800">
                    <Moon size={18} />
                    <span className="text-sm">Dark Mode</span>
                </button>
            </div> */}
        </aside>
    );
}

function SidebarItem({ to, icon, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex flex-1 lg:flex-none whitespace-nowrap lg:w-full items-center justify-center lg:justify-start gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
            }
        >
            {icon}
            <span className="hidden sm:inline-block lg:inline-block">{label}</span>
        </NavLink>
    );
}