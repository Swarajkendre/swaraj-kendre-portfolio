import { portfolioData } from '../data';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Swaraj Kendre</h3>
            <p>Software Engineer | Java Backend Developer | Full Stack Developer</p>
            <div className="social-links">
              <a href={`mailto:${portfolioData.contact.email}`} title="Email">📧</a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">🔗</a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" title="GitHub">💻</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: {portfolioData.contact.email}</p>
            <p>Phone: {portfolioData.contact.phone}</p>
            <p>Location: {portfolioData.contact.location}</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Swaraj Navnath Kendre. All rights reserved.</p>
          <p>Crafted with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
