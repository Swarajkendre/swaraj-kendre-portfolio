import { portfolioData } from '../data';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Delivering Value Through Our Services</p>
        
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <a href="#" className="read-more">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
