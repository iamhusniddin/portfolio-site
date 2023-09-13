import React from "react";
import "./about.css";
import photo2 from "../assets/photo2.jpg";
export default function About() {
  return (
    <div className="about-div">
      <div className="photo2-div">
        <img className="photo2" src={photo2} alt="" />
      </div>
      <div className="about-right-div">
        <p className="about-name">About</p>
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I am fronted developer who write clean, elegant and efficient code. I
          like to craft solid and scaleble fronted products with great user
          experiences. I work with my hands to make magic happen on the
          internet. Currently, I'm focused on building accessible,
          human-centered products with modern technologies and I love what I
          do. Moreover, I know english language with IELTs sertificate and I'm
          studying Uzbekistan State World Languages University.
        </p>
      </div>
    </div>
  );
}
