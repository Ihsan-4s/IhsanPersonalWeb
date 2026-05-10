import { motion } from "framer-motion";
import { Award, Eye } from "lucide-react";

export default function CertificateRow({ cert, index = 0, onPreview }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            onClick={() => cert.image && onPreview?.(cert)}
            className={`group flex items-center justify-between gap-4 rounded-xl border border-white/6 bg-white/2 px-5 py-4 transition-colors duration-200 hover:border-white/10 hover:bg-white/3 ${cert.image ? "cursor-pointer" : ""}`}
        >
            <div className="flex items-center gap-3.5 min-w-0">
                <Award size={16} className="text-white/20 shrink-0" />
                <div className="min-w-0">
                    <h3 className="text-[14px] font-medium text-white/80 tracking-wide truncate">
                        {cert.title}
                    </h3>
                    <p className="text-[12px] text-white/25 mt-0.5">
                        {cert.issuer}
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
            </div>
        </motion.div>
    );
}
