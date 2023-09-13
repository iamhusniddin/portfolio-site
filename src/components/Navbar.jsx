import React from "react";

import "./nav.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo_div">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-R7AwqZMOERbVkB6aCZbaVEU1AG1ck3XLw&usqp=CAU"
            alt="logo"
          />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">About me</li>
          <li className="nav-item">Portfolio</li>
        </ul>
        <button className="nav-btn">Contact Me</button>
      </div>
    </>
  );
}
