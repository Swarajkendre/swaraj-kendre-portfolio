import { portfolioData } from '../data';

function Skills() {
  const skillCategories = [
    { title: "Languages", skills: portfolioData.skills.languages, icon: "💬" },
    { title: "Backend", skills: portfolioData.skills.backend, icon: "⚙️" },
    { title: "Frontend", skills: portfolioData.skills.frontend, icon: "🎨" },
    { title: "Database", skills: portfolioData.skills.database, icon: "🗄️" },
    { title: "DevOps & Tools", skills: portfolioData.skills.devops, icon: "🛠️" },
    { title: "Core CS", skills: portfolioData.skills.coreCS, icon: "🧠" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
