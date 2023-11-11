import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.scss";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
// emailjs.com 
    // template- New FitMember {{user_email}}
    //             Best wishes, EmailJS team
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join">
      <div className="l-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span> <span>LEVEL UP</span>
        </div>
        <div>
          <span className="stroke-text">YOUR BODY</span> <span>WITH US?</span>
        </div>
      </div>
      <div className="r-j">
        <form ref={form} onSubmit={sendEmail} action="" className="email-c">
          <input type="email" name="email" placeholder="Enter your e-mail..." />
          <button type="submit" className="btn btn-j">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
