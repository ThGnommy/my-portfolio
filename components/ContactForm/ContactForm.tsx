import styles from "./ContactForm.module.css";

export const ContactForm = () => {

  const submitForm = (e: any) => {
    e.preventDefault()
  }

  return (
    <form
      className={styles.form}
      name="portfolio-contact-form"
      method="POST"
      data-netlify="true"
    >
      <label>Name</label>
      <input className={styles.input} type="text" name="name" required/>
      <label>Email</label>
      <input className={styles.input} type="email" name="email" required/>
      <label>Message</label>
      <textarea
        className={styles.input}
        name="message"
        cols={30}
        rows={10}
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
