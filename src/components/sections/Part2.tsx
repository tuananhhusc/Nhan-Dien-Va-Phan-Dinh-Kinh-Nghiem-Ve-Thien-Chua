import ArticleSection from "@/components/ui/ArticleSection";
import AcademicTable from "@/components/ui/AcademicTable";

export function SectionTienTrinh() {
    return (
        <ArticleSection
            id="tien-trinh-thang-tien"
            title="Tiến Trình Thăng Tiến Tâm Linh: Lộ Trình Thần Bí Theo Truyền Thống Cát Minh"
            dropCap={true}
            paragraphs={[
                <p key="1">Để xác định một người đang thực sự có kinh nghiệm sâu xa về Thiên Chúa, truyền thống Thần học Huyền bí <em>(Mystical Theology)</em> của Giáo hội Công giáo dựa dẫm rất nhiều vào hệ thống học thuyết vô song của hai vị Tiến sĩ Hội Thánh thuộc Dòng Cát Minh: Thánh Têrêsa Avila và Thánh Gioan Thánh Giá. Hai vị thánh này đã phác họa một bản đồ cực kỳ chi tiết về sự tiến triển của linh hồn, từ những bước chập chững thanh luyện ban đầu cho đến trạng thái kết hợp hoàn toàn với Thiên Chúa.</p>,
            ]}
        />
    );
}

export function SectionLauDai() {
    return (
        <>
            <ArticleSection
                id="lau-dai-noi-tam"
                title="Lâu Đài Nội Tâm Và Các Bậc Cầu Nguyện Của Thánh Têrêsa Avila"
                level={3}
                dropCap={true}
                paragraphs={[
                    <p key="1">Thánh Têrêsa Avila (1515-1582), nhà cải cách vĩ đại của Dòng Cát Minh, đã miêu tả linh hồn con người như một tòa lâu đài nguy nga làm bằng pha lê hay kim cương rực rỡ, nơi Thiên Chúa ngự trị tại căn phòng trung tâm (chính điện).<sup className="footnote-ref">21</sup> Cầu nguyện chính là cánh cửa duy nhất để bước vào lâu đài này.<sup className="footnote-ref">23</sup> Kinh nghiệm về Thiên Chúa, theo nhãn quan của Thánh Têrêsa, không phải là một trạng thái tĩnh lặng bất động, mà là một sự chuyển dịch liên tục và đầy kịch tính qua bảy &quot;cư sở&quot; <em>(mansions)</em>.<sup className="footnote-ref">21</sup></p>,
                ]}
            />
            <AcademicTable
                caption="Bảng 2. Bảy Cư Sở Trong Lâu Đài Nội Tâm Của Thánh Têrêsa Avila"
                headers={["Tầng Bậc (Cư Sở)", "Đặc Điểm Trạng Thái", "Dấu Hiệu Hiện Diện Của Thiên Chúa", "Bản Chất Kinh Nghiệm"]}
                rows={[
                    ["Cư sở 1: Khởi đầu", "Tâm hồn còn đầy lo ra, chia trí và quyến rũ.", "Cảm nhận \"tiếng gọi\" mơ hồ để từ bỏ nếp sống cũ.", "Nỗ lực nhân loại chiếm ưu thế, ân sủng tác động từ bên ngoài."],
                    ["Cư sở 2: Nỗ lực", "Nỗ lực thanh luyện, chiến đấu với thói hư.", "Nghe tiếng Chúa thân mật hơn, \"xáo trộn\" đời sống.", "Kinh nghiệm về Thiên Chúa đòi hỏi sự từ bỏ."],
                    ["Cư sở 3: Bình an", "Đạt sự bình an nội tâm, giữ luật trung thành.", "Chúa rút lại an ủi cảm tính để thử thách.", "Thử thách từ bỏ cảm nghiệm đạo đức."],
                    ["Cư sở 4: An tĩnh", "Bước ngoặt từ chủ động sang thụ động.", "\"Nguyện gẫm an tĩnh\" tràn ngập như suối tuôn.", "Nhận thức rõ sự can thiệp trực tiếp của Chúa."],
                    ["Cư sở 5: Kết hợp", "Ý chí đồng nhất với ý chí Thiên Chúa.", "\"Linh hồn chỉ muốn điều Chúa muốn.\"", "Cái tôi chủ quan bị làm mờ đi."],
                    ["Cư sở 6: Đính hôn", "Chịu thử thách thanh luyện sâu sắc.", "Sự hiện diện như \"ngọn lửa âm ỉ\".", "Nỗi đau khổ tương hợp với tình yêu mãnh liệt."],
                    ["Cư sở 7: Hôn phối", "Đích điểm kết hiệp tại chính điện.", "Thị kiến về Chúa Ba Ngôi. Hòa nhập như \"nước mưa rơi xuống dòng sông\".", "Viên mãn. Khiêm nhường tột bậc và phục vụ Giáo hội."],
                ]}
            />
            <div className="mb-5 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-primary)", textAlign: "justify" }}>
                <p>Mặc dù diễn tả những trải nghiệm thần bí cao siêu, Thánh Têrêsa nhấn mạnh rằng chiêm niệm thực chất là một cuộc trao đổi thân tình giữa bạn hữu.<sup className="footnote-ref">26</sup> Dấu hiệu chân thực của một linh hồn chiêm niệm ở cấp độ cao nhất không phải là sự xa lánh thế gian, mà là sự hòa quyện hoàn hảo giữa mẫu người Maria (chiêm niệm) và Martha (hoạt động, phục vụ).<sup className="footnote-ref">25</sup> Kinh nghiệm gặp gỡ Thiên Chúa phải biểu lộ qua tình yêu tha nhân một cách trọn vẹn.<sup className="footnote-ref">28</sup></p>
            </div>
        </>
    );
}

