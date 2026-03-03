import ArticleSection from "@/components/ui/ArticleSection";
import AcademicTable from "@/components/ui/AcademicTable";
import { references } from "@/lib/content";

export function SectionDauChi() {
    return (
        <ArticleSection
            id="dau-chi-khach-quan"
            title="Những Dấu Chỉ Khách Quan Nhận Diện Sự Hiện Diện Của Thiên Chúa"
            dropCap={true}
            paragraphs={[
                <p key="1">Để tránh rơi vào chủ nghĩa chủ quan, Giáo hội Công giáo luôn đặt kinh nghiệm cá nhân dưới ánh sáng của Mặc khải khách quan. Tất cả phải quy chiếu về chuẩn mực cốt lõi: Thiên Chúa duy nhất đang sống động trong Kinh Thánh, được hiện tại hóa qua các Bí tích, và biểu lộ qua Đức ái.<sup className="footnote-ref">5</sup></p>,
            ]}
        />
    );
}

export function SectionLectio() {
    return (
        <ArticleSection
            id="lectio-divina"
            title="Lắng Nghe Tiếng Chúa Qua Tiến Trình Lectio Divina"
            level={3}
            dropCap={true}
            paragraphs={[
                <p key="1">Kinh nghiệm gặp gỡ Thiên Chúa thường được khởi phát qua việc tiếp xúc trực tiếp với Lời Chúa. Truyền thống Đan tu đã phát triển phương pháp &quot;Lectio Divina&quot;. Đây không phải là kỹ năng phân tích văn bản Kinh Thánh thuần túy, mà là một con đường gặp gỡ sống động.<sup className="footnote-ref">41</sup></p>,
                <p key="2"><strong>Lectio (Đọc):</strong> Đọc to tiếng, chậm rãi bản văn Kinh Thánh nhiều lần, không phải để thu thập thông tin, mà để Lời vang dội trong toàn bộ hữu thể.<sup className="footnote-ref">41</sup></p>,
                <p key="3"><strong>Meditatio (Suy niệm):</strong> Nhai lại Lời Chúa, suy gẫm ý nghĩa của văn bản và áp dụng vào hoàn cảnh sống hiện tại.<sup className="footnote-ref">41</sup></p>,
                <p key="4"><strong>Oratio (Cầu nguyện):</strong> Lời đáp trả từ sâu thẳm trái tim trước những gì Thiên Chúa đã phán dạy.<sup className="footnote-ref">41</sup></p>,
                <p key="5"><strong>Contemplatio (Chiêm niệm):</strong> Đỉnh cao, nơi lời nói và suy nghĩ nhường chỗ cho sự thinh lặng. Tâm hồn nghỉ ngơi trong sự hiện diện của Chúa.<sup className="footnote-ref">41</sup></p>,
                <p key="6">Đức Giáo Hoàng Bênêđictô XVI khẳng định rằng, Lectio Divina có khả năng mở các kho tàng Lời Thiên Chúa, tạo ra cuộc gặp gỡ mang tính hữu thể với Chúa Kitô, Lời hằng sống.<sup className="footnote-ref">45</sup></p>,
            ]}
        />
    );
}

export function SectionHoaTrai() {
    return (
        <ArticleSection
            id="hoa-trai-thanh-than"
            title="Trổ Sinh Hoa Trái Của Chúa Thánh Thần Và Sức Mạnh Từ Bí Tích Thánh Thể"
            level={3}
            dropCap={true}
            paragraphs={[
                <p key="1">Chúa Giêsu đã đưa ra tiêu chuẩn thực nghiệm: &quot;Cứ xem họ sinh hoa trái nào, thì biết họ là ai&quot; (Mt 7,16). Dấu chỉ khách quan của một người đang sống trong kinh nghiệm về Thiên Chúa là sự trổ sinh hoa trái của Thần Khí: bác ái, hoan lạc, bình an, nhẫn nhục, nhân hậu, từ tâm, trung tín, hiền hòa, và tiết độ.<sup className="footnote-ref">46</sup></p>,
                <p key="2"><strong>Với Thiên Chúa:</strong> Bác ái, bình an, hoan lạc, trung tín. Giúp con người làm mọi việc vì lòng mến Chúa.<sup className="footnote-ref">47</sup></p>,
                <p key="3"><strong>Với tha nhân:</strong> Nhân từ, từ tâm, khoan dung. Cư xử hòa nhã, quảng đại và công chính.<sup className="footnote-ref">47</sup></p>,
                <p key="4"><strong>Với bản thân:</strong> Khiêm nhu, tiết độ, khiết tịnh. Giúp làm chủ đam mê, chịu đựng nghịch cảnh.<sup className="footnote-ref">47</sup></p>,
                <p key="5">Sức mạnh siêu nhiên để trổ sinh những hoa trái này bắt nguồn từ việc ở lại trong Chúa Kitô qua Bí tích Thánh Thể. Tựa như cành nho gắn liền với cây nho (Ga 15,1-8), người Kitô hữu nhận lãnh sự sống thần linh khi tham dự Thánh Lễ.<sup className="footnote-ref">51</sup></p>,
            ]}
        />
    );
}

