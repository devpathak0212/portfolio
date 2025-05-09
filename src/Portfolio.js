import React, { useState } from 'react';
import github from './github.png';
import gmail from './gmail.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'

const DarkThemeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dark-theme-website">
      <main>

        <section id="home contacts" className="hero">
          <h1>Dev Pathak</h1>
          <p>AI/ML Engineer</p>
          <div className="social-links">
            <a href="https://github.com/devpathak0212"><img className='github' src={github}></img></a>
            <a href="https://mail.google.com/mail/"><img className='gmail' src={gmail}></img></a>
            <a href='https://www.linkedin.com/in/dev-pathak0212/'><img className='linkedin' src={linkedin}></img></a>
            <a href='https://www.twitter.com'><img className='twitter' src={twitter}></img></a>
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

        <section id="projects">
          <h2>Projects</h2>
          <div className="section-divider"></div>
          <div className="project-grid">
            <div className="project-card">
              <h3>Product Sentiment Analysis</h3>
              <p>Process of identifying and categorizing opinions expressed in text using Natural 
              Language Processing</p>
            </div>
            <div className="project-card">
              <h3>Digitone</h3>
              <p>A system used for generating customized ringtones based on the user’s prompt using Machine Learning 
              Algorithms.</p>
            </div>
            <div className="project-card">
              <h3>LinkedIn Clone</h3>
              <p> A clone of the famous
 social media platform LinkedIn. Enables user
 to post anything of their choice on to the
 platform that is publicly visible to all users.
 Includes User Authentication.</p>
            </div>
            <div className="project-card">
              <h3>ChatApp</h3>
              <p>Enables
 user for real time chatting. Features like
 location sharing and group chatting.</p>
            </div>
            <div className="project-card">
              <h3>Oil Spill Detection System</h3>
              <p>A system using Deep Learning Models for Detecting Oil Spillage in Water Bodies using SAR Images.</p>
            </div>
            <div className="project-card">
              <h3>Server Room Management System</h3>
              <p>A system used to manipulate the security details of the Server Room Accessing Device.</p>
            </div>
            <div className="project-card">
              <h3>Customer Personality Analysis</h3>
              <p>Analysing the Personality of different customers based on their pusrchase to further predict future purchases.</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Experiences</h2>
          <div className="section-divider"></div>
          <div className='flexy'>
            <div className='project-card'>
              <h3><u>Research Intern</u></h3>
              <h4>CHARUSAT Space Research and Technology Center (Dec 24 - May 25)</h4>
              <p>As a Research Intern at CSRTC, have worked on the project of Oil Spill Detection using Deep Learning Models for Water Pollution Monitoring Using SAR Images collected from Sentinel-1 satellite imagery</p>
            </div>
            <div className='project-card'>
              <h3><u>Intern</u></h3>
              <h4>iNeuron.ai  (May24 - Jun24)</h4>
              <p>As a Intern, analysed Customer Personality for finding patterns in their purchases to predict future purchases.</p>
            </div>
            <div className='project-card'>
              <h3><u>Intern</u></h3>
              <h4>Transpek Ind. Ltd. (May23 - Jun23)</h4>
              <p>As a Intern, developed a Server Room Security System to manipulate the security data on a software integrating the Server Room Facial Security System.</p>
            </div>
          </div>
        </section>

        <section className='research'>
        <h2>Research Profile</h2>
        <div className="section-divider"></div>
          <div className='flexy'>
          <div className='project-card'>
              <h3>A Lightweight Deep Learning Framework for Land Cover Classification from Sentinel-2 Imagery</h3>
              <h4>Conference : 2025 6th International Conference for Emerging Technology (INCET)</h4>
              <p>Discussion on an abstract idea of land cover classification by transfer learning applied to pre-trained Convolutional Neural Networks.</p>
            </div>
          </div>     
        </section> 
      </main>

      <footer>
        <p>&copy; 2024 Dev's Portfolio. All rights reserved.</p>

      </footer>
    </div>
  );
};

export default DarkThemeWebsite;