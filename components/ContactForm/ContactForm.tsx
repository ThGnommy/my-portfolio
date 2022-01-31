import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <form
      className={styles.form}
      name="contact"
      action="/thankyou"
      method="POST"
      data-netlify="true"
    >
      <label>Name</label>
      <input className={styles.input} type="text" name="name" />
      <label>Email</label>
      <input className={styles.input} type="email" name="email" />
      <label>Message</label>
      <textarea
        className={styles.input}
        name="message"
        cols={30}
        rows={10}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
