import styles from "./ProjectsStyles.module.css";

export default function Projects() {
  const ProjectCard = ({ projectIcon, projectName, projectDescription }) => {
    return <p>temp</p>;
  };

  return (
    <section id="projects" className={styles.container}>
      <h1>Projects</h1>
      <ProjectCard />
    </section>
  );
}
