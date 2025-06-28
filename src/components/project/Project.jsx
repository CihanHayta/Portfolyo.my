import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

// Import project images
import spotifyImg from "../../assets/projects/Ekran Resmi 2025-06-21 23.13.56.png";
import groceryImg from "../../assets/projects/Ekran Resmi 2025-06-22 00.30.00.png";
import shoesImg from "../../assets/projects/ekran_ayakabi.jpg";
import dashboardImg from "../../assets/projects/Ekran Resmi 2025-06-27 20.27.36.png";
import renteCarImg from "../../assets/projects/Ekran Resmi 2025-06-27 20.38.38.png";
import hotelImg from "../../assets/projects/Ekran Resmi 2025-06-27 20.44.51.png";

const projectImages = {
  "Spotify Clone": spotifyImg,
  "Grocery Store App ": groceryImg,
  "Shoes E-commerce": shoesImg,
  " Next.js Dashboard": dashboardImg,
  "Rente-Car": renteCarImg,
  "Hotel Website": hotelImg
};

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      {/* sliderjs gelicek */}
      {/* <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div> */}

      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={{...project, imageSrc: projectImages[project.title]}} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
