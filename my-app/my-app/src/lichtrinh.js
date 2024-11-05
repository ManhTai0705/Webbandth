import React, { useState } from 'react';
import './lichtrinh.css'; 
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
function LichTrinh() {
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
  const routes = [
    { from: "Bảo Lộc", to: "Bình Sơn", type: "Limousine", distance: "650km", duration: "15 giờ 30 phút", price: "---" },
    { from: "Bảo Lộc", to: "Đà Nẵng", type: "Giường", distance: "756km", duration: "16 giờ 38 phút", price: "---" },
    { from: "Bảo Lộc", to: "Huế", type: "Giường", distance: "827km", duration: "19 giờ", price: "---" },
    { from: "Bảo Lộc", to: "Huế", type: "Limousine", distance: "900km", duration: "18 giờ 30 phút", price: "---" },
    { from: "Bảo Lộc", to: "Hà Nội", type: "Limousine", distance: "1300km", duration: "19 giờ 30 phút", price: "---" },
    { from: "An Nhơn", to: "TP. Hồ Chí Minh", type: "Giường", distance: "639km", duration: "11 giờ 30 phút", price: "---" },
    { from: "An Nhơn", to: "TP. Hồ Chí Minh", type: "Giường", distance: "660km", duration: "13 giờ 46 phút", price: "---" },
    { from: "An Nhơn", to: "TP. Hồ Chí Minh", type: "---", distance: "627km", duration: "10 giờ 7 phút", price: "---" }
];
  return (
    <div className="app">

    <div className="search-container1">
      {/* Search Fields Section */}
      <div className="search-boxes">
        <input type="text" className="input-field" placeholder="Nhập điểm đi" />
        <button className="switch-button">
        <i class="fas fa-exchange-alt"></i>
        </button>
        <input type="text" className="input-field" placeholder="Nhập điểm đến" />
      </div>

      {/* Table Header Section */}
      <div className="table-header">
        <span className="header-item-1" >Tuyến xe</span>
        <span className="header-item-2">Loại xe</span>
        <span className="header-item-3">Quãng đường</span>
        <span className="header-item-4">Thời gian hành trình</span>
        <span className="header-item-5">Giá vé</span>
      </div>
    </div>
    
    
    <div className="scroll-container">
        <table className="route-table">
          <tbody>
            {routes.map((route, index) => (
              <tr className="route-row" key={index}>
                <td className="route-details">
                  <span className="from-location">{route.from}</span>
                  <i className="fas fa-exchange-alt"></i>
                  <span className="to-location">{route.to}</span>
                </td>
                <td>{route.type}</td>
                <td>{route.distance}</td>
                <td>{route.duration}</td>
                <td>{route.price}</td>
                <td><button className="find-route-btn">Tìm tuyến xe</button></td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default LichTrinh;