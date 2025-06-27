import React from "react";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Hakkımda</h2>
      

      <div className={styles.content}>
        <img src="src/assets/about/abuout.avif" alt="Me sitting with a laptop"  className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="src/assets/about/imagesFront.png" alt="" className={styles.aboutImg} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="src/assets/about/backend.webp" alt=""className={styles.aboutImg}  />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="src/assets/about/mob.webp" alt="" className={styles.aboutImg}  />
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
