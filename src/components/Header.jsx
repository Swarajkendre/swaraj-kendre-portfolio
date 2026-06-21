function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>Swaraj</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
