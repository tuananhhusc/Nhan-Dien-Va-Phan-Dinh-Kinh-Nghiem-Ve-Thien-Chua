export default function Footer() {
    return (
        <footer
            className="mt-20 py-10"
            style={{
                borderTop: "1px solid var(--border)",
                backgroundColor: "var(--bg)",
            }}
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                <span
                    className="text-2xl select-none block mb-4"
                    style={{ color: "var(--gold-accent)" }}
                >
                    ✝
                </span>
                <p
                    className="text-sm mb-2"
                    style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--text-muted)",
                    }}
                >
                    Ad Maiorem Dei Gloriam
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Tài liệu nghiên cứu học thuật | Phân tích Thần học và Tâm linh
                </p>
                <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                >
                    © {new Date().getFullYear()} | Mọi quyền được bảo lưu
                </p>
            </div>
        </footer>
    );
}