export function SectionBacAi() {
    return (
        <ArticleSection
            id="bac-ai"
            title="Kinh Nghiệm Thiên Chúa Qua Chiều Kích Bác Ái: Thông Điệp Deus Caritas Est Và Mẹ Têrêsa"
            level={3}
            dropCap={true}
            paragraphs={[
                <p key="1">Kinh nghiệm gặp gỡ Thiên Chúa trong Công giáo không bao giờ là một cuộc trốn chạy vào cõi trừu tượng. Trong Thông điệp <em>Deus Caritas Est</em> (2005), Đức Giáo Hoàng Bênêđictô XVI đã liên kết bản thể của Thiên Chúa với tình yêu hiến dâng: sự tổng hòa giữa <em>Agape</em> (tình yêu vô vị lợi, hiến dâng đến cùng) và <em>Logos</em> (Lý trí, Lời, Chân lý).<sup className="footnote-ref">54</sup> Thánh Gioan Tông đồ đã tóm lược toàn bộ nhiệm cục cứu độ: &quot;Thiên Chúa là tình yêu&quot; (1 Ga 4,8).<sup className="footnote-ref">55</sup> Do đó, một người không thể tuyên bố mình đang kinh nghiệm Thiên Chúa vô hình nếu họ từ chối yêu thương người anh em hữu hình đang đau khổ bên cạnh mình.</p>,
                <p key="2">Thánh Têrêsa Calcutta (Mẹ Têrêsa, 1910-1997) là hiện thân chói lọi nhất trong thời hiện đại về việc kinh nghiệm Thiên Chúa qua sự phục vụ tận tụy. Kinh nghiệm thần linh của Mẹ không phải là sự thoát tục, mà là một &quot;tiếng gọi bên trong một tiếng gọi&quot; nhận được trên chuyến xe lửa đi Darjeeling năm 1946, thúc bách Mẹ phục vụ Chúa Giêsu trong hình hài đau khổ của những người nghèo nhất trong các người nghèo.<sup className="footnote-ref">58</sup></p>,
                <div key="3">
                    <blockquote className="academic-quote">
                        &quot;Bóng tối thật dày đặc đến nỗi con thực sự không thấy... không bằng trí óc, không bằng lý trí... chỗ của Thiên Chúa trong linh hồn con là trống rỗng... Không có Chúa trong con... khi nỗi đau khát khao lớn đến thế... con chỉ khao khát và khao khát Thiên Chúa... Sự giày vò và đau đớn con không thể giải thích.&quot;
                        <span className="quote-source">Mẹ Têrêsa, thư riêng khoảng năm 1961 (Kolodiejchuk, 2007)</span>
                    </blockquote>
                </div>,
                <p key="4">Cuốn sách <em>Mother Teresa: Come Be My Light</em> (2007), biên soạn bởi Cha Brian Kolodiejchuk từ hơn 6.000 bức thư riêng tư, đã tiết lộ rằng Mẹ Têrêsa trải qua &quot;đêm tối linh hồn&quot; kéo dài suốt gần 50 năm (1946-1997). Mặc dù chìm trong bóng tối thiêng liêng sâu thẳm, Mẹ vẫn sáng lập Dòng Thừa Sai Bác Ái, phát triển đến hơn 133 quốc gia với khoảng 4.500 nữ tu. Sự phục vụ của Mẹ đã vượt qua mọi ranh giới tôn giáo và chính trị, mang lại giải Nobel Hòa bình năm 1979.<sup className="footnote-ref">63</sup></p>,
                <p key="5">Mẹ Têrêsa thấu hiểu sâu sắc rằng những công tác xã hội thuần túy không thể thay thế cho kinh nghiệm chiêm niệm. Mẹ từng răn dạy các nữ tu: <em>&quot;Nếu không có Thiên Chúa hỗ trợ, chúng ta quả thật quá nghèo nàn để có thể giúp đỡ người nghèo... Chính trong khi cầu nguyện mà Thiên Chúa đặt Tình Yêu Ngài vào lòng mẹ và từ đó, mẹ có thể trao ban lại cho người khác&quot;</em>.<sup className="footnote-ref">60</sup> Kinh nghiệm của Mẹ minh chứng hùng hồn rằng sự kết hợp thiêng liêng tột bậc với Chúa luôn trổ sinh thành hoa trái công lý, sự sống và hòa bình cho toàn thể xã hội nhân loại.</p>,
            ]}
        />
    );
}

