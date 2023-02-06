import { NextPage } from "next";
import Head from "next/head";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";
// import ContactForm from "../components/ContactForm";
import classes from "../components/ContactForm/ContactForm.module.css";
import { useContactForm } from "../components/ContactForm/useContactForm";

export const Contact: NextPage = () => {
  const { errors, onSubmit } = useContactForm();
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <h2 className="text-4xl font-medium pb-8">Contact Me</h2>
        <motion.form
          className={classes.form}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="portfolio-contact-form"
          method="POST"
          onSubmit={onSubmit}
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
            <div className="absolute right-0 text-red-500">
              {errors.message}
            </div>
          </div>
          <button type="submit">Send</button>

          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
        </motion.form>
      </motion.section>
    </>
  );
};

export default Contact;
