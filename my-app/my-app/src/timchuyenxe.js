import React, { useState } from 'react';
import './App.css'; // Import your custom CSS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function TimChuyenXe() {
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
    <div className="app"></div>
);
}

export default TimChuyenXe;