import styles from "./AboutStyles.module.css";
import profilePic from "../../assets/profilePic.png";
import derricklinResume from "../../assets/derricklinResume.pdf";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div>
        <img src={profilePic} className={styles.image} alt="Profile picture" />
      </div>

      <div className={styles.info}>
        <h1>
          Derrick <br /> Lin
        </h1>
        <h2>Student / Aspiring Software Engineer</h2>
        <p className={styles.description}>
          Hi! I'm a junior at Rensselaer Polytechnic Institute, pursuing a dual
          major in Computer Science and Mathematics. I have experience with
          full-stack web development using Javscript libraries / frameworks.
          Recently, I've shifted my focus focus towards machine learning and its
          application in day-to-day life. I'm currently working on creating an
          end-to-end project utilizing ML techniques for fake news detection.
        </p>
        <a href={derricklinResume} target="_blank">
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
}
