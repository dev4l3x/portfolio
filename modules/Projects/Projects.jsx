import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";

const Projects = (props) => {
  return (
    <section className="section" id={props.id}>
      <h1 className="title mb-5">projects()</h1>
      <ProjectsContainer>
        <ProjectsContainer.Project></ProjectsContainer.Project>
        <ProjectsContainer.Project></ProjectsContainer.Project>
      </ProjectsContainer>
    </section>
  );
};

export default Projects;
