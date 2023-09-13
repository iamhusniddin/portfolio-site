import React from "react";
import "./contact.css";
import { useGlobalContext } from "./context";

export default function Contact() {
  const {
    Name,
    setFName,
    LastName,
    setLName,
    Email,
    setEmail,
    Number,
    setNumber,
    Message,
    setMessage,
  } = useGlobalContext();

  const handleSignUp = () => {
    if (
      Name.length === 0 ||
      LastName.length === 0 ||
      Email.length === 0 ||
      Number.length === 0
    ) {
      alert("Please, fill in all the details");
    } else {
      const savedData = { Name, LastName, Email, Number, Message };
      localStorage.setItem("Data", JSON.stringify(savedData));
    }
  };

  return (
    <div className="contact">
      <div>
        <h5 className="contact-name">Get In Touch</h5>
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div>
        <form>
          <div className="main-wrapper">
            <div className="lab-wrapper">
              <label className="fName-label" htmlFor="fName">
                First name
              </label>
              <input
                onChange={(e) => setFName(e.target.value)}
                className="fName-inp"
                placeholder="First name"
                type="text"
                name="fName"
                id="fName"
              />
            </div>

            <div className="lab-wrapper">
              <label className="fName-label" htmlFor="lName">
                Last name
              </label>
              <input
                onChange={(e) => setLName(e.target.value)}
                className="fName-inp"
                placeholder="Last name"
                type="text"
                name="lName"
                id="lName"
              />
            </div>

            <div className="lab-wrapper">
              <label className="fName-label" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="fName-inp"
                placeholder="Email"
                type="text"
                name="email"
                id="email"
              />
            </div>

            <div className="lab-wrapper">
              <label className="fName-label" htmlFor="phone">
                Phone number
              </label>
              <input
                onChange={(e) => setNumber(e.target.value)}
                className="fName-inp"
                placeholder="Number"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
          </div>

          <div className="message-div">
            <label className="message-lab" htmlFor="message">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="message-inp"
              name="message"
              id="message"
              cols="30"
              placeholder="Type your message..."
              rows="5"
            ></textarea>
          </div>

          <div className="agree-div">
            <input
              className="agree-inp"
              type="checkbox"
              name="agree"
              id="agree"
            />
            <label className="agree-lab" htmlFor="agree">
              I accept the terms
            </label>
          </div>

          <button onClick={handleSignUp} className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
