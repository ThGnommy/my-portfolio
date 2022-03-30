import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <form
      className={styles.form}
      name="portfolio-contact-form"
      method="POST"
      data-netlify="true"
      action="/thank-you"
    >
      <input
        type="hidden"
        name="portfolio-contact-form"
        value="portfolio-contact-form"
      />
      <div className={`${styles.formName} label-color`}>
        <input className={styles.input} type="text" name="name" placeholder="&nbsp;" required />
        <label className="dark:focus:text-secondary">Name</label>
      </div>
      <div className={`${styles.formEmail} label-color`}>
        <input className={styles.input} type="email" name="email" placeholder="&nbsp;" required />
        <label>Email</label>
      </div>
      <div className={`${styles.formMessage} label-color`}>
        <textarea
          className={styles.input}
          name="message"
          cols={30}
          rows={10}
          placeholder="&nbsp;"
          required
        ></textarea>
        <label>Message</label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
