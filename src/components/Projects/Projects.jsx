import styles from "./ProjectsStyles.module.css";
import PropTypes from "prop-types";
import chessalyzeIcon from "../../assets/chessalyzeIcon.png";
import plutusIcon from "../../assets/plutusIcon.png";

export default function Projects() {
  const ProjectCard = ({
    projectGithub,
    projectIcon,
    projectName,
    projectDescription,
  }) => {
    return (
      <span>
        <a href={projectGithub} target="_blank">
          <img src={projectIcon} className={styles.projectIcon} />
        </a>
        <div className={styles.projectInfo}>
          <h2>
            <a href={projectGithub} target="_blank">
              {projectName}
            </a>
          </h2>
          {projectDescription}
        </div>
      </span>
    );
  };

  ProjectCard.propTypes = {
    projectGithub: PropTypes.string.isRequired,
    projectIcon: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.node.isRequired,
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <ProjectCard
        projectIcon={plutusIcon}
        projectName="Plutus"
        projectDescription={
          <p className={styles.projectDescription}>
            Plutus is a Discord bot built using Python and BeautifulSoup to
            scrape GitHub repositories for the latest job postings.
            <br />
            Active project!
          </p>
        }
      />
      <ProjectCard
        projectGithub="https://github.com/dlin04/chessalyze"
        projectIcon={chessalyzeIcon}
        projectName="Chessalyze"
        projectDescription={
          <p className={styles.projectDescription}>
            Chessalyze is a web application designed to simulate
            Chess.com&apos;s Game Review feature, which is only free once-a-day.
            Chessalyze also allows users to pull their games from Chess.com and
            store these reviews.
            <br />
            Active project!
            <br />
            Temporarily hosted at{" "}
            <a href="https://chessalyze.vercel.app/" target="_blank">
              chessalyze.vercel.app
            </a>
          </p>
        }
      />
    </section>
  );
}
