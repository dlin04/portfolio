import styles from "./InterestsStyles.module.css";
import tetoReplay from "../../assets/tetoReplay.mp4";

export default function Interests() {
  return (
    <section id="interests" className={styles.container}>
      <h1 className="sectionTitle">Interests</h1>
      <h3>Versus Tetris</h3>
      <video className={styles.video} controls>
        <source src={tetoReplay} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className={styles.interestParagraph}>
        The idea of a bot that can interact with the game environment and
        dynamically adapt to different situations fascinates me. As I continue
        to grow as a programmer (and become a better Tetris player), this is a
        project I hope to build.
      </p>
    </section>
  );
}
