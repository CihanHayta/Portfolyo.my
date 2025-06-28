import React from "react";
import styles from "./Contact.module.css";

// Import contact images
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:cihanhayta8080@gmail.com">cihanhayta8080@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/cihan-hayta-4586671a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">linkedin.com/CihanHayta</a>
        </li>

        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/CihanHayta" target="_blank">github.com/CihanHayta</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
