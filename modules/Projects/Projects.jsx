import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";

const Projects = ({ id, projects }) => {
  return (
    <section className="section" id={id}>
      <h1 className="title mb-5">projects()</h1>
      <ProjectsContainer>
        {projects.map((project) => {
          return (
            <ProjectsContainer.Project
              title={project.title}
              description={project.description}
              techs={project.techs}
              repo={project.url}
            />
          );
        })}
      </ProjectsContainer>
    </section>
  );
};

export default Projects;