export function SectionDemToi() {
    return (
        <ArticleSection
            id="dem-toi-linh-hon"
            title="Đêm Tối Linh Hồn Của Thánh Gioan Thánh Giá: Thanh Luyện Mọi Bám Víu"
            level={3}
            dropCap={true}
            paragraphs={[
                <p key="1">Nếu Thánh Têrêsa miêu tả sự thăng tiến qua hình ảnh lâu đài sáng chói, thì người bạn tâm giao của ngài, Thánh Gioan Thánh Giá, lại tiếp cận kinh nghiệm Thiên Chúa qua một tiến trình thanh luyện triệt để và đau đớn gọi là &quot;Đêm Tối Của Tâm Hồn&quot;.<sup className="footnote-ref">29</sup> Ngài lập luận bằng nguyên tắc thần học tiêu cực <em>(apophatic theology)</em>: vì Thiên Chúa là Đấng Siêu Việt vô biên, mọi khái niệm của trí năng, mọi cảm giác của giác quan đều không phải là chính Thiên Chúa.<sup className="footnote-ref">9</sup></p>,
                <p key="2">Để đưa linh hồn đến sự kết hợp trọn vẹn, Thiên Chúa chủ động tước đoạt mọi điểm tựa khả giác và tâm linh của con người. Ngài tạo ra &quot;đêm tối&quot; bằng cách làm cho các quan năng nội tại trở nên trống rỗng.<sup className="footnote-ref">29</sup> Việc lật nhào thế giới nội tâm này không phải là sự trừng phạt, mà là hành động xót thương lớn lao nhất, một &quot;luyện ngục được trải nghiệm trên trái đất&quot;.<sup className="footnote-ref">30</sup></p>,
                <p key="3">Trong đêm tối này, sự đau khổ không xuất phát từ sự vắng mặt của Thiên Chúa, mà ngược lại, do sự hiện diện quá mãnh liệt và tinh tuyền của Ngài. Ánh sáng vô nhiễm chiếu rọi vào những vùng tối tăm ẩn giấu nhất của linh hồn.<sup className="footnote-ref">31</sup> Nhưng chính trong sự bất lực đó, &quot;móng vuốt&quot; của sự chiếm đoạt vị kỷ bị bẻ gãy, nhường chỗ cho tình yêu thần linh.<sup className="footnote-ref">31</sup></p>,
                <p key="4">Sự kiện linh mục Gioan Thánh Giá bị giam cầm trong ngục tối tại Toledo suốt 9 tháng chính là ẩn dụ hoàn hảo cho bóng tối nội tâm. Chính trong hoàn cảnh bị tước đoạt mọi sự, ngài đã sáng tác nên &quot;Thánh Thi Thiêng Liêng&quot;: những vần thơ tuyệt diệu nhất về tình yêu Thiên Chúa, chứng minh nghịch lý: sự kết hợp sâu thẳm nhất diễn ra nơi tận cùng của sự hư vô hóa bản thân.<sup className="footnote-ref">33</sup></p>,
            ]}
        />
    );
}
