import React from "react";
import styles from "./Hero.module.css";
import MultiText from "../text-animation/TextAnime";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Import hero image


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ben Cihan Hayta</h1>
        <p className={styles.description}>
          Web ve mobil dünyasında JavaScript temelli teknolojilerle kullanıcı
          odaklı, performanslı ve modern uygulamalar geliştiriyorum. Frontend'de
          React, mobilde React Native, backend tarafında ise güçlü altyapılarla
          uçtan uca projeler üretiyorum. Yeni teknolojileri keşfetmeyi, temiz
          kod yazmayı ve kullanıcı deneyimini ön planda tutmayı seviyorum.
        </p>

        <MultiText/>

        <div className={styles.animateContainer}>
          <div>
            <a className={styles.githubIcon}
            href="https://github.com/CihanHayta" target="_blank">
              <FaGithub />
            </a>
          </div>

          <div>
            <a
            className={styles.linkedinIcon}
              href="https://www.linkedin.com/in/cihan-hayta-4586671a0/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <img
        src={"src/assets/hero/WhatsApp Image 2025-05-01 at 20.37.41 kopyası.jpeg"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};

export default Hero;
