import React, { useState } from 'react';
import './hoadon.css'; 
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

function HoaDon() {
  const [selectedDepartureTime, setSelectedDepartureTime] = useState([]);
  const [selectedCarType, setSelectedCarType] = useState('');
  const [selectedSeatRow, setSelectedSeatRow] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');

  const handleCheckboxChange = (value) => {
    setSelectedDepartureTime((prev) => 
      prev.includes(value) ? prev.filter((time) => time !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedDepartureTime([]);
    setSelectedCarType('');
    setSelectedSeatRow('');
    setSelectedFloor('');
  };
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
    <div className="app">
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
      <div className="container1">
        {/* Bộ lọc tìm kiếm */}
        <div className="filter-container">
          <h3>Bộ Lọc Tìm Kiếm</h3>
          <button className="clear-filter-button" onClick={resetFilters}>
            <i className="fas fa-trash-alt"></i> Bỏ lọc
          </button>
          <div className="filter-section">
            <h4>Giờ đi</h4>
            <label><input type="checkbox" onChange={() => handleCheckboxChange('00:00 - 06:00')} /> Sáng sớm 00:00 - 06:00 (0)</label>
            <label><input type="checkbox" onChange={() => handleCheckboxChange('06:00 - 12:00')} /> Buổi sáng 06:00 - 12:00 (0)</label>
            <label><input type="checkbox" onChange={() => handleCheckboxChange('12:00 - 18:00')} /> Buổi chiều 12:00 - 18:00 (2)</label>
            <label><input type="checkbox" onChange={() => handleCheckboxChange('18:00 - 24:00')} /> Buổi tối 18:00 - 24:00 (1)</label>
          </div>
          <div className="filter-section">
            <h4>Loại xe</h4>
            <button onClick={() => setSelectedCarType('Ghế')}>Ghế</button>
            <button onClick={() => setSelectedCarType('Giường')}>Giường</button>
            <button onClick={() => setSelectedCarType('Limousine')}>Limousine</button>
          </div>
          <div className="filter-section">
            <h4>Hàng ghế</h4>
            <button onClick={() => setSelectedSeatRow('Hàng đầu')}>Hàng đầu</button>
            <button onClick={() => setSelectedSeatRow('Hàng giữa')}>Hàng giữa</button>
            <button onClick={() => setSelectedSeatRow('Hàng cuối')}>Hàng cuối</button>
          </div>
          <div className="filter-section">
            <h4>Tầng</h4>
            <button onClick={() => setSelectedFloor('Tầng trên')}>Tầng trên</button>
            <button onClick={() => setSelectedFloor('Tầng dưới')}>Tầng dưới</button>
          </div>
        </div>

        {/* Trip Details */}
        <div className="trip-details-container">
      {/* Header Section */}
      <div className="trip-header">
        <div className="trip-summary-container">
          <h3 className="trip-summary-title">An Nhơn - TP. Hồ Chí Minh (3)</h3>
          <div className="trip-summary-buttons">
            <button className="trip-button">
              <i className="fas fa-tag"></i> Giá rẻ bất ngờ
            </button>
            <button className="trip-button">
              <i className="fas fa-clock"></i> Giờ khởi hành
            </button>
            <button className="trip-button">
              <i className="fas fa-phone-alt"></i> Ghế trống
            </button>
          </div>
        </div>
      </div>
      <div className="schedule-card">
          <div className="schedule-info">
            <div className="schedule-time">
              <span className="time">16:45</span>
              <span className="icon-dot">●</span>
              <span className="duration">14 giờ</span>
              <span className="time">06:45</span>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="schedule-location">
              Bến Xe An Nhơn, Bình Định → Bến Xe Miền Tây
            </div>
            <p className="note">
              <strong>Lưu ý:</strong> Quý Khách đang chọn tuyến xe có lộ trình đi Cao Tốc - Long Thành - Dầu Giây - Phan Thiết. ... <a href="#">xem thêm</a>
            </p>
            <div className="seat-info">
              Giường • 38 chỗ trống • <span className="price">290.000đ</span>
            </div>
          </div>
          <div className="schedule-footer">
            <button className="footer-button">Chọn ghế</button>
            <button className="footer-button">Lịch trình</button>
            <button className="footer-button">Trung chuyển</button>
            <button className="footer-button">Chính sách</button>
            <button className="select-trip-button">Chọn chuyến</button>
          </div>
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
</div>

  );
}

export default HoaDon;
