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
          Hi! I&apos;m a junior at Rensselaer Polytechnic Institute, pursuing a
          dual major in Computer Science and Mathematics. I have experience with
          full-stack web development using JavaScript libraries / frameworks.
          Recently, I&apos;ve shifted my focus towards machine learning and its
          application in day-to-day life. Currently building a project for fake
          news detection. Find out more below!
        </p>
        <a href={derricklinResume} target="_blank">
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
}
