import React from "react";
import styles from "./About.module.css";

// Import about images
import aboutImg from "../../assets/about/abuout.avif";
import frontendImg from "../../assets/about/imagesFront.png";
import backendImg from "../../assets/about/backend.webp";
import mobileImg from "../../assets/about/mob.webp";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Hakkımda</h2>
      

      <div className={styles.content}>
        <img src={aboutImg} alt="Me sitting with a laptop"  className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={frontendImg} alt="" className={styles.aboutImg} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={backendImg} alt=""className={styles.aboutImg}  />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={mobileImg} alt="" className={styles.aboutImg}  />
            <div className={styles.aboutItemText}>
              <h3>React Native Developer</h3>
              <p>
                I'm a React Native developer with experience in building
                responsive and optimized mobile applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
