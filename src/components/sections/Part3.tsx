import ArticleSection from "@/components/ui/ArticleSection";
import AcademicTable from "@/components/ui/AcademicTable";

export function SectionRanhGioi() {
    return (
        <ArticleSection
            id="ranh-gioi-tam-ly"
            title="Ranh Giới Tâm Lý: Sự Khác Biệt Giữa Kinh Nghiệm Thần Linh Và Các Trạng Thái Phóng Chiếu"
            dropCap={true}
            paragraphs={[
                <p key="1">Một trong những thách thức lớn nhất trong thần học và mục vụ hiện đại là việc giải mã ranh giới mong manh giữa kinh nghiệm thiêng liêng chân chính và các hiện tượng thuần túy tâm lý, đặc biệt là sự nhầm lẫn giữa ảo tưởng phóng chiếu của cái tôi cá nhân, hoặc nghiêm trọng hơn, là các bệnh lý tâm thần như trầm cảm lâm sàng.</p>,
            ]}
        />
    );
}

export function SectionPhongChieu() {
    return (
        <ArticleSection
            id="phong-chieu-cai-toi"
            title="Phân Biệt Gặp Gỡ Thiên Chúa Và Sự Phóng Chiếu Cái Tôi Tâm Lý"
            level={3}
            dropCap={true}
            paragraphs={[
                <p key="1">Con người rất dễ dàng phóng chiếu những ước vọng, nỗi sợ hãi, hoặc ham muốn quyền lực của mình lên hình ảnh một &quot;Thiên Chúa&quot; do họ tự nhào nặn ra.<sup className="footnote-ref">9</sup> Linh mục Anselm Grün, thông qua việc phân tích bài học của ngôn sứ Êlia tại núi Horeb (1 V 19, 11-13), đã cung cấp một lăng kính phân định sắc bén:</p>,
                <p key="2"><strong>Cơn bão (Cảm xúc cuồng nhiệt):</strong> Thiên Chúa không ở trong cơn bão. Cơn bão tượng trưng cho cảm xúc cuồng nhiệt bùng phát. Nếu một người coi sự hưng phấn này là trải nghiệm về Chúa, họ đang dùng Chúa như một liều &quot;thuốc phiện tôn giáo&quot;.<sup className="footnote-ref">9</sup></p>,
                <p key="3"><strong>Động đất (Quyền lực và uy tín):</strong> Thiên Chúa không ở trong trận động đất. Có những cá nhân dùng danh Chúa để lôi kéo người khác, tạo dựng uy tín và quyền lực cá nhân. Thực chất, họ chỉ đang tìm kiếm sự công nhận cho cái tôi.<sup className="footnote-ref">9</sup></p>,
                <p key="4"><strong>Ngọn lửa (Cuồng tín và hung hăng):</strong> Thiên Chúa không ở trong lửa. Một cá nhân nhân danh lòng nhiệt thành tôn giáo để triệt hạ, lên án người khác thực chất đang hành động theo bản năng hung hăng cá nhân.<sup className="footnote-ref">9</sup></p>,
                <p key="5">Thiên Chúa đích thực chỉ hiện diện trong &quot;tiếng động nhẹ của làn gió hiu hiu\u0026quot;, một sự thinh lặng thẳm sâu, nơi con người ngừng phán xét và ý thức được sự bất toàn của chính mình. Người có kinh nghiệm thực sự sẽ nhận biết &quot;cái tôi đích thực&quot;, thoát khỏi nhu cầu biện minh cho bản thân và thường chọn thái độ sống ẩn giấu, khiêm tốn.<sup className="footnote-ref">9</sup></p>,
            ]}
        />
    );
}

export function SectionPhanDinhLamSang() {
    return (
        <>
            <ArticleSection
                id="phan-dinh-lam-sang"
                title="Sự Phân Định Lâm Sàng: Đêm Tối Linh Hồn Đối Lập Với Bệnh Trầm Cảm"
                level={3}
                dropCap={true}
                paragraphs={[
                    <p key="1">Trải nghiệm &quot;đêm tối linh hồn&quot; thường bị đánh đồng nông cạn với hội chứng trầm cảm lâm sàng. Tuy nhiên, về mặt bản thể học, hai trạng thái này đối lập nhau sâu sắc.<sup className="footnote-ref">31</sup></p>,
                    <p key="2">Hội chứng trầm cảm là một căn bệnh bệnh lý làm tê liệt khả năng tư duy và cảm nhận ý nghĩa cuộc sống.<sup className="footnote-ref">37</sup> Ngược lại, &quot;đêm tối thiêng liêng&quot; là một trải nghiệm đau khổ bắt nguồn từ tình yêu và sự tiệm cận với Đấng Tuyệt Đối. Tâm hồn vẫn duy trì một ngọn lửa đức tin le lói nhưng kiên cường.<sup className="footnote-ref">32</sup></p>,
                ]}
            />
            <AcademicTable
                caption="Bảng 3. So Sánh Trầm Cảm Lâm Sàng Và Đêm Tối Linh Hồn"
                headers={["Tiêu Chí So Sánh", "Bệnh Trầm Cảm Lâm Sàng", "Đêm Tối Linh Hồn"]}
                rows={[
                    ["Bản chất", "Rối loạn tâm lý - tâm thần bệnh lý (theo DSM).", "Sự thanh luyện thiêng liêng do ân sủng chủ động thực hiện."],
                    ["Nguyên nhân cốt lõi", "Tổn thương tâm lý, mất cân bằng hóa học não bộ.", "Sự hiện diện quá mãnh liệt của Thiên Chúa vượt quá sức chứa linh hồn."],
                    ["Thái độ với Thiên Chúa", "Cảm giác bị bỏ rơi, nghi ngờ, phủ nhận đức tin.", "Đau khổ vì cảm thấy bất xứng; khát khao Chúa mãnh liệt hơn."],
                    ["Hệ quả sau trải nghiệm", "Trở lại trạng thái bình thường, ít thay đổi sâu sắc.", "Biến đổi hữu thể học: tình yêu vị tha nở rộ, bình an siêu việt."],
                ]}
            />
            <div className="mb-5 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-primary)", textAlign: "justify" }}>
                <p>Việc nhầm lẫn giữa hai trạng thái này vô cùng nguy hiểm. Một nhà linh hướng thiếu kinh nghiệm có thể khuyên người đang trải qua Đêm Tối tìm đến thuốc an thần, hoặc ngược lại, bắt một bệnh nhân trầm cảm nặng phải cầu nguyện thay vì tìm kiếm sự trợ giúp y khoa cần thiết.</p>
            </div>
        </>
    );
}
