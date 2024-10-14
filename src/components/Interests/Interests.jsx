import styles from "./InterestsStyles.module.css";
import tetoReplay from "../../assets/tetoReplay.mp4";

export default function Interests() {
  return (
    <section id="interests" className={styles.container}>
      <h1 className="sectionTitle">Interests</h1>
      <video className={styles.video} controls>
        <source src={tetoReplay} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className={styles.interestParagraph}>
        Recently, I&apos;ve become very invested in versus Tetris. As opposed to
        classic Tetris, modern versus Tetris has no speed gap and players send
        "garbage" lines to their opponent&apos;s board in an attempt to top them
        out. The key to victory lies in efficient piece placement and quick
        decision-making. To strive for the "correct" way to play is to utilize
        the 7-bag system, which guarantees that players will receive all seven
        Tetrominoes before any piece repeats, and using the T-piece to clear
        T-spins in an effort to send the most lines.
        <br />I enjoy this aspect of Tetris, which requires the player to always
        find the most optimal solution in the heat of the moment. I hope to
        eventually make a Tetris bot, or some other application that would be
        beneficial and available to the public who are trying to improve at the
        game. Enjoy a clip of me playing against one of the strongest bots in
        Tetr.io.
      </p>

      <p className={styles.interestParagraph}>
        I look forward to keeping this interests section updated with other
        ideas that come to mind!
      </p>
    </section>
  );
}
