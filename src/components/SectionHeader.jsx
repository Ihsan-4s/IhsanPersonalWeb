export default function SectionHeader({ label }) {
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