export function SectionKhungPhapLy() {
    return (
        <>
            <ArticleSection
                id="khung-phap-ly"
                title="Khung Pháp Lý Của Giáo Hội: Phân Định Các Hiện Tượng Siêu Nhiên"
                dropCap={true}
                paragraphs={[
                    <p key="1">Giáo lý khẳng định rằng Chúa Giêsu Kitô là Lời cuối cùng và sự viên mãn của Mặc khải công khai. Mọi điều Thiên Chúa muốn mặc khải đều đã được hoàn tất nơi Ngôi Lời nhập thể.<sup className="footnote-ref">64</sup> Trong suốt lịch sử, Giáo hội ghi nhận hàng trăm báo cáo về các hiện tượng siêu nhiên, nhưng chỉ có khoảng 16 cuộc hiện ra của Đức Mẹ được chính thức phê chuẩn bởi Vatican, bao gồm Đức Mẹ Guadalupe (1531), Đức Mẹ Lộ Đức (1858), và Đức Mẹ Fatima (1917).</p>,
                    <p key="2">Vào ngày 17 tháng 5 năm 2024, Bộ Giáo lý Đức tin (do Hồng y Víctor Manuel Fernández đứng đầu), dưới sự phê chuẩn của Đức Giáo hoàng Phanxicô, đã ban hành bộ quy chuẩn lịch sử &quot;Các Quy Định Để Tiến Hành Trong Việc Phân Định Về Các Điều Được Cho Là Hiện Tượng Siêu Nhiên&quot;, thay thế hoàn toàn các quy định từ năm 1978 và có hiệu lực từ ngày 19 tháng 5 năm 2024 (Lễ Hiện Xuống).<sup className="footnote-ref">64</sup> Trong vòng ba tháng đầu tiên kể từ khi ban hành, Bộ đã đưa ra 7 phán quyết: 4 phê chuẩn việc sùng kính và 3 bác bỏ tính siêu nhiên.</p>,
                ]}
            />
            <AcademicTable
                caption="Bảng 4. Sáu Kết Luận Phân Định Theo Quy Định 2024 (Bộ Giáo lý Đức tin)"
                headers={["Kết Luận Phân Định", "Đặc Điểm Và Đánh Giá", "Định Hướng Mục Vụ"]}
                rows={[
                    ["1. Nihil obstat", "Nhiều dấu hiệu tích cực về hoạt động của Chúa Thánh Thần. Thông điệp không chứa lỗi tín lý hay luân lý.", "Giám mục được khuyến khích lượng giá giá trị mục vụ, có thể tổ chức hành hương và cổ vũ việc sùng kính."],
                    ["2. Prae oculis habeatur", "Có các dấu hiệu tích cực nhưng tồn tại một số khía cạnh nhầm lẫn, rủi ro về mặt thông điệp hoặc thần học.", "Đòi hỏi sự đối thoại cẩn thận với người liên quan, làm rõ và sửa chữa các sai lệch tín lý."],
                    ["3. Curatur", "Hiện tượng đã lan truyền rộng và có hoa trái thiêng liêng, nhưng bản thân hiện tượng có yếu tố sai lệch.", "Không áp dụng lệnh cấm, nhưng Giám mục không khuyến khích, phải tìm cách định hướng lại."],
                    ["4. Sub mandato", "Tồn tại những rủi ro nghiêm trọng liên quan đến đạo đức, lợi ích cá nhân của người/nhóm tự xưng là thị nhân.", "Tòa Thánh ủy thác việc can thiệp trực tiếp để loại bỏ các ảnh hưởng tiêu cực."],
                    ["5. Prohibetur et obstruatur", "Nguy cơ cực kỳ nghiêm trọng về đức tin và đạo đức. Hiện tượng gây chia rẽ, cuồng tín, hoặc trục lợi rõ rệt.", "Ban hành lệnh cấm công khai, ngăn chặn mọi biểu hiện tụ tập sùng kính."],
                    ["6. Declaratio de non supernaturalitate", "Có bằng chứng rõ ràng về sự giả tạo, hoang đường, hoặc ảo giác tâm lý/tâm thần.", "Bộ ủy quyền cho Giám mục tuyên bố công khai hiện tượng hoàn toàn không đến từ Thiên Chúa."],
                ]}
            />
        </>
    );
}

