import { tocItems } from "@/lib/content";
import TableOfContents from "@/components/ui/TableOfContents";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { SectionDanNhap, SectionNenTang, SectionNguonGoc, SectionBienChung, SectionNamChiaKhoa } from "@/components/sections/Part1";
import { SectionTienTrinh, SectionLauDai, SectionDemToi } from "@/components/sections/Part2";
import { SectionRanhGioi, SectionPhongChieu, SectionPhanDinhLamSang } from "@/components/sections/Part3";
import { SectionDauChi, SectionLectio, SectionHoaTrai, SectionBacAi, SectionKhungPhapLy, SectionTongKet, SectionReferences } from "@/components/sections/Part4";

export default function Home() {
  return (
    <>
      <ScrollToTop />

      {/* Hero Section */}
      <div
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 text-center px-4"
        style={{
          background: "linear-gradient(180deg, color-mix(in srgb, var(--gold-accent) 6%, var(--bg)), var(--bg))",
        }}
      >
        <span
          className="text-4xl sm:text-5xl block mb-6 select-none"
          style={{ color: "var(--gold-accent)" }}
        >
          ✝
        </span>
        <h1
          className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--cardinal-accent)",
          }}
        >
          Phân Tích Thần Học Và Tâm Linh
        </h1>
        <p
          className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-secondary)",
          }}
        >
          Phương Pháp Nhận Diện Và Phân Định Kinh Nghiệm Về Thiên Chúa
          Trong Truyền Thống Công Giáo
        </p>
        <div
          className="mx-auto mt-8 w-24 h-px"
          style={{ background: "var(--gold-accent)" }}
        />

        {/* Abstract */}
        <div className="abstract-box mx-auto max-w-3xl mt-10 text-left">
          <h3>Tóm Tắt (Abstract)</h3>
          <p>
            Nghiên cứu này phân tích một cách hệ thống các phương pháp nhận diện và phân định kinh nghiệm về Thiên Chúa
            trong truyền thống linh đạo và thần học Công giáo. Bài viết khảo sát năm khung lý thuyết chính:
            (1) phương pháp phân định thần khí thực nghiệm của Thánh Inhã Loyola thông qua biện chứng an ủi/sầu khổ;
            (2) lộ trình bảy cư sở trong Lâu Đài Nội Tâm của Thánh Têrêsa Avila;
            (3) tiến trình thanh luyện &quot;đêm tối linh hồn&quot; theo thần học tiêu cực của Thánh Gioan Thánh Giá;
            (4) ranh giới tâm lý giữa kinh nghiệm thần linh đích thực và sự phóng chiếu cái tôi;
            (5) khung pháp lý mới của Bộ Giáo lý Đức tin (2024) với sáu kết luận phân định hiện tượng siêu nhiên.
            Nghiên cứu kết luận rằng kinh nghiệm Thiên Chúa chân thật phải đáp ứng ba tiêu chuẩn: sự thanh luyện liên lỉ,
            hoa trái khách quan của Chúa Thánh Thần (Gl 5,22-23), và sự vâng phục Huấn Quyền Giáo hội.
          </p>
        </div>

        {/* Keywords */}
        <div className="mx-auto max-w-3xl mt-4 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest mr-2" style={{ color: "var(--text-muted)" }}>
            Từ khóa:
          </span>
          {["Phân định thần khí", "Linh Thao Inhã", "Lâu Đài Nội Tâm", "Đêm tối linh hồn", "Thần học huyền bí", "Lectio Divina", "Hoa trái Thánh Thần", "Deus Caritas Est", "Quy định 2024"].map((kw) => (
            <span key={kw} className="keyword-tag">{kw}</span>
          ))}
        </div>
      </div>

      {/* Main Layout: TOC + Article */}
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row">
        {/* Sticky TOC Sidebar — Left */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
          <TableOfContents items={tocItems} />
        </aside>

        {/* Article Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 mx-auto max-w-3xl">
          <SectionDanNhap />
          <SectionNenTang />
          <SectionNguonGoc />
          <SectionBienChung />
          <SectionNamChiaKhoa />
          <SectionTienTrinh />
          <SectionLauDai />
          <SectionDemToi />
          <SectionRanhGioi />
          <SectionPhongChieu />
          <SectionPhanDinhLamSang />
          <SectionDauChi />
          <SectionLectio />
          <SectionHoaTrai />
          <SectionBacAi />
          <SectionKhungPhapLy />
          <SectionTongKet />
          <SectionReferences />
        </main>

        {/* Mobile TOC (floating button) */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>
      </div>
    </>
  );
}
