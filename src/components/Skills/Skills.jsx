import styles from "./SkillsStyles.module.css";
import htmlIcon from "../../assets/skills/HTML5.png";
import tailwindIcon from "../../assets/skills/TailwindCSS.png";
import javascriptIcon from "../../assets/skills/JavaScript.png";
import typescriptIcon from "../../assets/skills/TypeScript.png";
import nodeIcon from "../../assets/skills/Node.png";
import reactIcon from "../../assets/skills/React.png";
import nextIcon from "../../assets/skills/Next.png";
import pythonIcon from "../../assets/skills/Python.png";
import javaIcon from "../../assets/skills/Java.png";
import cplusplusIcon from "../../assets/skills/C++.png";
import cIcon from "../../assets/skills/C.png";
import mongodbIcon from "../../assets/skills/MongoDB.png";
import postgreSQLIcon from "../../assets/skills/PostgresSQL.png";
import gitIcon from "../../assets/skills/Git.png";

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
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillCard skillImage={htmlIcon} skillName="HTML" />
        <SkillCard skillImage={tailwindIcon} skillName="Tailwind CSS" />
        <SkillCard skillImage={javascriptIcon} skillName="JavaScript" />
        <SkillCard skillImage={typescriptIcon} skillName="TypeScript" />
        <SkillCard skillImage={nodeIcon} skillName="Node" />
      </div>
      <hr className={styles.firstHR} />
      <div className={styles.skillList}>
        <SkillCard skillImage={reactIcon} skillName="React" />
        <SkillCard skillImage={nextIcon} skillName="Next" />
        <SkillCard skillImage={pythonIcon} skillName="Python" />
        <SkillCard skillImage={javaIcon} skillName="Java" />
        <SkillCard skillImage={cIcon} skillName="C" />
        <SkillCard skillImage={cplusplusIcon} skillName="C++" />
      </div>
      <hr className={styles.secondHR} />
      <div className={styles.skillList}>
        <SkillCard skillImage={mongodbIcon} skillName="MongoDB" />
        <SkillCard skillImage={postgreSQLIcon} skillName="PostgreSQL" />
      </div>
      <hr className={styles.thirdHR} />
      <div className={styles.skillList}>
        <SkillCard skillImage={gitIcon} skillName="Git" />
      </div>
    </section>
  );
}
