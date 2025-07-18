// src/App.js
import React from 'react';
import './App.css';
import profilePhoto from './images/profile.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="sticky-nav">
        <ul>
          <li><a href="#me">ME</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        {/* ME Section */}
      <section id="me" className="section me-section">
        <div className="content">
          
          <h1>Mohan kumar N D</h1>
          <h2>Data Scientist & Full Stack Developer</h2>
        </div>
        <div className="avatar">
          <img 
            src={profilePhoto} 
            alt="Your Name" 
            className="avatar-image" 
          />
          <span className="open-badge">Open to work</span>
        </div>
      </section>
      
    
        {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="content">
          <p>
            I am a B.E. graduate in Computer Science (Data Science) with a strong foundation in Python, machine learning, data analysis, and visualization tools like Power BI and Excel. I enjoy uncovering insights from complex data and building predictive models that solve real-world problems. With practical experience in building ML projects and working with structured databases, I’m eager to contribute to impactful, data-driven decision-making.
          </p>
          <p>
            I also have an hands-on experience in both front-end and back-end development. Skilled in JavaScript, Python, PHP, SQL, and frameworks like Flask and Streamlit, I enjoy building scalable, user-friendly web applications. I’m passionate about developing full-stack solutions that combine clean UI design with robust backend logic, and I’m eager to contribute to modern web development projects.
          </p>
          <h3>Education</h3>
          <p>
            <strong>ATME college of engineering</strong>Mysure<br /> | B.E, Computer science and Data Science<br />
            <li>2021-2025   CGPA=7.4</li>
            <br/>
            <br/>
          </p>
          <p>
            <strong>Aradhana P U College </strong>Srirangapatna<br/> | Pre univercity in Science<br/>
            
            <li>2019-2021   Percentage 76%   </li>
            <br/><br/>
            <br/>
            <strong>Rotary english medium high school </strong>Nagamangala<br/> | SSLC<br/>
            <li>2019-2021   Percentage 71%       </li>
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="content">
          <div className="experience-item">
            <h3>Smartello Analytics</h3>
            <p><em> Gen AI intern | feb 2025 - May 2025</em></p>
            <ul>
              <li>Developed a RAG-based chatbot assistant for data warehouse projects using Confluence and SharePoint documents.</li>
              <li>Enabled chatbot to summarize and query structured databases (tables/views) with Python and ML libraries. </li>
              <li>Utilized Streamlit, Vector DBs, and Gemini LLMs to implement the solution.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Alpha Ace</h3>
            <p><em> Data science intern | Nov 2023 - Dec 2023</em></p>
            <ul>
              <li>Performed data manipulation and analysis using NumPy and Pandas. </li>
              <li>Built a machine learning model for Car Price Prediction using supervised learning techniques.</li>
              <li>Practiced programming logic with pattern printing and string manipulation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="content project-grid">
          <div className="project-card">
            <h3>Blood Group Detection using finger print</h3>
            <p>Developed a deep learning-based system that predicts an individual's blood group using fingerprint image analysis. Designed and trained a Convolutional Neural Network (CNN) model to extract and classify biometric fingerprint patterns.</p>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">ML</span>
            <span className="tech-tag">deep learning</span>
            <span className="tech-tag"> Flask</span>
            <span className="tech-tag">OpenCV</span>
          </div>
          <div className="project-card">
            <h3>RAG Chatbot</h3>
            <p>Developed a RAG-based chatbot assistant for data warehouse projects using Confluence and SharePoint documents.Enabled chatbot to summarize and query structured databases </p>
            <span className="tech-tag">LLM</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">NLP</span>
            <span className="tech-tag">VetorDB</span>
            <span className="tech-tag">ML</span>
          </div>
          <div className="project-card">
            <h3>Cricket Run Rendering Web App</h3>
            <p>Developed a full-stack web application to input, store, and visualize cricket match scores in real time.</p>
            <span className="tech-tag">java</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Reactjs</span>
            <span className="tech-tag">Python</span>
          </div>
          <div className="project-card">
            <h3>Notes Manager</h3>
            <p>Notes app with user login, REST APIs, and MongoDB storage. Implemented CRUD features with React hooks and secured backend using JWT authentication.</p>
            <span className="tech-tag">React</span>
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">css</span>
            <span className="tech-tag">java</span>
            <span className="tech-tag">CRUD</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="content skills-grid">
          <div className="skill-category">
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>TensorFlow</li>
              <li>Machine learning</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Power BI</li>
              <li>Git</li>
              <li>Docker</li>
              <li>NLP</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <h2 className="section-title">Certificates</h2>
        <div className="content">
          <div className="cert-card">
            <h3>Domain Specific Training in Advanced Data Science with Python</h3>
            <p>Genesis Training  | Jun 2024 - Nov 2024</p>
          </div>
          <div className="cert-card">
            <h3>Full stack development</h3>
            <p> Infosys Springboard| 2024</p>
          </div>
          <div className="cert-card">
            <h3>Data Analytics</h3>
            <p> Alpha Acube| 2023</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="content contact-links">
          <a href="mohankumarbasaralu@gmail.com">
            <i className="fas fa-envelope"></i> mohankumarbasaralu@gmail.com
          </a>
          <a href="www.linkedin.com/in/mohan-kumar-n-d" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Mohan20041" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;