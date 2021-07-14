import styles from "./ExperiencePill.module.css";

const ExperiencePill = ({ position, company, description, className }) => {
  return (
    <div className={styles.container + ` ${className}`}>
      <h2 className={styles.position}>{position}</h2>
      <h3 className={styles.company}>{company}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ExperiencePill;
