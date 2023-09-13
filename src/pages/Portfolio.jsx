import React from "react";
import "./portfolio.css";
import socialIcon from "../assets/SocialIcon.png";
import weatherImg from "../assets/weather-app.png";
import todo from "../assets/todo.png";
import slider from "../assets/Slider.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h5 className="portfolio-text">Recent Projects</h5>
      <div className="protfolio-div">
        <h2 className="portfolio-title">My Portfolio</h2>
        <button className="portfolio-btn">
          {" "}
          <img className="portfolio-btn-img" src={socialIcon} alt="" />{" "}
          <a href="https://github.com/iamhusniddin">Visit My Github</a>
        </button>
      </div>

      <div className="card-div">
        <div className="card">
          <img className="card-img" src={weatherImg} alt="" />
          <div className="card-inform">
            <h5 className="card-title">Weather app</h5>
            <p className="card-text">
              You will get detailed information about today's weather forecast.
            </p>
            <button className="card-btn">
              <a href="https://weather-appbyme.netlify.app">View the website</a>
            </button>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src={todo} alt="" />
          <div className="card-inform">
            <h5 className="card-title">Todo list</h5>
            <p className="card-text">
              You can do list of things which you have to do. It also provides
              editing and deleting...
            </p>
            <button className="card-btn">
              <a href="https://todo-listbyme.netlify.app/">View the website</a>
            </button>
          </div>
        </div>

        <div className="card">
          <img className="card-img" src={slider} alt="" />
          <div className="card-inform">
            <h5 className="card-title">Slider</h5>
            <p className="card-text">
              Give information about singers. Such as: place of birth, year, and
              nationality.
            </p>
            <button className="card-btn">
              <a href="https://sliderbyme.netlify.app/">View the website</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
