// ====== DỮ LIỆU MẪU ======
const newsData = [
    {
        id: 1, category: "Thời sự", featured: true,
        title: "Hội nghị thượng đỉnh G20 năm 2024 bàn về biến đổi khí hậu toàn cầu",
        summary: "Các nhà lãnh đạo thế giới tụ họp để thảo luận về các giải pháp ứng phó với biến đổi khí hậu và phát triển bền vững trong kỷ nguyên mới.",
        content: "Hội nghị thượng đỉnh G20 năm nay quy tụ lãnh đạo của 20 nền kinh tế lớn nhất thế giới. Chương trình nghị sự tập trung vào ba vấn đề chính: biến đổi khí hậu, kinh tế số và an ninh lương thực toàn cầu.\n\nCác nhà lãnh đạo đã cam kết giảm 50% lượng khí thải carbon vào năm 2035 và tăng cường đầu tư vào năng lượng tái tạo. Đây được coi là bước tiến lịch sử trong nỗ lực chống biến đổi khí hậu.\n\nNgoài ra, hội nghị cũng thảo luận về việc cải cách hệ thống tài chính quốc tế để hỗ trợ các nước đang phát triển trong quá trình chuyển đổi xanh.",
        emoji: "🌍", author: "Nguyễn Văn A", date: "13/05/2024", views: 15420, comments: []
    },
    {
        id: 2, category: "Thể thao",
        title: "Đội tuyển Việt Nam giành chiến thắng lịch sử tại giải AFF Cup 2024",
        summary: "Với màn trình diễn xuất sắc, đội tuyển Việt Nam đã đánh bại đối thủ mạnh với tỷ số 3-1 trong trận chung kết.",
        content: "Đội tuyển bóng đá Việt Nam đã có chiến thắng lịch sử khi đánh bại Thái Lan với tỷ số 3-1 trong trận chung kết AFF Cup 2024 diễn ra tại sân Mỹ Đình.\n\nCác bàn thắng được ghi bởi Nguyễn Văn Quyết (phút 23), Tiến Linh (phút 56) và Hoàng Đức (phút 78). Đây là lần thứ ba Việt Nam vô địch AFF Cup.\n\nHuấn luyện viên trưởng cho biết đây là kết quả của quá trình tập luyện nghiêm túc và tinh thần đoàn kết của toàn đội.",
        emoji: "⚽", author: "Trần Thị B", date: "12/05/2024", views: 28900, comments: []
    },
    {
        id: 3, category: "Công nghệ",
        title: "Apple ra mắt iPhone 16 với chip AI mạnh nhất từ trước đến nay",
        summary: "Apple vừa chính thức giới thiệu dòng iPhone 16 với nhiều cải tiến đột phá về trí tuệ nhân tạo và hiệu năng xử lý.",
        content: "Apple đã chính thức ra mắt iPhone 16 tại sự kiện 'It's Glowtime' vừa diễn ra tại Cupertino, California. Điểm nổi bật nhất là chip A18 Pro với khả năng xử lý AI vượt trội.\n\nMáy được trang bị tính năng Apple Intelligence - hệ thống AI tích hợp sâu vào hệ điều hành, giúp người dùng viết nội dung, chỉnh sửa ảnh và quản lý thông tin thông minh hơn.\n\nGiá bán khởi điểm tại Mỹ là 799 USD, dự kiến về Việt Nam vào tháng 10/2024.",
        emoji: "📱", author: "Lê Văn C", date: "11/05/2024", views: 21300, comments: []
    },
    {
        id: 4, category: "Giải trí",
        title: "Phim Việt 'Lật Mặt 7' phá kỷ lục doanh thu phòng vé trong nước",
        summary: "Bom tấn điện ảnh Việt Nam đã thu về hơn 300 tỷ đồng chỉ sau 2 tuần công chiếu, lập kỷ lục mới cho điện ảnh nước nhà.",
        content: "Bộ phim 'Lật Mặt 7: Một Điều Ước' của đạo diễn Lý Hải đã chính thức vượt mốc 300 tỷ đồng doanh thu sau chỉ 14 ngày công chiếu.\n\nPhim quy tụ dàn diễn viên nổi tiếng cùng kỹ xảo điện ảnh hiện đại, nhận được nhiều lời khen từ khán giả về nội dung cảm động và cách kể chuyện sáng tạo.\n\nĐây là cột mốc quan trọng khẳng định sự phát triển mạnh mẽ của điện ảnh Việt Nam trong những năm gần đây.",
        emoji: "🎬", author: "Phạm Thị D", date: "10/05/2024", views: 19800, comments: []
    },
    {
        id: 5, category: "Thời sự",
        title: "Chính phủ phê duyệt gói hỗ trợ 50.000 tỷ đồng phát triển kinh tế",
        summary: "Gói hỗ trợ kinh tế lớn nhất từ trước đến nay được thông qua nhằm thúc đẩy tăng trưởng và tạo việc làm cho người dân.",
        content: "Chính phủ vừa chính thức phê duyệt gói hỗ trợ kinh tế trị giá 50.000 tỷ đồng, tập trung vào các lĩnh vực hạ tầng, công nghệ và nông nghiệp.\n\nGói hỗ trợ bao gồm các chương trình vay vốn ưu đãi cho doanh nghiệp vừa và nhỏ, đầu tư vào hạ tầng số và hỗ trợ xuất khẩu nông sản.\n\nDự kiến gói hỗ trợ này sẽ tạo ra hơn 1 triệu việc làm mới trong vòng 2 năm tới.",
        emoji: "💰", author: "Hoàng Văn E", date: "09/05/2024", views: 12100, comments: []
    },
    {
        id: 6, category: "Công nghệ",
        title: "Việt Nam ra mắt AI chatbot quốc gia đầu tiên hỗ trợ tiếng Việt",
        summary: "Sản phẩm AI thuần Việt được phát triển bởi các kỹ sư trong nước, đánh dấu bước tiến quan trọng trong lĩnh vực trí tuệ nhân tạo.",
        content: "Bộ Khoa học và Công nghệ vừa chính thức ra mắt VietAI - chatbot trí tuệ nhân tạo đầu tiên được phát triển hoàn toàn bởi người Việt Nam.\n\nVietAI được huấn luyện trên kho dữ liệu tiếng Việt khổng lồ, có khả năng hiểu và phản hồi tự nhiên các câu hỏi về văn hóa, lịch sử và đời sống người Việt.\n\nSản phẩm sẽ được tích hợp vào các dịch vụ công trực tuyến, giúp người dân tra cứu thông tin và thực hiện thủ tục hành chính dễ dàng hơn.",
        emoji: "🤖", author: "Ngô Thị F", date: "08/05/2024", views: 17600, comments: []
    }
];

