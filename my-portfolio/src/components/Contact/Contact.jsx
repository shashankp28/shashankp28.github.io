import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = ({ onClose }) => {
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;

    // Email validity check using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Clear the email error message if it was previously set
    setEmailError("");

    emailjs.init("YOUR_USER_ID");
    const templateParams = {
      to_name: "Recipient's Name",
      from_name: e.target.name.value,
      from_email: emailValue,
      message: e.target.message.value,
    };

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          e.target.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="contact-overlay">
      <div className="contact-content">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="button-container">
            <button type="button" onClick={onClose} className="close-button">
              Close
            </button>
            <button type="submit" className="send-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
