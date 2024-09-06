import "../components/FooterStyles.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Aldo Safaris</h1>
          <p>To your desired destination.</p>
        </div>
        <div>
          <a href="https://www.facebook.com/amuliira/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/aldo_safaris/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        
          
        </div>
      </div>
      <div className="bottom">
       
        <p>© 2024 Aldo Safaris Tour and Travel Company Limited. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
