import React, { useState } from 'react';

const DarkThemeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dark-theme-website">
      <header>
        <nav>
          <div className="logo">Dev's Portfolio</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h1>Dev Pathak</h1>
          <p>AI/ML Enigneer</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="section-divider"></div>
          <div className="project-grid">
            <div className="project-card">
              <h3>Product Sentiment Analysis</h3>
              <p>A sleek app with automatic dark mode switching.</p>
            </div>
            <div className="project-card">
              <h3>Digitone</h3>
              <p>A modern dashboard with a dark color scheme.</p>
            </div>
            <div className="project-card">
              <h3>LinkedIn Clone</h3>
              <p>A powerful, dark-themed code editor for night owls.</p>
            </div>
            <div className="project-card">
              <h3>ChatApp</h3>
              <p>A modern dashboard with a dark color scheme.</p>
            </div>
          </div>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <div className="section-divider"></div>
          <p>A passionate and versatile developer with a strong interest in both web development and machine 
learning, seeking an internship to leverage my skills and knowledge in real-world projects. 
Experienced in using the MERN stack to build interactive web applications with MongoDB, Express.js, 
React.js, and Node.js. Solid understanding of machine learning principles and AI basics, with practical 
knowledge of Python libraries like TensorFlow, Keras, and Scikit-learn.</p>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <div className="section-divider"></div>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Dev's Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">Email</a>
          <a href='#'>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default DarkThemeWebsite;