export function SectionTongKet() {
    return (
        <ArticleSection
            id="tong-ket"
            title="Tổng Kết Luận"
            dropCap={true}
            paragraphs={[
                <p key="1">Kinh nghiệm về Thiên Chúa trong truyền thống Công giáo là một hiện thực vô cùng phong phú, nhiệm mầu, lồng ghép tinh tế giữa sự tác động của ân sủng siêu nhiên vô điều kiện và sự phản hồi tự do của ý chí con người. Để nhận biết mình đang thực sự kinh nghiệm về Thiên Chúa, một tín hữu không bao giờ được phép chỉ dựa vào cảm xúc chủ quan, bởi lẽ cảm xúc tôn giáo rất dễ trở thành tấm gương phản chiếu những khao khát vị kỷ, những ảo tưởng quyền lực hay những xáo trộn tâm lý tự nhiên.</p>,
                <p key="2"><strong>Thứ nhất,</strong> nó đòi hỏi một sự thanh luyện liên lỉ và đau đớn. Từ quy tắc phân định an ủi và sầu khổ của Thánh Inhã Loyola, đến những đêm tối tước đoạt mọi điểm tựa của Thánh Gioan Thánh Giá, Thiên Chúa đập vỡ những ngẫu tượng do con người tự tạo ra để mạc khải chính Ngài là Đấng hoàn toàn Khác, Đấng chỉ có thể tiếp cận bằng một đức tin tinh tuyền và lòng khiêm nhượng thẳm sâu.</p>,
                <p key="3"><strong>Thứ hai,</strong> kinh nghiệm này phải biểu lộ tính khách quan thông qua sự biến đổi hữu thể học và hoa trái của Chúa Thánh Thần. Một người thực sự gặp Chúa sẽ chuyển dịch từ sự tập trung vào bản thân sang việc ý thức Thánh ý Thiên Chúa (như hành trình qua bảy cư sở của Thánh Têrêsa Avila). Họ sẽ trổ sinh những nhân đức Kitô giáo vững chắc, đặc biệt là tình yêu vô vị lợi <em>(Agape)</em> đối với tha nhân, nhất là những người bần cùng nhất như mẫu gương của Mẹ Têrêsa Calcutta.</p>,
                <p key="4"><strong>Cuối cùng,</strong> sự hướng dẫn của Giáo hội, thông qua tiến trình lắng nghe Lời Chúa (Lectio Divina), sự đồng hành của vị linh hướng, và các quy định giáo luật nghiêm ngặt về phân định hiện tượng siêu nhiên, đóng vai trò như ngọn hải đăng vững chắc bảo vệ cá nhân khỏi những ảo tưởng của ma quỷ và sự lệch lạc của tâm lý học. Nhận biết Thiên Chúa, do đó, là một hành trình tự hủy <em>(kenosis)</em> liên lỉ, để tình yêu và chân lý của Ngài chiếm trọn bản thể, biến đổi toàn diện cuộc đời lữ hành trên trần thế thành một sự nếm hưởng trước vinh quang Nước Trời vĩnh cửu.</p>,
            ]}
        />
    );
}

