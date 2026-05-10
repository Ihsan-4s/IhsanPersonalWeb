import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CalendarCheck, Copy, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import LinkCard from "../components/LinkCard";
import PageFooter from "../components/PageFooter";

const socials = [
    {
        id: "github",
        label: "GitHub",
        handle: "@Ihsan-4s",
        url: "https://github.com/Ihsan-4s",
        icon: FaGithub,
        description: "Check out my repositories and open-source work.",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        handle: "Ihsan Maulana Rizky",
        url: "https://www.linkedin.com/in/ihsan-maulana-rizky-895509330/",
        icon: FaLinkedinIn,
        description: "Let's connect professionally.",
    },
    {
        id: "instagram",
        label: "Instagram",
        handle: "@isannyvl",
        url: "https://www.instagram.com/isannyvl/",
        icon: FaInstagram,
        description: "A glimpse into my daily life and creative side.",
    },
];

export default function Contact() {
    return (
        <div>
            <h1 className="text-4xl">Contact</h1>
            <p className="mt-4 text-zinc-400">
                Got a question or want to <span className="text-white">work together</span>?
            </p>
            <p className="text-zinc-400">
                Feel free to reach out — I'd love to <span className="underline">hear from you</span>.
            </p>
            <div className="mt-10 space-y-8">
                <div>
                    <SectionHeader label="Email" />
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                                <Mail size={16} className="text-white/40" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[14px] text-white/70 font-medium truncate">Ihsanmaulana86821@gmail.com</p>
                                <p className="text-[11px] text-white/25 mt-0.5">Preferred method of contact</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <a href={`mailto:Ihsanmaulana86821@gmail.com`} className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-medium rounded-lg border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-200 hover:border-white/20 hover:text-white/70 hover:bg-white/[0.05]" >
                                <ArrowUpRight size={13} /> Send
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <SectionHeader label="Socials" />
                    <div className="space-y-3">
                        {socials.map((social, index) => (
                            <LinkCard
                                key={social.id}
                                icon={social.icon}
                                label={social.label}
                                handle={social.handle}
                                description={social.description}
                                url={social.url}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <PageFooter text="I usually respond within 24 hours" />
        </div>
    );
}