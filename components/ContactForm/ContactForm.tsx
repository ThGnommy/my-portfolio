import { MutableRefObject, useRef, useState } from "react";
import Modal from "../Modal";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef<any>(null);

  const submitForm = (e: any) => {
    e.preventDefault();
    setShowModal(true);
    setFormSubmitted(true);

    let formData = new FormData(formRef.current);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <form
      className={styles.form}
      name="portfolio-contact-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      ref={formRef}
      onSubmit={submitForm}
    >
      <input
        type="hidden"
        name="portfolio-contact-form"
        value="portfolio-contact-form"
      />
      <div className={styles.formName}>
        <input className={styles.input} type="text" name="name" required />
        <label>Name</label>
      </div>
      <div className={styles.formEmail}>
        <input className={styles.input} type="email" name="email" required />
        <label>Email</label>
      </div>
      <div className={styles.formMessage}>
        <textarea
          className={styles.input}
          name="message"
          cols={30}
          rows={10}
          required
        ></textarea>
        <label>Message</label>
      </div>
      <button disabled={formSubmitted ? true : false} type="submit">
        Send
      </button>
      <Modal state={showModal} setState={setShowModal}>
        <div>
          <p className="text-lg">Thank you for contacting me 🧡</p>
          <hr className="my-4" />
          <p className="text-lg">I'll reply as soon as possibile!</p>
        </div>
      </Modal>
    </form>
  );
};
