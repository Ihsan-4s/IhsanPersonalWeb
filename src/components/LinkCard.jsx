import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function LinkCard({ icon: Icon, label, handle, description, url, index = 0, delay = 0 }) {
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
