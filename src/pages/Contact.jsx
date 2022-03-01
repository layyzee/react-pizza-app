import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type={"text"} placeholder="Enter Full name..." />
          <label htmlFor="email">Email</label>
          <input name="email" type={"email"} placeholder="Enter email..." />
          <label htmlFor="message">Message</label>
          <textarea
            rows={"6"}
            placeholder="Enter message..."
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
