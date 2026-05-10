import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LightRays from "./components/LightRays";

export default function Layout() {
    return (
        <div className="relative min-h-screen px-32 py-6">
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>
            <div className="flex gap-6">
                <Sidebar />
                <main className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-white shadow-2xl">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}