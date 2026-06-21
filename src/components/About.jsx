import { portfolioData } from '../data';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <img src="Octocat.png" alt="Swaraj" className="about-img" />
            </div>
          </div>
          
          <div className="about-text">
            <h2>About Me</h2>
            <h3 className="about-subtitle">The Story Behind {portfolioData.name.split(' ')[0]} Kendre</h3>
            <p className="about-description">
              {portfolioData.careerObjective}
            </p>
            
            <div className="stats">
              <div className="stat">
                <h4>{portfolioData.stats.projects}</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>{portfolioData.stats.skills}</h4>
                <p>Skills & Technologies</p>
              </div>
              <div className="stat">
                <h4>{portfolioData.stats.experience}</h4>
                <p>Years in Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
