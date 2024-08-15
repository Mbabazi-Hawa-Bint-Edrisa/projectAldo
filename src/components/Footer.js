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
        {/* <div>
          <h4>Project</h4>
          <a href="#">ChangeLog</a>
          <a href="#">Status</a>
          <a href="#">License</a>
          <a href="#">All Versions</a>
        </div> */}
        {/* <div>
          <h4>Community</h4>
          <a href="#">GitHub</a>
          <a href="#">Issues</a>
          <a href="#">Projects</a>
          <a href="#">Twitter</a>
        </div> */}
        {/* <div>
        <h4>Help</h4>
          <a href="javascript:void(0)" onClick={() => alert('Support Page Coming Soon!')}>
            Support
          </a>
          <a href="javascript:void(0)" onClick={() => alert('Troubleshooting Page Coming Soon!')}>
            Troubleshooting
          </a>
          <a href="javascript:void(0)" onClick={() => alert('Contact Us: Call Us at +256 705 425 626 or +256 779 299 426')}>
            Contact Us @ Call Us: +256 705 425 626 or +256 779 299 426
          </a>
        </div> */}
        <p>© 2024 Aldo Safaris Tour and Travel Company Limited. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
