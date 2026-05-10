import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function LightboxModal({ selected, onClose }) {
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

    if (!selected) return null;

    return createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
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
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="max-w-full max-h-[70vh] rounded-lg object-contain border border-white/[0.06]"
                        />
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
        </AnimatePresence>,
        document.body
    );
}