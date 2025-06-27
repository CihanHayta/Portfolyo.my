import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <motion.img
                     src={(skill.imageSrc)}
                    alt="Logo"
                    style={{ width: "100px", height: "100px" }}
                    whileHover={{
                      rotate: 360,
                      transition: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear",
                      },
                    }}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
