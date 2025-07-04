import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

import styles from "./Project.module.css";
const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projeler</h2>

      {/* sliderjs gelicek */}
      {/* <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div> */}

      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>

      
      
    </section>
    
  );
};

export default Projects;
