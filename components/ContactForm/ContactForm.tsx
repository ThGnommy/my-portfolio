import classes from "./ContactForm.module.css";
import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <motion.form
      className={classes.form}
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
      <div className={`${classes.formName} label-color`}>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="&nbsp;"
          required
        />
        <label className="dark:focus:text-secondary">Name</label>
      </div>
      <div className={`${classes.formEmail} label-color`}>
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="&nbsp;"
          required
        />
        <label>Email</label>
      </div>
      <div className={`${classes.formMessage} label-color`}>
        <textarea
          className={classes.input}
          name="message"
          cols={30}
          rows={10}
          placeholder="&nbsp;"
          required
        ></textarea>
        <label>Message</label>
      </div>
      <button type="submit">Send</button>
    </motion.form>
  );
};
