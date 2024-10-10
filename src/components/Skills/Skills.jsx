import styles from "./SkillsStyles.module.css";
import htmlIcon from "../../assets/skills/HTML5.png";
import tailwindIcon from "../../assets/skills/TailwindCSS.png";
import javascriptIcon from "../../assets/skills/JavaScript.png";
import typescriptIcon from "../../assets/skills/TypeScript.png";
import nodeIcon from "../../assets/skills/Node.png";

export default function Skills() {
  const SkillCard = ({ skillImage, skillName }) => {
    return (
      <span>
        <img
          src={skillImage}
          className={styles.skillIcons}
          alt={`${skillName} image`}
        />
        <p>{skillName}</p>
      </span>
    );
  };

  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <SkillCard skillImage={htmlIcon} skillName="HTML" />
      <SkillCard skillImage={tailwindIcon} skillName="Tailwind CSS" />
      <SkillCard skillImage={javascriptIcon} skillName="JavaScript" />
      <SkillCard skillImage={typescriptIcon} skillName="TypeScript" />
      <SkillCard skillImage={nodeIcon} skillName="Node" />
    </section>
  );
}