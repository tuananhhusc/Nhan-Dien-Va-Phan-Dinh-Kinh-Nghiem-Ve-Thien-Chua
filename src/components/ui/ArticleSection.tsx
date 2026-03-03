import React from "react";

interface ArticleSectionProps {
    id: string;
    title: string;
    level?: 2 | 3;
    paragraphs: React.ReactNode[];
    dropCap?: boolean;
}

export default function ArticleSection({
    id,
    title,
    level = 2,
    paragraphs,
    dropCap = false,
}: ArticleSectionProps) {
    const HeadingTag = level === 2 ? "h2" : "h3";

    return (
        <section id={id} className="mb-10 animate-fade-in-up">
            <HeadingTag
                className={`font-bold mb-5 ${level === 2
                        ? "text-2xl sm:text-3xl mt-12"
                        : "text-xl sm:text-2xl mt-8"
                    }`}
                style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--cardinal-accent)",
                }}
            >
                {title}
            </HeadingTag>

            <hr className="gold-divider" />

            {paragraphs.map((para, i) => (
                <div
                    key={i}
                    className={`mb-5 text-base sm:text-lg leading-relaxed ${dropCap && i === 0 ? "drop-cap" : ""
                        }`}
                    style={{
                        color: "var(--text-primary)",
                        textAlign: "justify",
                        hyphens: "auto",
                    }}
                >
                    {para}
                </div>
            ))}
        </section>
    );
}
