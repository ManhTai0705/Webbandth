import React, { useState } from 'react';
import './tintuc.css'; 
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
const TinTuc = () => {
    const [secretCode, setSecretCode] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaValue] = useState('75069'); // Static captcha value for now
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (captchaInput === captchaValue) {
        alert('Captcha verified and invoice searched!');
      } else {
        alert('Incorrect captcha, please try again.');
      }
    };
  
    return (
      <div className="container">
        <div className="lookup-box">
          <h2>Tra cứu hóa đơn</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Mã số bí mật"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                required
              />
            </div>
  
            <div className="captcha-group">
              <div className="captcha">
                <span>7</span>
                <span>5</span>
                <span>0</span>
                <span>6</span>
                <span>9</span>
              </div>
              <button type="button" className="refresh">&#8635;</button>

              <input
                type="text"
                placeholder="Nhập mã xác thực"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
              </div>

  
            <button type="submit" className="search-btn">Tra cứu</button>
          </form>
        </div>
      </div>
    );
  };

export default TinTuc;