let currentCategory = 'all';
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// ====== KHỞI ĐỘNG ======
window.onload = function() {
    renderNews(newsData);
    renderHotNews();
    startBreakingNews();
    updateUserArea();
};

// ====== HIỂN THỊ TIN TỨC ======
function renderNews(data) {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;
    if (data.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:#888;padding:40px;">Không tìm thấy tin tức nào.</p>';
        return;
    }
    grid.innerHTML = `<div class="section-title">📰 Tin tức mới nhất</div><div class="news-grid">` +
        data.map((post, i) => `
            <div class="news-card ${i === 0 ? 'featured' : ''}" onclick="openPost(${post.id})">
                <div class="card-img-placeholder" style="height:${i===0?'240':'180'}px">${post.emoji}</div>
                <div class="card-body">
                    <span class="card-category">${post.category}</span>
                    <div class="card-title">${post.title}</div>
                    <div class="card-summary">${post.summary}</div>
                    <div class="card-meta">
                        <span>✍️ ${post.author}</span>
                        <span>📅 ${post.date}</span>
                        <span>👁️ ${post.views.toLocaleString()}</span>
                        <span>💬 ${post.comments.length}</span>
                    </div>
                </div>
            </div>
        `).join('') + `</div>`;
}

// ====== TIN NỔI BẬT SIDEBAR ======
function renderHotNews() {
    const hot = document.getElementById('hotNews');
    if (!hot) return;
    const sorted = [...newsData].sort((a,b) => b.views - a.views).slice(0, 4);
    hot.innerHTML = sorted.map(p => `
        <div class="hot-item" onclick="openPost(${p.id})" style="cursor:pointer">
            <div class="card-img-placeholder" style="width:70px;height:50px;font-size:24px;border-radius:4px;
                 background:linear-gradient(135deg,#fdecea,#fad7d4);flex-shrink:0;
                 display:flex;align-items:center;justify-content:center">${p.emoji}</div>
            <div class="hot-item-text">
                <a href="#">${p.title}</a>
                <div class="hot-item-date">📅 ${p.date}</div>
            </div>
        </div>
    `).join('');
}

