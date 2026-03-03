import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "Phân Tích Thần Học Và Tâm Linh: Phương Pháp Nhận Diện Và Phân Định Kinh Nghiệm Về Thiên Chúa Trong Truyền Thống Công Giáo",
  description:
    "Nghiên cứu học thuật chuyên sâu về phương pháp phân định kinh nghiệm thần linh trong truyền thống Công giáo, bao gồm phân định thần khí của Thánh Inhã Loyola, lâu đài nội tâm của Thánh Têrêsa Avila, đêm tối linh hồn của Thánh Gioan Thánh Giá, và các quy định mới nhất của Bộ Giáo lý Đức tin năm 2024.",
  keywords: [
    "thần học",
    "tâm linh",
    "phân định thần khí",
    "kinh nghiệm Thiên Chúa",
    "Công giáo",
    "Thánh Inhã Loyola",
    "Linh Thao",
    "Thánh Têrêsa Avila",
    "Lâu Đài Nội Tâm",
    "Thánh Gioan Thánh Giá",
    "đêm tối linh hồn",
    "thần học huyền bí",
    "Lectio Divina",
    "Mẹ Têrêsa Calcutta",
    "Deus Caritas Est",
    "hoa trái Thánh Thần",
    "Bí tích Thánh Thể",
    "Bộ Giáo lý Đức tin 2024",
    "hiện tượng siêu nhiên",
    "linh đạo Kitô giáo",
    "mystical theology",
    "discernment of spirits",
  ],
  authors: [{ name: "Nghiên cứu Thần học" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Phân Tích Thần Học Và Tâm Linh: Phương Pháp Nhận Diện Và Phân Định Kinh Nghiệm Về Thiên Chúa",
    description:
      "Nghiên cứu hàn lâm phân tích 5 khung lý thuyết phân định kinh nghiệm thần linh: Linh Thao Inhã, Lâu Đài Nội Tâm, Đêm Tối Linh Hồn, ranh giới tâm lý, và Quy định Vatican 2024.",
    type: "article",
    locale: "vi_VN",
    siteName: "Nghiên Cứu Thần Học",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phân Tích Thần Học: Phân Định Kinh Nghiệm Về Thiên Chúa",
    description:
      "Phương pháp nhận diện kinh nghiệm thần linh đích thực trong truyền thống linh đạo Công giáo.",
  },
  other: {
    "article:published_time": "2025-01-01",
    "article:section": "Thần học",
    "article:tag": "Phân định thần khí, Linh Thao, Thần học huyền bí",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F9F8F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1A1814" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✝</text></svg>" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              headline: "Phân Tích Thần Học Và Tâm Linh: Phương Pháp Nhận Diện Và Phân Định Kinh Nghiệm Về Thiên Chúa Trong Truyền Thống Công Giáo",
              description: "Nghiên cứu học thuật chuyên sâu về phương pháp phân định kinh nghiệm thần linh trong truyền thống Công giáo.",
              inLanguage: "vi",
              author: {
                "@type": "Organization",
                name: "Nghiên Cứu Thần Học",
              },
              publisher: {
                "@type": "Organization",
                name: "Nghiên Cứu Thần Học",
              },
              articleSection: "Thần học Huyền bí",
              keywords: "phân định thần khí, Linh Thao, Lâu Đài Nội Tâm, đêm tối linh hồn, Lectio Divina, Deus Caritas Est",
              datePublished: "2025-01-01",
              about: [
                { "@type": "Thing", name: "Thần học Công giáo" },
                { "@type": "Thing", name: "Linh đạo Kitô giáo" },
                { "@type": "Thing", name: "Phân định thần khí" },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${sourceSerif4.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
