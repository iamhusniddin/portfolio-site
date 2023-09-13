import React from "react";
import "./footer.css";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-img-div">
        <img
          className="footer-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-R7AwqZMOERbVkB6aCZbaVEU1AG1ck3XLw&usqp=CAU"
          alt=""
        />
      </div>

      <ul className="footer-list">
        <li className="footer-item">
          <a href="#">Home</a>
        </li>
        <li className="footer-item">About me</li>
        <li className="footer-item">Portfolio</li>
        <li className="footer-item">Contact</li>
      </ul>

      <div className="icons-div">
        <a className="icons" href="">
          <FaFacebookF />
        </a>
        <a className="icons" href="https://www.instagram.com/iam_husnidd1n/">
          <FaInstagram />
        </a>
        <a className="icons" href="https://www.linkedin.com/in/husniddin-hamidov-93b6a3270/">
          <FaLinkedin />
        </a>
        <a className="icons" href="https://t.me/iamhusniddin">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}
