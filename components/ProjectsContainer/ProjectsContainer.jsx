import styles from "./ProjectsContainer.module.css";
import Skill from "../Skill/Skill";
import SkillArea from "../SkillArea/SkillArea";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectsContainer = (props) => {
  return (
    <div className={styles["projects-container"]}>
      {[...props.children].map((child, index) => {
        return (
          <React.Fragment>
            {index === 0 || <div className={styles["project-separator"]}></div>}
            {child}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Project = ({ title, description, techs, repo }) => {
  return (
    <div className="grid p-5" style={{ gridTemplateColumns: "auto 100px" }}>
      <div className="flex flex-col gap-4 col-start-1">
        <h2 className="text-lg" style={{ color: "var(--red)" }}>
          {title}
        </h2>
        <p className="text-sm my-1">{description}</p>
        <div className="flex flex-wrap gap-4">
          {techs.map((tech) => {
            return <Skill text={tech.name} color={tech.color}></Skill>;
          })}
        </div>
      </div>
      <a
        className={
          "col-start-2 w-max p-3 rounded-lg mx-auto self-center " +
          styles["github-button"]
        }
        style={{ backgroundColor: "var(--dark)" }}
        href={repo}
        target="_blank"
      >
        <FontAwesomeIcon
          className={"text-4xl opacity-50 " + styles["github-icon"]}
          icon={faGithub}
        />
      </a>
    </div>
  );
};

ProjectsContainer.Project = Project;

export default ProjectsContainer;
