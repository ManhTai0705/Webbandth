import React, { useState } from 'react';
import './lienhe.css'; 
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

function LienHe() {
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
  <div className="contact-section">
      <div className="contact-details">
        <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <h4>PHƯƠNG TRANG - FUTA BUS LINES</h4>
        <p><strong>Địa chỉ:</strong> Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam</p>
        <p><strong>Website:</strong> <a href="https://futabus.vn/">https://futabus.vn</a></p>
        <p><strong>Điện thoại:</strong> 02838386852</p>
        <p><strong>Fax:</strong> 02838386853</p>
        <p><strong>Email:</strong> hotro@futa.vn</p>
        <p><strong>Hotline:</strong> 19006067</p>
      </div>
      <div className="contact-form">
        <h3>Gửi thông tin liên hệ đến chúng tôi</h3>
        <form>
          <div className="form-group">
            <select>
              <option value="FUTA BUS LINES">FUTA BUS LINES</option>
            </select>
            <input type="text" placeholder="Họ và tên" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Nhập Tiêu đề" />
            <textarea placeholder="Nhập ghi chú"></textarea>
          </div>
          <button type="submit">Gửi</button>
        </form>
        </div>
        </div>
        <div className="footer">
      <div className="footer-container">
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

export default LienHe;