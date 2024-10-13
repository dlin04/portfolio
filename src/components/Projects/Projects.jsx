import styles from "./ProjectsStyles.module.css";
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
          <h2>{projectName}</h2>
          {projectDescription}
        </div>
      </span>
    );
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <ProjectCard
        projectGithub="https://github.com/dlin04/truth_sift"
        projectIcon={truthsiftIcon}
        projectName="Truth Sift"
        projectDescription={
          <p className={styles.projectDescription}>
            In light of the election year, Truth Sift aims to combat the spread
            of misinformation by utilizing machine learning techniques for fake
            news detection. This platform will analyze and classify news
            articles, helping users identify credible sources and filter out
            misleading content. I hope to begin this project as I add the
            finishing touches to Chessalyze.
            <br />
            This is an upcoming project.
          </p>
        }
      />
      <ProjectCard
        projectGithub="https://github.com/dlin04/chessalyze"
        projectIcon={chessalyzeIcon}
        projectName="Chessalyze"
        projectDescription={
          <p className={styles.projectDescription}>
            As a frequent player on Chess.com, I developed Chessalyze to offer a
            free alternative for game analysis. Chessalyze is a web application
            designed to simulate Chess.com's Game Review feature, which is only
            free once-a-day. The app allows users to upload their chess games,
            analyze key moments, review move accuracy, and identify mistakes,
            providing players with valuable insights to improve their
            performance.
            <br />I chose Next.js for this project due to its seamless
            integration of server-side rendering (SSR) and static site
            generation (SSG), which boosts performance when processing large
            chess game datasets. Next.js also provides excellent routing
            capabilities, making it easier to manage the dynamic content and
            user interactions within the app. Additionally, its full-stack
            features simplify API development, ensuring a smooth and responsive
            user experience.
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
            My team and I were able to create the basic structure of
            authentication with MetaMask and post creation / deletion, but did
            not manage to integrate the crytocurrency aspect. As I learn more
            about web development and gain experience with blockchain
            technologies, I plan to recreate this project.
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
            grids. The algorithm itself was originally an assignment from my
            CSCI 1200 Data Structures and Algorithm class, and in the contest,
            my algorithm placed 90th percentile in a class of over 400 students.
            <br />I decided to further the project by creating an intuitive GUI,
            implemented using wxWidgets, mainly for cross-platform support and
            its good documentation.
          </p>
        }
      />
    </section>
  );
}

/*


      <ProjectCard
        projectGithub=""
        projectIcon={crosswordgenIcon}
        projectName="Crossword Gen"
        projectDescription={
          <>
            <p>
              Crossword Gen is a puzzle generation tool built in C++ using
              recursive backtracking to efficiently create customizable
              crossword grids. The algorithm itself was originally an assignment
              from my CSCI 1200 Data Structures and Algorithm class, and in the
              contest, my algorithm placed 90th percentile in a class of over
              400 students.
            </p>
            <p>
              I decided to further the project by creating an intuitive GUI,
              implemented using wxWidgets, mainly for cross-platform support and
              its good documentation.
            </p>
          </>
        }
      />
*/
