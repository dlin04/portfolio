import styles from "./FooterStyles.module.css";

export default function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Derrick Lin <br /> All rights reserved.
      </p>
    </section>
  );
}
