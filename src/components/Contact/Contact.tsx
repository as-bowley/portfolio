import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formSent, setFormSent] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;

    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_ltre3gq",
        "template_mbejo2q",
        currentForm,
        "30G_krHNFZiPV6kB_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="contact" id="about">
      <div className="contact_title">
        <h1>Contact</h1>
      </div>
      <div className="contact_form">
        <fieldset disabled={formSent ? true : false}>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type={"text"} id="name" name="name" minLength={2} />
            <label htmlFor="email">Email</label>
            <input type={"email"} id="email" name="email" />
            <label>Message</label>
            <textarea name="message" minLength={2} />
            <button className={`${formSent ? `disabledButton` : ""}`}>
              Send
            </button>
            {formSent ? (
              <span>
                Message sent! <br></br>
                <br></br>Thanks for contacting me! I'll respond ASAP!
              </span>
            ) : null}
          </form>
        </fieldset>
      </div>
      <div className="contact_alternative">
        <p>
          You can also contact me through the following email address:
          <br></br>
          <br></br>
          <strong>alexstubowley@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Contact;
