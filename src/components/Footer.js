import React from "react";
import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +234 888 888 8888
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@aanigeria.com
            </h4>
          </div>
        </div>
        <div className="form">
          <form>
            <label>Your Name</label> <br />
            <input type="text" />
            <br />
            <label>Email</label>
            <br />
            <input type="email" />
            <br />
            <label>Subject</label>
            <br />
            <input type="text" />
            <br />
            <label>Message</label>
            <br />
            <textarea rows="6" placeholder="Type Your Message Here"></textarea>
            <br />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
