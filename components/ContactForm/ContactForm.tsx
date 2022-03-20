import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const submitForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      className={styles.form}
      name="portfolio-contact-form"
      method="POST"
      data-netlify="true"
      action="/thankyou"
    >
      <input type="hidden" name="portfolio-contact-form" value="portfolio-contact-form" />
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
          autoFocus
        ></textarea>
        <label>Message</label>
      </div>
      <button type="submit">
        Send
      </button>
    </form>
  );
};
