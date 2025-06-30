import React from "react";
import styles from "./About.module.css";

// Import about images
import aboutImg from "/assets/about/abuout.avif";
import frontendImg from "/assets/about/imagesFront.png";
import backendImg from "/assets/about/backend.webp";
import mobileImg from "/assets/about/mob.webp";

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
              Kullanıcı odaklı, duyarlı (responsive) ve performans odaklı web siteleri tasarlayıp geliştiren deneyimli bir frontend geliştiricisiyim. Modern teknolojiler ve en iyi uygulamalarla, hem estetik hem de hızlı çalışan arayüzler yaratmaya önem veriyorum.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={backendImg} alt=""className={styles.aboutImg}  />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Yüksek performanslı, hızlı ve optimize edilmiş backend sistemleri ile ölçeklenebilir ve güvenilir API’ler geliştirme konusunda kapsamlı deneyime sahibim. Sunucu tarafında, verimli veri işleme ve entegrasyon süreçleri yürüterek, uygulamaların sorunsuz ve kesintisiz çalışmasını sağlıyorum.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={mobileImg} alt="" className={styles.aboutImg}  />
            <div className={styles.aboutItemText}>
              <h3>React Native Developer</h3>
              <p>
              React Native kullanarak, hem iOS hem de Android platformlarında çalışabilen, kullanıcı dostu, duyarlı (responsive) ve performans odaklı mobil uygulamalar geliştirme konusunda deneyimli bir yazılım geliştiricisiyim.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
