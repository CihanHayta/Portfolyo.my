import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";

// Import all skill images
const htmlImg = "/assets/skills/html.png";
const cssImg = "/assets/skills/css.png";
const reactImg = "/assets/skills/react.png";
const nodeImg = "/assets/skills/node.png";
const graphqlImg = "/assets/skills/graphql.png";
const mongodbImg = "/assets/skills/mongodb.png";
const tailwindImg = "/assets/skills/imagesTailwind.png";
const nextjsImg = "/assets/skills/nextjs2106.logowik.com.webp";

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
      <h2 className={styles.title}>Deneyimler</h2>
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
