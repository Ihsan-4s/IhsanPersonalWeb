import { MapPin, Sparkles, Code2 } from "lucide-react";
import {
    SiReact,
    SiLaravel,
    SiPhp,
    SiGithub,
    SiMysql,
    SiMongodb,
    SiJavascript,
    SiLaragon,
    SiTailwindcss,
    SiDotnet,
    SiFlutter
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollVelocity from "../components/ScrollVelocity";
import SectionHeader from "../components/SectionHeader";
import LinkCard from "../components/LinkCard";
import PageFooter from "../components/PageFooter";

const tools = [
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
    { icon: SiPhp, name: "PHP", color: "text-blue-400" },
    { icon: SiGithub, name: "Github", color: "text-white/70" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiLaragon, name: "Laragon", color: "text-blue-500" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: SiDotnet, name: ".NET", color: "text-purple-500" },
    { icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
];

const quickLinks = [
    {
        id: "github",
        label: "GitHub",
        description: "Explore my projects and coding journey",
        url: "https://github.com/Ihsan-4s",
        icon: SiGithub,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        description: "Let's connect professionally",
        url: "https://www.linkedin.com/in/ihsan-maulana-rizky-895509330/",
        icon: FaLinkedinIn,
    },
];

export default function Home() {

    const pills = (
        <>
            {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                    <div key={tool.name} className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 text-[13px] text-white/60 backdrop-blur-sm">
                        <Icon className={tool.color} />
                        <span>{tool.name}</span>
                    </div>
                );
            })}
        </>
    );

    return (
        <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-2 mb-4">
                    <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-xl md:text-2xl">👋</motion.span>
                    <span className="text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-white/25 font-medium">Welcome</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Ihsan</span>
                </h1>
            </motion.div>

            <motion.ul className="flex flex-wrap gap-2.5 mt-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
                <li className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 backdrop-blur-sm text-[12px] font-medium text-white/50 tracking-wide">
                    <Code2 size={13} className="text-white/30" />
                    Junior Web Developer
                </li>
                <li className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 backdrop-blur-sm text-[12px] font-medium text-white/50 tracking-wide">
                    <MapPin size={13} className="text-white/30" />
                    Bogor, Indonesia
                </li>
                <li className="relative">
                    <a href="https://www.linkedin.com/in/ihsan-maulana-rizky-895509330/">
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl"></div>
                        <div className="relative flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.08] px-4 py-2 backdrop-blur-sm text-[12px] font-medium tracking-wide">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span className="text-emerald-300/80">
                                Open To Work
                            </span>
                        </div>
                    </a>
                </li>
            </motion.ul>

            {/* Bio */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-6"
            >
                <div className="border-l border-white/[0.08] pl-5">
                    <p className="text-[14px] text-white/35 leading-[1.8] tracking-wide">
                        A student with a strong interest in programming and application development. I have experience working with technologies such as JavaScript, PHP, React.js, Flutter, and Laravel, along with database management and API development.
                    </p>
                </div>
            </motion.div>

            {/* Tools Section */}
            <div className="mt-10">
                <div className="mb-6">
                    <SectionHeader label="Tech Stack" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="w-full overflow-hidden"
                >
                    <ScrollVelocity speed={35} direction="left">
                        {pills}
                    </ScrollVelocity>
                    <ScrollVelocity speed={35} direction="right">
                        {pills}
                    </ScrollVelocity>
                </motion.div>
            </div>

            {/* Quick Links Section */}
            <div className="mt-10">
                <SectionHeader label="Find Me" />

                <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                        <LinkCard
                            key={link.id}
                            icon={link.icon}
                            label={link.label}
                            description={link.description}
                            url={link.url}
                            index={index}
                            delay={0.4}
                        />
                    ))}
                </div>
            </div>

            {/* Current Focus */}
            <div className="mt-10">
                <SectionHeader label="Currently" />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                            <Sparkles size={18} className="text-white/35" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[15px] font-semibold text-white/80 tracking-wide">
                                Learning & Building
                            </h3>
                            <p className="text-[13px] text-white/30 leading-relaxed mt-1">
                                Currently deepening my skills in React ecosystem and exploring mobile development with Flutter. Always open to new challenges and collaborations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <PageFooter text="Built with passion and curiosity" />
        </div>
    );
}