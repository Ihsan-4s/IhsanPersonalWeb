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
        <aside className="sticky top-6 h-[calc(100vh-48px)] w-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white shadow-2xl">     
            <div className="mb-8">
                <img
                    src={profile}
                    alt="profile"
                    className="mb-4 h-20 w-20 rounded-full object-cover"
                />
                <h1 className="text-2xl font-semibold">Ihsan Maulana Rizky</h1>
            </div>
            {/* Menu */}
            <nav className="space-y-2">
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
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
            }
        >
            {icon}
            {label}
        </NavLink>
    );
}