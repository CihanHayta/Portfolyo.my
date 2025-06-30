import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
         <img src="public/assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:cihanhayta8080@gmail.com">cihanhayta8080@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src="public/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/cihan-hayta-4586671a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">linkedin.com/CihanHayta</a>
        </li>

        <li className={styles.link}>
         <img src="public/assets/contact/githubIcon.png" alt="GitHub Icon" />
          <a href="https://github.com/CihanHayta" target="_blank">github.com/CihanHayta</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
