import React from "react";
import photo from "../assets/photo.jpg";
import "./home.css";
export default function Home() {
  return (
    <div className="home-div">
      <div className="home-inform">
        <h5 className="home-name">Hey, I am Husniddin</h5>
        <h2 className="home-title">
          And I'm a <span>Fronted Developer</span>
        </h2>
        <p className="home-text">
          I like building amazing websites with JavaScript, and many more...
        </p>
        <button className="home-btn"><a href="https://t.me/iamhusniddin">Get In Touch</a></button>
      </div>
      <div className="home-photo-div">
        <img className="home-photo" src={photo} alt="" />
      </div>
    </div>
  );
}
