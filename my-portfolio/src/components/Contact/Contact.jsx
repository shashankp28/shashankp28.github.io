import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = ({ onClose }) => {
  const [emailError, setEmailError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    emailjs.init("NB3DYCFLOAodJwjF-");
    const templateParams = {
      to_name: "Shashank P",
      from_name: e.target.name.value,
      from_email: emailValue,
      message: e.target.message.value,
    };

    emailjs
      .send("service_j9f15cs", "template_r8igi6c", templateParams)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setEmailSent(true);
          setSendError(""); // Clear any previous error
          e.target.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          setEmailSent(false);
          setSendError("Error sending email. Please try again later.");
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
            {emailSent && (
              <p className="success-message">Email sent successfully!</p>
            )}
            {sendError && <p className="error-message">{sendError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
