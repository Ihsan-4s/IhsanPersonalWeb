import {
    motion,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";

export default function ScrollVelocity({
    children,
    speed = 40,
    direction = "left",
}) {
    const x = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        const moveBy = (speed * delta) / 1000;

        if (direction === "left") {
            x.set(x.get() - moveBy);

            if (x.get() <= -1000) {
                x.set(0);
            }
        }

        if (direction === "right") {
            x.set(x.get() + moveBy);

            if (x.get() >= 0) {
                x.set(-1000);
            }
        }
    });

    return (
        <div className="relative w-full overflow-hidden">
            {/* fade kiri */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            {/* fade kanan */}
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-black to-transparent" />
            <motion.div
                style={{ x }}
                className="absolute left-0 top-0 flex items-center gap-4 whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-1">
                        {children}
                    </div>
                ))}
            </motion.div>

            {/* spacer */}
            <div className="h-[60px]" />
        </div>
    );
}