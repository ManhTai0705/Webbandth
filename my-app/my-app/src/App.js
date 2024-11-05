import React, { useState } from 'react';
import './App.css'; // Import your custom CSS
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import { Pagination } from 'swiper/modules'; // Correct import path for Pagination module
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Swiper pagination module styles
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LienHe from './lienhe'; // Import trang Liên hệ
import VeChungToi from './vechungtoi';
import LichTrinh from './lichtrinh';
import HoaDon from './hoadon';
import TraCuuVe from './tracuuve';
import TinTuc from './tintuc';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('VI');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAppDropdown = () => {
    setIsAppDropdownOpen(!isAppDropdownOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <div className="navbar">
          <div className="navbar-top">
            <div className="navbar-left">
              {/* Dropdown chọn ngôn ngữ */}
              <div className="language-selector">
                <div className="selected-language" onClick={toggleDropdown}>
                  <img
                    src={selectedLanguage === 'VI' ? '/logovn.png' : '/path_to_uk_flag.png'}
                    alt="Language Flag"
                    className="flag-icon"
                  />
                  <span>{selectedLanguage}</span>
                  <span className="dropdown-icon">▼</span>
                </div>
                {isDropdownOpen && (
                  <ul className="language-dropdown">
                    <li onClick={() => changeLanguage('VI')}>
                      <img src="/logovn.png" alt="Vietnam Flag" className="flag-icon" />
                      <span>VI</span>
                    </li>
                    <li onClick={() => changeLanguage('EN')}>
                      <img src="/logouk.png" alt="UK Flag" className="flag-icon" />
                      <span>EN</span>
                    </li>
                  </ul>
                )}
              </div>

              {/* Dropdown chọn ứng dụng */}
              <div className="app-download">
                <div className="selected-app" onClick={toggleAppDropdown}>
                  <img src="/app.svg" alt="Download Icon" className="icon" />
                  <span>Tải ứng dụng</span>
                  <span className="dropdown-icon">▼</span>
                </div>
                {isAppDropdownOpen && (
                  <ul className="app-dropdown">
                    <li>
                      <span>ANDROID</span>
                    </li>
                    <li>
                      <span>IOS</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="navbar-center">
              <img src="/logopt.svg" alt="FUTA Bus Lines Logo" className="logo" />
            </div>

            <button className="login-button">
              <img src="/user.png" alt="User Icon" className="icon" />
              <span>Đăng nhập/Đăng ký</span>
            </button>
          </div>

          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/">TRANG CHỦ</Link>
              </li>
              <li>
              <Link to="/schedule">LỊCH TRÌNH</Link>
              </li>
              <li>
              <Link to="/rescueticket">TRA CỨU VÉ</Link></li>
              <li>
              <Link to="/news">TIN TỨC</Link></li>
              <li>
              <Link to="/bill">HÓA ĐƠN</Link></li>
              <li>
                <Link to="/contact">LIÊN HỆ</Link>
              </li>
              <li>
              <Link to="/aboutus">VỀ CHÚNG TÔI</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Định nghĩa các tuyến đường */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<LienHe />} />
          <Route path="/aboutus" element={<VeChungToi />} />
          <Route path="/schedule" element={<LichTrinh />} />
          <Route path="/news" element={<TinTuc />} />
          <Route path="/bill" element={<HoaDon/>} />
          <Route path="/rescueticket" element={<TraCuuVe/>} />
          <Route path="/" element={<LichTrinh />} />
        </Routes>
      </div>
    </Router>
  );
}

// Định nghĩa trang Home
function Home() {
  return (
    <div>
      {/* Nội dung trang chủ */}
      <div className="banner">
        <img src="/web.png" alt="Banner" className="banner-image" />
      </div>

      {/* Form tìm kiếm chuyến xe và các phần tử khác */}
      <div class="search-form-container">
  <div class="search-form">
    <div class="trip-type">
      <label>
        <input type="radio" name="tripType" checked /> Một chiều
      </label>
      <label>
        <input type="radio" name="tripType" /> Khứ hồi
      </label>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input type="text" placeholder="Chọn điểm đi" />
      </div>
      <div class="form-group">
        <input type="text" placeholder="Chọn điểm đến" />
      </div>
      <div class="form-group">
        <input type="date" />
      </div>
      <div class="form-group">
        <input type="number" value="1" min="1" />
      </div>
    </div>
    <button class="search-button">Tìm chuyến xe</button>
  </div>
</div>

      {/* Khuyến mãi Nổi Bật (Swipeable) */}
      <div className="promotions-section">
        <h2>KHUYẾN MÃI NỔI BẬT</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]} // Use Pagination module
        >
          <SwiperSlide>
            <img src="/khuyenmai2.png" alt="Promotion 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/khuyenmai2.png" alt="Promotion 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/khuyenmai2.png" alt="Promotion 3" />
          </SwiperSlide>
           <SwiperSlide>
            <img src="/khuyenmai2.png" alt="Promotion 3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="popular-routes1">
      <div className="popular-routes">

  <h2>TUYẾN PHỔ BIẾN</h2>
  <p>Được khách hàng tin tưởng và lựa chọn</p>
  <div className="route-cards">
    {/* Card 1 */}
    <div className="route-card">
      <img src="/anh2.png" alt="Tuyến xe từ Tp Hồ Chí Minh" className="route-card-image" />
      <div className="route-card-body">
        <h3>Tuyến xe từ Tp Hồ Chí Minh</h3>
        <ul>
          <li>
            Đà Lạt<br />
            <span>305km - 8 giờ - 01/10/2024</span> <span className="price">290.000đ</span>
          </li>
          <li>
            Cần Thơ<br />
            <span>166km - 3 giờ 12 phút - 01/10/2024</span> <span className="price">165.000đ</span>
          </li>
          <li>
            Long Xuyên<br />
            <span>203km - 5 giờ - 01/10/2024</span> <span className="price">190.000đ</span>
          </li>
        </ul>
      </div>
    </div>
    {/* Card 2 */}
    <div className="route-card">
      <img src="/anh3.png" alt="Tuyến xe từ Đà Lạt" className="route-card-image" />
      <div className="route-card-body">
        <h3>Tuyến xe từ Đà Lạt</h3>
        <ul>
          <li>
            TP. Hồ Chí Minh<br />
            <span>310km - 8 giờ - 01/10/2024</span> <span className="price">290.000đ</span>
          </li>
          <li>
            Đà Nẵng<br />
            <span>757km - 17 giờ - 01/10/2024</span> <span className="price">410.000đ</span>
          </li>
          <li>
            Cần Thơ<br />
            <span>457km - 11 giờ - 01/10/2024</span> <span className="price">435.000đ</span>
          </li>
        </ul>
      </div>
    </div>
    {/* Card 3 */}
    <div className="route-card">
      <img src="/anh1.png" alt="Tuyến xe từ Đà Nẵng" className="route-card-image" />
      <div className="route-card-body">
        <h3>Tuyến xe từ Đà Nẵng</h3>
        <ul>
          <li>
            Đà Lạt<br />
            <span>666km - 17 giờ - 01/10/2024</span> <span className="price">410.000đ</span>
          </li>
          <li>
            BX An Sương<br />
            <span>966km - 20 giờ - 01/10/2024</span> <span className="price">410.000đ</span>
          </li>
          <li>
            Nha Trang<br />
            <span>528km - 9 giờ 25 phút - 01/10/2024</span> <span className="price">300.000đ</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
{/* Phuong Trang Statistics Section */}
<div className="statistics-section">
  <div className="statistics-container">
    <h2>FUTA BUS LINES - CHẤT LƯỢNG LÀ DANH DỰ</h2>
    <p>Được khách hàng tin tưởng và lựa chọn</p>
    
    <div className="statistics-items">
      {/* Item 1 */}
      <div className="stat-item">
        <img src="/group.svg" alt="Luot khach" className="stat-icon" />
        <div className="stat-text">
          <h3>Hơn 20 Triệu</h3>
          <p>Phương Trang phục vụ hơn 20 triệu lượt khách bình quân 1 năm trên toàn quốc</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="stat-item">
        <img src="/Store.svg" alt="Phong ve" className="stat-icon" />
        <div className="stat-text">
          <h3>Hơn 350</h3>
          <p>Phương Trang có hơn 350 phòng vé, trạm trung chuyển, bến xe,... trên toàn hệ thống</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="stat-item">
        <img src="/Group_2.svg" alt="Chuyen xe" className="stat-icon" />
        <div className="stat-text">
          <h3>Hơn 1,000</h3>
          <p>Phương Trang phục vụ hơn 1,000 chuyến xe đường dài và liên tỉnh mỗi ngày</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="illustration-container">
    <img src="/image.svg" alt="FUTA illustration" className="illustration-image" />
  </div>
</div>
 <div className="news-section">
      <div className="news-header">
        <h2>TIN TỨC MỚI</h2>
        <a href="/all-news" className="view-all">Xem tất cả</a>
      </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="news-card">
              <img src="/news1.png" alt="News 1" className="news-image" />
              <div className="news-details">
                <h3>PHƯƠNG TRANG - FUTA BUS LINES THÔNG BÁO THAY ĐỔI SỐ TỔNG ĐÀI ĐẶT VÉ KHU VỰC NAM...</h3>
                <p>28/09/2024</p>
                <a href="/news-detail/1" className="news-link">Chi tiết &gt;</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="news-card">
              <img src="/news2.png" alt="News 2" className="news-image" />
              <div className="news-details">
                <h3>PHƯƠNG TRANG - FUTA BUS LINES KHAI TRƯƠNG VĂN PHÒNG HÒN ĐẤT - KIÊN GIANG</h3>
                <p>27/09/2024</p>
                <a href="/news-detail/2" className="news-link">Chi tiết &gt;</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="news-card">
              <img src="/news3.png" alt="News 3" className="news-image" />
              <div className="news-details">
                <h3>PHƯƠNG TRANG – FUTA BUS LINES KHAI TRƯƠNG VĂN PHÒNG KON TUM</h3>
                <p>26/09/2024</p>
                <a href="/news-detail/3" className="news-link">Chi tiết &gt;</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-card">
              <img src="/news3.png" alt="News 3" className="news-image" />
              <div className="news-details">
                <h3>PHƯƠNG TRANG – FUTA BUS LINES KHAI TRƯƠNG VĂN PHÒNG KON TUM</h3>
                <p>26/09/2024</p>
                <a href="/news-detail/3" className="news-link">Chi tiết &gt;</a>
              </div>
            </div>
            
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="futa-group-section">
      <h2>KẾT NỐI FUTA GROUP</h2>
      <p>Kết nối đa dạng hệ sinh thái FUTA Group qua App FUTA: mua vé Xe Phương Trang, Xe Buýt, Xe Hợp Đồng, Giao Hàng...</p>
      <div className="services">
        <div className="service-item">
          <img src="/ketnoi1.png" alt="Xe Hợp Đồng" />
          
        </div>
        <div className="service-item">
          <img src="/ketnoi2.png" alt="Mua vé Phương Trang" />
        </div>
        <div className="service-item">
          <img src="/ketnoi3.png" alt="Giao Hàng" />
        </div>
        <div className="service-item">
          <img src="/ketnoi4.png" alt="Xe Buýt" />
        </div>
      </div>
      
      </div>
      <div className="footer">
      <div className="footer-container">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <h3>TRUNG TÂM TỔNG ĐÀI & CSKH</h3>
          <h1 className="hotline">1900 6067</h1>
          <p>
            CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES <br />
            Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam. <br />
            Email: <a href="mailto:hotro@futa.vn">hotro@futa.vn</a> <br />
            Điện thoại: 02838386852 <br />
            Fax: 02838386853
          </p>

          <h4>TẢI APP FUTA</h4>
          <div className="app-links">
            <img src="/CHPlay.svg" alt="CH Play" className="app-icon" />
            <img src="/Appstore.svg" alt="App Store" className="app-icon" />
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>FUTA Bus Lines</h4>
            <ul>
              <li>Về chúng tôi</li>
              <li>Lịch trình</li>
              <li>Tuyển dụng</li>
              <li>Tin tức & Sự kiện</li>
              <li>Mạng lưới văn phòng</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Hỗ trợ</h4>
            <ul>
              <li>Tra cứu thông tin đặt vé</li>
              <li>Điều khoản sử dụng</li>
              <li>Câu hỏi thường gặp</li>
              <li>Hướng dẫn đặt vé trên Web</li>
              <li>Hướng dẫn nạp tiền trên App</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media and Partners */}
        <div className="social-media">
          <h4>KẾT NỐI CHÚNG TÔI</h4>
          <div className="social-icons">
            <img src="/facebook.svg" alt="Facebook" className="social-icon" />
            <img src="/youtube.svg" alt="YouTube" className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
