"use client";

import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "py-2 shadow-md backdrop-blur-md"
                    : "py-4"
                }`}
            style={{
                backgroundColor: scrolled
                    ? "color-mix(in srgb, var(--bg) 85%, transparent)"
                    : "transparent",
            }}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
                {/* Cross Icon + Title */}
                <div className="flex items-center gap-3">
                    <span
                        className="text-xl select-none"
                        style={{ color: "var(--gold-accent)" }}
                    >
                        ✝
                    </span>
                    <span
                        className="hidden sm:inline-block text-sm font-semibold tracking-wide uppercase"
                        style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--text-secondary)",
                            letterSpacing: "0.08em",
                        }}
                    >
                        Nghiên Cứu Thần Học
                    </span>
                </div>

                <DarkModeToggle />
            </div>
        </header>
    );
}
