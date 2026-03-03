# Phân Tích Thần Học Và Tâm Linh

**Phương Pháp Nhận Diện Và Phân Định Kinh Nghiệm Về Thiên Chúa Trong Truyền Thống Công Giáo**

Dự án này là một tài liệu nghiên cứu học thuật chuyên sâu được phát triển thành một trang web tương tác hiện đại. Mục tiêu là trình bày các phương pháp hàn lâm và thần học giúp tín hữu nhận diện và phân định kinh nghiệm thần linh đích thực, phân biệt chúng với những ảo tưởng tâm lý hoặc sự phóng chiếu cái tôi.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css)

---

## 📖 Tổng Quan Nội Dung

Nghiên cứu tập trung vào 5 khung lý thuyết và ứng dụng chính:
1. **Biện chứng An ủi – Sầu khổ**: Phương pháp phân định thần khí thực nghiệm của Thánh Inhã Loyola.
2. **Lộ trình Bảy Cư Sở**: Lâu Đài Nội Tâm của Thánh Têrêsa Avila giúp cá nhân chuyển dịch từ cái tôi sang Ý Chúa.
3. **Đêm Tối Linh Hồn**: Thần học tiêu cực và tiến trình tước đoạt nội tâm theo Thánh Gioan Thánh Giá.
4. **Phân Định Lâm Sàng**: Ranh giới tâm lý giữa trải nghiệm thần linh đích thực và sự phóng chiếu tâm lý (Freud/Jung).
5. **Khung Pháp Lý 2024**: Cập nhật bộ quy chuẩn lịch sử mới nhất của Bộ Giáo lý Đức tin (Vatican) về phân định hiện tượng siêu nhiên.
6. **Thực Hành Lắng Nghe & Bác Ái**: Phương pháp *Lectio Divina*, Hoa trái Chúa Thánh Thần (Gal 5,22-23), và tấm gương phục vụ 50 năm trong đêm tối đức tin của Mẹ Têrêsa Calcutta.

---

## ✨ Tính Năng & Thiết Kế Nổi Bật

- **Bố Cục Học Thuật (Academic Layout)**: Giao diện dựa trên phong cách các tạp chí thần học với *Drop Caps* (chữ đầu dòng lớn), *Abstract Box* (hộp tóm tắt) và *Keyword Tags* (thẻ từ khóa).
- **Trích Dẫn & Nguồn APA 7th Edition**: Hệ thống chú thích (footnotes) trực tiếp trong bài, trích dẫn dạng blockquote học thuật, và danh mục Tài liệu tham khảo trình bày cực kỳ chi tiết chuẩn APA (Hanging Indent) chia theo từng nhóm (Huấn Quyền, Cổ điển, Hiện đại).
- **Tối Ưu Typography Tiếng Việt**: Sử dụng bộ phông chữ serif cao cấp:
  - **Source Serif 4**: Dành cho thân bài (body text), mang lại sự sắc nét tuyệt đối cho các dấu thanh tiếng Việt.
  - **Playfair Display**: Dành cho tiêu đề (headings), mang âm hưởng cổ điển, trang trọng.
  - **Noto Serif**: Hệ thống phông chữ dự phòng để đảm bảo 100% không lỗi glyph tiếng Việt.
- **Tối Ưu UX & Mobile**: Thiết kế đáp ứng hoàn hảo trên mọi thiết bị (Responsive). Mục lục (TOC) thông minh trượt bên trái trên Dekstop và tích hợp viền nút điều hướng trên thiết bị di động.
- **Chế Độ Giao Diện (Dark/Light Mode)**: Phối màu chuẩn hàn lâm với tông màu giấy da (Parchment), Đỏ Đức Y (Cardinal Red), và Vàng Kim (Gold Accent).
- **Tối Ưu SEO & Tốc Độ (Performance)**: Thẻ Open Graph, Twitter Cards, Schema `ScholarlyArticle` dành cho Google Scholar, cùng các thẻ tối ưu riêng cho giao diện iOS (`theme-color`).

---

## 🛠 Cấu Trúc Thư Mục

```text
app/
├── public/                 # Các tài nguyên tĩnh (svg, images)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Cấu trúc gốc, import phông chữ, SEO Metadata
│   │   ├── page.tsx        # Trang chủ với cấu trúc Layout, Hero, TOC, Content
│   │   └── globals.css     # CSS toàn cục cho các chuẩn 학 thuật (APA, Blockquote)
│   ├── components/
│   │   ├── sections/       # Từng phân đoạn bài báo cáo thần học
│   │   │   ├── Part1.tsx   # Hiện tượng học tâm linh & Thánh Inhã
│   │   │   ├── Part2.tsx   # Têrêsa Avila & Gioan Thánh Giá
│   │   │   ├── Part3.tsx   # Ranh giới tâm lý & Phân định lâm sàng
│   │   │   └── Part4.tsx   # Bia tích, Mẹ Têrêsa, Khung pháp lý & References
│   │   └── ui/             # Các thành phần tái sử dụng (Shared)
│   │       ├── ArticleSection.tsx
│   │       ├── AcademicTable.tsx
│   │       ├── TableOfContents.tsx
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── content.ts      # Dữ liệu nội dung, danh mục trích dẫn (TOC)
├── package.json
└── tailwind.config.ts / postcss.config.mjs
```

---

## 🚀 Hướng Dẫn Cài Đặt và Chạy Dự Án

Dự án yêu cầu **Node.js 18.18.0** trở lên.

1. **Sao chép (Clone) hoặc Tải mã nguồn về máy tính:**

2. **Di chuyển vào thư mục dự án:**
   ```bash
   cd Kinhnghiem/app
   ```

3. **Cài đặt các gói thư viện (Dependencies):**
   ```bash
   npm install
   ```

4. **Chạy máy chủ phát triển (Development Server):**
   ```bash
   npm run dev
   ```

5. **Mở trình duyệt:**
   Truy cập `http://localhost:3000` để xem trực tiếp dự án.

---

## 📦 Xuất Bản Thực Tế (Deployment)

Dự án này là hoàn toàn tĩnh (Static Site) và được cấu hình sẵn để triển khai dễ dàng thông qua GitHub Pages hoặc Vercel.

**Để xây dựng kịch bản tĩnh (Static Export):**

Bạn cần đảm bảo thiết lập `output: 'export'` trong `next.config.mjs`.

```bash
npm run build
```

Sau câu lệnh trên, thư mục `out/` sẽ được sinh ra ở gốc dự án, bao gồm toàn bộ file HTML, CSS và JS đã dịch, sẵn sàng để ném lên bất cứ máy chủ lưu trữ (hosting) tĩnh nào.

---

> Ad Maiorem Dei Gloriam (Cho vinh danh Thiên Chúa hơn)
> © 2026 Nghiên cứu Thần học và Tâm linh. Mọi quyền được bảo lưu.
