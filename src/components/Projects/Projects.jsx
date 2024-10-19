import styles from "./ProjectsStyles.module.css";
import PropTypes from "prop-types";
import truthsiftIcon from "../../assets/truthsiftIcon.png";
import chessalyzeIcon from "../../assets/chessalyzeIcon.png";
import proofpressIcon from "../../assets/proofpressIcon.png";
import crosswordgenIcon from "../../assets/crosswordgenIcon.png";

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
        projectGithub="https://github.com/dlin04/chessalyze"
        projectIcon={chessalyzeIcon}
        projectName="Chessalyze"
        projectDescription={
          <p className={styles.projectDescription}>
            As a frequent player on Chess.com, I developed Chessalyze to offer a
            free alternative for game analysis. Chessalyze is a web application
            designed to simulate Chess.com&apos;s Game Review feature, which is
            only free once-a-day. Chessalyze also allows users to pull their
            games from Chess.com and store these reviews.
            <br />I chose Next.js for this project due to its simplified routing
            capabilities, making it easier to manage the dynamic content and
            user interactions within the app.
            <br />
            This is an active project.
            <br />
            Temporarily hosted at{" "}
            <a href="https://chessalyze.vercel.app/" target="_blank">
              chessalyze.vercel.app
            </a>
          </p>
        }
      />
      <ProjectCard
        projectGithub="https://github.com/DavidASC20/ProofPress"
        projectIcon={proofpressIcon}
        projectName="Proof Press"
        projectDescription={
          <p className={styles.projectDescription}>
            Originally developed as a hackathon project, Proof Press explores
            the potential of web3 technologies. This platform leverages
            cryptocurrency to incentivize user-generated content, allowing
            individuals to create posts and earn rewards for their
            contributions. By integrating financial incentives, Proof Press aims
            to foster a vibrant community of content creators and encourage
            active participation.
            <br />
            As I learn more about web development and gain experience with
            blockchain technologies, I plan to recreate this project.
          </p>
        }
      />
      <ProjectCard
        projectGithub="https://github.com/dlin04/crossword_gen"
        projectIcon={crosswordgenIcon}
        projectName="Crossword Gen"
        projectDescription={
          <p className={styles.projectDescription}>
            Crossword Gen is a puzzle generation tool built in C++ using
            recursive backtracking to efficiently create customizable crossword
            grids. I created an intuitive GUI implemented using wxWidgets,
            chosen for its cross-platform support and beginner-friendly
            documentation.
          </p>
        }
      />
    </section>
  );
}
