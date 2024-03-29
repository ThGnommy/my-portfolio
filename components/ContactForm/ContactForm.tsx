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
      method="POST"
      onSubmit={(e) => onSubmit(e)}
      action="/thank-you"
    >
      <input
        type="hidden"
        name="portfolio-contact-form"
        value="portfolio-contact-form"
      />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className={`${classes.formName} label-color`}>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="&nbsp;"
        />
        <label className="dark:focus:text-secondary">Name</label>
        {errors.name && (
          <div className="absolute sm:text-base text-sm tracking-tight -top-3 -right-3 text-red-500 bg-custom-dark dark:bg-primary rounded-full px-2">
            {errors.name}
          </div>
        )}
      </div>

      <div className={`${classes.formEmail} label-color`}>
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="&nbsp;"
        />
        <label>Email</label>
        {errors.email && (
          <div className="absolute sm:text-base text-sm tracking-tight -top-3 -right-3 text-red-500 bg-custom-dark dark:bg-primary rounded-full px-2">
            {errors.email}
          </div>
        )}
      </div>

      <div className={`${classes.formMessage} label-color`}>
        <textarea
          className={classes.input}
          name="message"
          cols={30}
          rows={10}
          placeholder="&nbsp;"
        ></textarea>
        <label>Message</label>
        {errors.message && (
          <div className="absolute sm:text-base text-sm tracking-tight -top-3 -right-3 text-red-500 bg-custom-dark dark:bg-primary rounded-full px-2">
            {errors.message}
          </div>
        )}
      </div>
      <button type="submit">Send</button>
    </motion.form>
  );
};