export function SectionReferences() {
    return (
        <section id="nguon-trich-dan" className="mt-16 animate-fade-in-up">
            <h2
                className="text-2xl sm:text-3xl font-bold mb-5"
                style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--cardinal-accent)",
                }}
            >
                Tài Liệu Tham Khảo
            </h2>
            <hr className="gold-divider" />
            <p className="text-xs mb-6 italic" style={{ color: "var(--text-muted)" }}>
                Trình bày theo chuẩn APA 7th Edition (American Psychological Association, 2020).
            </p>
            <ul className="apa-reference-list">
                {/* Primary Sources - Magisterium & Church Documents */}
                <li>Giáo hội Công giáo. (2000). <span className="ref-title">Sách Giáo lý của Hội Thánh Công giáo</span> (bản dịch tiếng Việt). Nhà xuất bản Tôn Giáo. (Nguyên bản Latinh xuất bản 1997)</li>
                <li>Bênêđictô XVI. (2005, 25 tháng 12). <span className="ref-title">Deus Caritas Est</span> [Thông điệp]. Vatican. <a href="https://www.vatican.va/content/benedict-xvi/vi/encyclicals/documents/hf_ben-xvi_enc_20051225_deus-caritas-est.html" target="_blank" rel="noopener noreferrer" className="ref-url">https://www.vatican.va/content/benedict-xvi/vi/encyclicals/</a></li>
                <li>Bộ Giáo lý Đức tin. (2024, 17 tháng 5). <span className="ref-title">Các Quy Định Để Tiến Hành Trong Việc Phân Định Về Các Điều Được Cho Là Hiện Tượng Siêu Nhiên</span>. Vatican. <a href="https://vietcatholic.net/News/Home/Article/290036" target="_blank" rel="noopener noreferrer" className="ref-url">https://vietcatholic.net/News/Home/Article/290036</a></li>
                <li>Phanxicô. (2018, 19 tháng 3). <span className="ref-title">Gaudete et Exsultate: Về ơn gọi nên thánh trong thế giới ngày nay</span> [Tông huấn]. Vatican.</li>

                {/* Classical Spiritual Sources */}
                <li>Inhã Loyola. (1548/1964). <span className="ref-title">The Spiritual Exercises of St. Ignatius</span> (A. Mottola, Dịch.). Image Books. (Nguyên bản xuất bản 1548)</li>
                <li>Têrêsa Avila. (1577/2007). <span className="ref-title">Lâu Đài Nội Tâm</span> (bản dịch tiếng Việt). Trong <span className="ref-title">Toàn tập Thánh Têrêsa Giêsu</span>. Dòng Cát Minh Việt Nam.</li>
                <li>Gioan Thánh Giá. (1585/2010). <span className="ref-title">Đêm Tối</span> (bản dịch tiếng Việt). Dòng Cát Minh Việt Nam. (Nguyên bản Tây Ban Nha viết khoảng 1578-1585)</li>
                <li>Kolodiejchuk, B. (Biên tập). (2007). <span className="ref-title">Mother Teresa: Come Be My Light: The Private Writings of the Saint of Calcutta</span>. Doubleday.</li>

                {/* Secondary Sources - Vietnamese */}
                <li>Hội đồng Giám mục Việt Nam. (n.d.). ĐỨC GIÊ-SU KI-TÔ - Đường nhận biết Thiên Chúa. <a href="https://hdgmvietnam.com/chi-tiet/duc-gie-su-ki-to---duong-nhan-biet-thien-chua" target="_blank" rel="noopener noreferrer" className="ref-url">https://hdgmvietnam.com/chi-tiet/duc-gie-su-ki-to---duong-nhan-biet-thien-chua</a></li>
                <li>Tổng Giáo phận Sài Gòn. (n.d.). Giáo Lý Thánh Kinh: Bài 3: Thiên Chúa là Cha toàn năng. <a href="https://tgpsaigon.net/bai-viet/giao-ly-thanh-kinh-bai-3-%E2%80%93-thien-chua-la-cha-toan-nang-60387" target="_blank" rel="noopener noreferrer" className="ref-url">https://tgpsaigon.net/bai-viet/giao-ly-thanh-kinh-bai-3</a></li>
                <li>Hội đồng Giám mục Việt Nam. (n.d.). Kinh nghiệm thiêng liêng. <a href="https://hdgmvietnam.com/chi-tiet/kinh-nghiem-thieng-lieng-54351" target="_blank" rel="noopener noreferrer" className="ref-url">https://hdgmvietnam.com/chi-tiet/kinh-nghiem-thieng-lieng-54351</a></li>
                <li>Toner, J. (n.d.). <span className="ref-title">Chú giải các quy tắc nhận định thần loại của Thánh I-Nhã</span>. Linh Thao. <a href="https://linhthao.net/wp-content/uploads/2014/03/NDTL-Toner.pdf" target="_blank" rel="noopener noreferrer" className="ref-url">https://linhthao.net/wp-content/uploads/2014/03/NDTL-Toner.pdf</a></li>
                <li>Phanxicô [Dòng Anh em Hèn mọn]. (2017, 18 tháng 8). Năm chìa khóa để phân định theo Thánh I-Nhã. <a href="https://phanxico.vn/2017/08/18/nam-chia-khoa-de-phan-dinh-theo-thanh-i-nha/" target="_blank" rel="noopener noreferrer" className="ref-url">https://phanxico.vn/2017/08/18/nam-chia-khoa-de-phan-dinh-theo-thanh-i-nha/</a></li>
                <li>Dòng Tên Việt Nam. (n.d.). Đọc Hồi Ký Thánh I-Nhã, vị thánh ruột của tôi. <a href="https://dongten.net/doc-hoi-ky-thanh-i-nha-vi-thanh-ruot-cua-toi/" target="_blank" rel="noopener noreferrer" className="ref-url">https://dongten.net/doc-hoi-ky-thanh-i-nha-vi-thanh-ruot-cua-toi/</a></li>
                <li>Xuân Bích Việt Nam. (n.d.). Bài giáo lý về sự phân định, Bài 9: Sự an ủi. <a href="https://xuanbichvietnam.net/trangchu/bai-giao-ly-ve-su-phan-dinh-bai-9-su-an-ui/" target="_blank" rel="noopener noreferrer" className="ref-url">https://xuanbichvietnam.net/trangchu/bai-giao-ly-ve-su-phan-dinh-bai-9</a></li>
                <li>Linh Thao. (n.d.). Quy tắc phân định thần loại. <a href="https://linhthao.net/luutru/133" target="_blank" rel="noopener noreferrer" className="ref-url">https://linhthao.net/luutru/133</a></li>
                <li>Tổng Giáo phận Sài Gòn. (n.d.). Kinh nghiệm về Thiên Chúa hay chỉ là gặp gỡ chính mình? <a href="https://tgpsaigon.net/bai-viet/kinh-nghiem-ve-thien-chua-hay-chi-la-gap-go-chinh-minh-70773" target="_blank" rel="noopener noreferrer" className="ref-url">https://tgpsaigon.net/bai-viet/kinh-nghiem-ve-thien-chua</a></li>
                <li>Giáo phận Bà Rịa. (2014, 28 tháng 7). Bài Giáo lý của ĐTC Phanxicô về Ơn kính sợ Thiên Chúa. <a href="https://www.giaophanbaria.org/thanh-kinh-giao-ly/giao-ly/2014/07/28/bai-giao-ly-cua-dtc-phanxico-ve-on-kinh-so-thien-chua.html" target="_blank" rel="noopener noreferrer" className="ref-url">https://www.giaophanbaria.org/thanh-kinh-giao-ly/</a></li>
                <li>Hội đồng Giám mục Việt Nam. (n.d.). Bảy giai đoạn của Lâu Đài Nội Tâm của Thánh Têrêxa Avila qua hình ảnh. <a href="https://hdgmvietnam.com/chi-tiet/bay-giai-doan-cua-lau-dai-noi-tam-cua-thanh-terexa-avila-qua-hinh-anh-43998" target="_blank" rel="noopener noreferrer" className="ref-url">https://hdgmvietnam.com/chi-tiet/bay-giai-doan-cua-lau-dai-noi-tam</a></li>
                <li>Dòng Cát Minh. (n.d.). Gioan Thánh Giá, Tình Yêu và Hy Sinh. <a href="https://dongcatminh.org/gioan-thanh-gia-tinh-yeu-va-hy-sinh/" target="_blank" rel="noopener noreferrer" className="ref-url">https://dongcatminh.org/gioan-thanh-gia-tinh-yeu-va-hy-sinh/</a></li>
                <li>Hội đồng Giám mục Việt Nam. (n.d.). Cha Wilfrid Stinissen giải thích về đêm tối thiêng liêng. <a href="https://hdgmvietnam.com/chi-tiet/cha-wilfrid-stinissen-giai-thich-ve-dem-toi-thieng-lieng-54337" target="_blank" rel="noopener noreferrer" className="ref-url">https://hdgmvietnam.com/chi-tiet/cha-wilfrid-stinissen</a></li>
                <li>Tổng Giáo phận Hà Nội. (n.d.). Phương pháp cầu nguyện: Lectio Divina. <a href="https://www.tonggiaophanhanoi.org/phuong-phap-cau-nguyen-lectio-divina/" target="_blank" rel="noopener noreferrer" className="ref-url">https://www.tonggiaophanhanoi.org/phuong-phap-cau-nguyen-lectio-divina/</a></li>
                <li>Hội đồng Giám mục Việt Nam. (n.d.). Đọc Kinh Thánh theo phương pháp Lectio Divina. <a href="https://hdgmvietnam.com/chi-tiet/doc-kinh-thanh-theo-phuong-phap-lectio-divina-48910" target="_blank" rel="noopener noreferrer" className="ref-url">https://hdgmvietnam.com/chi-tiet/doc-kinh-thanh-theo-phuong-phap-lectio-divina</a></li>
                <li>CôngGiáo.org. (n.d.). 12 Hoa Quả Chúa Thánh Thần. <a href="https://www.conggiao.org/12-hoa-qua-chua-thanh-than/" target="_blank" rel="noopener noreferrer" className="ref-url">https://www.conggiao.org/12-hoa-qua-chua-thanh-than/</a></li>
                <li>Tổng Giáo phận Hà Nội. (n.d.). Ở lại trong Chúa là điều kiện để sinh nhiều hoa trái. <a href="https://www.tonggiaophanhanoi.org/o-lai-trong-chua-la-dieu-kien-de-sinh-nhieu-hoa-trai/" target="_blank" rel="noopener noreferrer" className="ref-url">https://www.tonggiaophanhanoi.org/o-lai-trong-chua</a></li>
                <li>Giáo phận Lạng Sơn. (n.d.). Bí Tích Thánh Thể Trong Đời Sống Thánh Hiến. <a href="https://giaophanlangson.net/noi-dung/bi-tich-thanh-the-trong-doi-song-thanh-hien-7298-08592606102018" target="_blank" rel="noopener noreferrer" className="ref-url">https://giaophanlangson.net/noi-dung/bi-tich-thanh-the</a></li>
                <li>Hội đồng Giám mục Việt Nam. (n.d.). Mẹ Têrêsa Calcutta: Gặp Chúa nơi người nghèo và người đau khổ. <a href="https://hdgmvietnam.com/chi-tiet/me-teresa-calcutta-nguoi-gap-chua-noi-nguoi-ngheo-va-nguoi-dau-kho-34249" target="_blank" rel="noopener noreferrer" className="ref-url">https://hdgmvietnam.com/chi-tiet/me-teresa-calcutta</a></li>

                {/* Western Academic Sources */}
                <li>American Psychiatric Association. (2022). <span className="ref-title">Diagnostic and Statistical Manual of Mental Disorders</span> (ấn bản lần 5, sửa đổi). American Psychiatric Association Publishing.</li>
                <li>Rahner, K. (1966). <span className="ref-title">Theological Investigations</span> (Vol. 4: More Recent Writings). Helicon Press.</li>
                <li>Grün, A. (2009). <span className="ref-title">Kinh nghiệm về Thiên Chúa hay chỉ là gặp gỡ chính mình?</span> (bản dịch tiếng Việt). Nhà xuất bản Phương Đông.</li>
                <li>American Psychological Association. (2020). <span className="ref-title">Publication Manual of the American Psychological Association</span> (ấn bản lần 7). American Psychological Association.</li>
            </ul>
        </section>
    );
}

