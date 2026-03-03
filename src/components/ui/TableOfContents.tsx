"use client";

import { useState, useEffect, useCallback } from "react";

interface TocItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsProps {
    items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((e) => e.isIntersecting);
                if (visibleEntries.length > 0) {
                    setActiveId(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "-80px 0px -60% 0px",
                threshold: 0,
            }
        );

        items.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = useCallback(
        (e: React.MouseEvent, id: string) => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                const yOffset = -100;
                const y =
                    el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setActiveId(id);
                setIsOpen(false);
            }
        },
        []
    );

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 z-50 lg:hidden w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                    backgroundColor: "var(--cardinal-accent)",
                    color: "#fff",
                }}
                aria-label="Mục lục"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="15" y2="12" />
                    <line x1="3" y1="18" x2="9" y2="18" />
                </svg>
            </button>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* TOC Panel */}
            <nav
                className={`
          fixed lg:sticky top-0 left-0 z-40
          h-screen lg:h-auto
          w-80 lg:w-64 xl:w-72
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:pt-28
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
                style={{
                    backgroundColor: "var(--bg-surface)",
                    borderRight: "1px solid var(--border)",
                }}
                aria-label="Mục lục"
            >
                <div className="p-5 lg:p-0 lg:pl-6">
                    <div className="mb-4 flex items-center justify-between lg:justify-start">
                        <h2
                            className="text-xs font-bold uppercase tracking-widest"
                            style={{ color: "var(--gold-accent)" }}
                        >
                            Mục Lục
                        </h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                            style={{
                                color: "var(--text-muted)",
                                background: "var(--bg)",
                            }}
                            aria-label="Đóng mục lục"
                        >
                            ✕
                        </button>
                    </div>

                    <ul className="space-y-1">
                        {items.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => handleClick(e, item.id)}
                                    className="block py-1.5 text-sm leading-snug transition-all duration-200 border-l-2 hover:border-l-2"
                                    style={{
                                        paddingLeft: item.level === 3 ? "1.5rem" : "0.75rem",
                                        color:
                                            activeId === item.id
                                                ? "var(--cardinal-accent)"
                                                : "var(--text-muted)",
                                        borderColor:
                                            activeId === item.id
                                                ? "var(--cardinal-accent)"
                                                : "transparent",
                                        fontWeight: activeId === item.id ? 600 : 400,
                                        fontSize: item.level === 3 ? "0.8rem" : "0.85rem",
                                    }}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