// ====== LỌC DANH MỤC ======
function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');
    const filtered = cat === 'all' ? newsData : newsData.filter(p => p.category === cat);
    renderNews(filtered);
}

// ====== TÌM KIẾM ======
function searchNews() {
    const kw = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!kw) { renderNews(newsData); return; }
    const result = newsData.filter(p =>
        p.title.toLowerCase().includes(kw) ||
        p.summary.toLowerCase().includes(kw) ||
        p.content.toLowerCase().includes(kw)
    );
    renderNews(result);
}
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    if (input) input.addEventListener('keypress', e => { if(e.key==='Enter') searchNews(); });
});

// ====== MỞ BÀI VIẾT (MODAL) ======
function openPost(id) {
    const post = newsData.find(p => p.id === id);
    if (!post) return;
    post.views++;

    // Tạo modal nếu chưa có
    let modal = document.getElementById('postModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'postModal';
        modal.className = 'modal-overlay';
        modal.onclick = function(e) { if(e.target===this) closeModal(); };
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-box">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <span class="modal-category">${post.category}</span>
            <h1 class="modal-title">${post.title}</h1>
            <div class="modal-meta">
                ✍️ ${post.author} &nbsp;|&nbsp; 📅 ${post.date} &nbsp;|&nbsp; 
                👁️ ${post.views.toLocaleString()} lượt xem
            </div>
            <div style="font-size:80px;text-align:center;margin:20px 0;
                 background:linear-gradient(135deg,#fdecea,#fad7d4);
                 border-radius:12px;padding:20px">${post.emoji}</div>
            <div class="modal-content">${post.content.replace(/\n/g, '<br><br>')}</div>
            
            <div class="comment-section">
                <h4>💬 Bình luận (${post.comments.length})</h4>
                <div id="commentList">
                    ${renderComments(post.comments)}
                </div>
                ${currentUser ? `
                    <div class="comment-form">
                        <input type="text" id="commentInput" placeholder="Nhập bình luận..."/>
                        <button onclick="addComment(${id})">Gửi</button>
                    </div>
                ` : `<p style="color:#888;font-size:14px">
                    <a href="login.html" style="color:#c0392b">Đăng nhập</a> để bình luận
                  </p>`}
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderComments(comments) {
    if (comments.length === 0) return '<p style="color:#888;font-size:13px">Chưa có bình luận nào.</p>';
    return comments.map(c => `
        <div class="comment-item">
            <div class="comment-author">👤 ${c.user}</div>
            <div class="comment-text">${c.text}</div>
            <div class="comment-time">${c.time}</div>
        </div>
    `).join('');
}

function addComment(postId) {
    if (!currentUser) { window.location.href = 'login.html'; return; }
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (!text) return;
    const post = newsData.find(p => p.id === postId);
    post.comments.push({
        user: currentUser.username,
        text: text,
        time: new Date().toLocaleString('vi-VN')
    });
    input.value = '';
    document.getElementById('commentList').innerHTML = renderComments(post.comments);
    document.querySelector('.comment-section h4').textContent = `💬 Bình luận (${post.comments.length})`;
}

function closeModal() {
    const modal = document.getElementById('postModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ====== BREAKING NEWS ======
const breakingItems = [
    "🔴 Giải AFF Cup 2024: Việt Nam vào chung kết",
    "💹 VN-Index tăng mạnh phiên giao dịch hôm nay",
    "🌧️ Miền Bắc chuẩn bị đón đợt mưa lớn cuối tuần",
    "🚀 Việt Nam phóng thành công vệ tinh quan sát trái đất"
];
function startBreakingNews() {
    let i = 0;
    const el = document.getElementById('breakingText');
    if (!el) return;
    el.textContent = breakingItems[0];
    setInterval(() => {
        i = (i + 1) % breakingItems.length;
        el.style.opacity = 0;
        setTimeout(() => { el.textContent = breakingItems[i]; el.style.opacity = 1; }, 300);
    }, 4000);
}

// ====== USER AREA ======
function updateUserArea() {
    const area = document.getElementById('userArea');
    if (!area) return;
    if (currentUser) {
        area.innerHTML = `
            <div class="user-info">
                <span>👤 ${currentUser.username}</span>
                ${currentUser.role === 'admin' ? '<a href="admin.html" style="color:white;font-size:13px">⚙️ Admin</a>' : ''}
                <button class="btn-logout" onclick="logout()">Đăng xuất</button>
            </div>`;
    } else {
        area.innerHTML = '<a href="login.html" class="btn-login">Đăng nhập</a>';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    location.reload();
}