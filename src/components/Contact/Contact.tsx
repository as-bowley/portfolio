import "./Contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

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
    <motion.div
      className="contact"
      initial="initial"
      animate="animate"
      variants={parentVariants}
    >
      <motion.div
        className="contact__title"
        initial="initial"
        animate="animate"
      >
        <h1>Contact</h1>
      </motion.div>
      <motion.div
        className="contact__container"
        id="about"
        initial="initial"
        animate="animate"
        variants={childVariants}
      >
        <motion.div
          className="contact_form"
          initial="initial"
          animate="animate"
          variants={childVariants}
        >
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
        </motion.div>
        <motion.div
          className="contact_alternative"
          initial="initial"
          animate="animate"
          variants={childVariants}
        >
          <p>
            You can also contact me through the following email address:
            <br></br>
            <strong>alexstubowley@gmail.com</strong>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
