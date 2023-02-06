import { motion } from "framer-motion";
import classes from "./ContactForm.module.css";
import { useContactForm } from "./useContactForm";

export const ContactForm = () => {
  const { errors, onSubmit } = useContactForm();

  return (
    <motion.form
      className={classes.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="portfolio-contact-form"
      data-netlify-recaptcha="true"
      method="POST"
      onSubmit={(evt) => onSubmit(evt)}
      action="/thank-you"
    >
      <input
        type="hidden"
        name="portfolio-contact-form"
        value="portfolio-contact-form"
        data-netlify="true"
      />
      <div className={`${classes.formName} label-color`}>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="&nbsp;"
        />
        <label className="dark:focus:text-secondary">Name</label>
        <div className="absolute right-0 text-red-500">{errors.name}</div>
      </div>

      <div className={`${classes.formEmail} label-color`}>
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="&nbsp;"
        />
        <label>Email</label>
      </div>
      <div className="text-red-500">{errors.email}</div>

      <div className={`${classes.formMessage} label-color`}>
        <textarea
          className={classes.input}
          name="message"
          cols={30}
          rows={10}
          placeholder="&nbsp;"
        ></textarea>
        <label>Message</label>
        <div className="absolute right-0 text-red-500">{errors.message}</div>
      </div>
      <button type="submit">Send</button>
    </motion.form>
  );
};
