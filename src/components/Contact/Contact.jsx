import styles from "./ContactStyles.module.css";
import gmailIcon from "../../assets/gmailIcon.png";
import outlookIcon from "../../assets/outlookIcon.png";
import githubIcon from "../../assets/githubIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.png";

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactIconRow}>
        <a href="mailto:derricklin@gmail.com">
          <img
            src={gmailIcon}
            alt="G-mail icon"
            className={styles.contactIcon}
          />
        </a>
        <a href="mailto:lind7@rpi.edu">
          <img
            src={outlookIcon}
            alt="Outlook icon"
            className={styles.contactIcon}
          />
        </a>
        <a href="https://github.com/dlin04" target="_blank">
          <img
            src={githubIcon}
            alt="Github Icon"
            className={styles.contactIcon}
          />
        </a>
        <a href="https://www.linkedin.com/in/derricklin-/" target="_blank">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className={styles.contactIcon}
          />
        </a>
      </div>
    </section>
  );
}
