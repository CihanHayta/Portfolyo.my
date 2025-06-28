import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";

// Import all skill images
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";
import nodeImg from "../../assets/skills/node.png";
import graphqlImg from "../../assets/skills/graphql.png";
import mongodbImg from "../../assets/skills/mongodb.png";
import tailwindImg from "../../assets/skills/imagesTailwind.png";
import nextjsImg from "../../assets/skills/nextjs2106.logowik.com.webp";

const skillImages = {
  "HTML": htmlImg,
  "CSS": cssImg,
  "React": reactImg,
  "Node": nodeImg,
  "GraphQL": graphqlImg,
  "MongoDB": mongodbImg,
  "TailwindCss": tailwindImg,
  "Next.Js": nextjsImg
};

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
                     src={skillImages[skill.title]}
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
