import React from "react";
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact_title">
        <h1>Contact</h1>
      </div>
      <div className="contact_form">
        <form>
          <label htmlFor="name">Name</label>
          <input type={"text"} id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type={"email"} id="email" name="email" />
          <label>Message</label>
          <textarea />
          <button>Send</button>
        </form>
      </div>
      <div className="contact_alternative">
        <p>
          You can also contact me through the following email address:
          <br></br>
          <br></br>
          email@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
