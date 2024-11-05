import React, { useState } from 'react';
import './tracuuve.css'; 
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

function TraCuuVe() {
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
    <div className='app'>
      <div className="container2">
        <div className="seat-selection-container">
          <div className="header">
            <h2>Chọn ghế</h2>
            <a href="#">Thông tin xe</a>
          </div>
          <div className="plane">
            <div className="exit exit--front fuselage"></div>
            <ol className="cabin fuselage">
              {/* Các hàng ghế */}
              {/* Nội dung ghế bạn đã có */}
            </ol>
            <div className="exit exit--back fuselage"></div>
          </div>
          <div className="legend">
            <ul>
              <li><span className="sold"></span> Đã bán</li>
              <li><span className="available"></span> Còn trống</li>
              <li><span className="selected"></span> Đang chọn</li>
            </ul>
          </div>
        </div>

        <div className="info-container">
          <div className="info-box">
            <h2>Thông tin lượt đi</h2>
            <p>Tuyến xe: BX An Nhơn - BX Miền Tây</p>
            <p>Thời gian xuất bến: 16:45 05/10/2024</p>
            <p>Số lượng ghế: 0 Ghế</p>
            <p>Số ghế: --</p>
            <p>Tổng tiền lượt đi: 0₫</p>
          </div>

          <div className="info-box">
            <h2>Chi tiết giá</h2>
            <p>Giá vé lượt đi: 0₫</p>
            <p>Phí thanh toán: 0₫</p>
            <p>Tổng tiền: 0₫</p>
          </div>
        </div>
      </div>
      
      <div className="booking-container">
        <div className="customer-info">
          <h2>Thông tin khách hàng</h2>
          <div className="customer-form">
            <div className="form-group">
              <label>Họ và tên *</label>
              <input type="text" value="Phan Mạnh Tài" />
            </div>
            <div className="form-group">
              <label>Số điện thoại *</label>
              <input type="text" value="0765460775" />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" value="phanmanhtai0@gmail.com" />
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Chấp nhận <span className="highlight">điều khoản</span> đặt vé & chính sách bảo mật thông tin của FUTABusline</label>
            </div>
          </div>
        </div>

        <div className="terms">
          <h3>ĐIỀU KHOẢN & LƯU Ý</h3>
          <p>
            (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINE.
          </p>
          <p>
            (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng đài trung chuyển <span className="highlight">1900 6918</span>.
          </p>
        </div>
      </div>
    </div>
);
}

export default TraCuuVe;