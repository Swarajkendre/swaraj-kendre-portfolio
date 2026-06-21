import { portfolioData } from '../data';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hello-tag">Hello There!</div>
          <h1 className="hero-title">{portfolioData.title}</h1>
          <p className="hero-description">
            {portfolioData.summary}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Portfolio</button>
            <button className="btn btn-secondary">Hire me</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="Octocat.png" alt="Swaraj Navnath Kendre" className="profile-image" />
          </div>
          <div className="product-design-tag">Full Stack Developer</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
