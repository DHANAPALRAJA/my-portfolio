import React, { useState } from "react";
import "./App.css";

import supermarketImage from "./assets/supermarket.jpg";
import perfumeImage from "./assets/perfume.jpeg";
import todoImage from "./assets/todo.jpeg";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and user-friendly interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ReactJS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      description: "Developing APIs and server-side application logic.",
      skills: [
        "NodeJS",
        "ExpressJS",
        "REST API",
        "JWT Authentication",
      ],
    },
    {
      title: "Database & Services",
      description: "Working with application data and cloud services.",
      skills: ["MongoDB", "MongoDB Atlas", "Firebase"],
    },
    {
      title: "Tools & Deployment",
      description: "Development, testing and application deployment.",
      skills: ["Git", "GitHub", "Postman", "Netlify", "Render"],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "DRG Supermarket Self Checkout",
      category: "SELF CHECKOUT APPLICATION",
      image: supermarketImage,
      desc: "A responsive self-checkout web application designed around barcode-based product scanning, cart management and billing.",
      tags: ["ReactJS", "Firebase", "QuaggaJS"],
      live: "https://tomtog-4c09a.web.app",
    },
    {
      number: "02",
      title: "Perfume Shop E-Commerce",
      category: "MERN E-COMMERCE APPLICATION",
      image: perfumeImage,
      desc: "A full-stack e-commerce application with user authentication, product browsing, cart functionality and a responsive shopping experience.",
      tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      live: "https://drg-perfume-shop.netlify.app",
    },
    {
      number: "03",
      title: "To-Do Task Manager",
      category: "TASK MANAGEMENT APPLICATION",
      image: todoImage,
      desc: "A task management application with authentication and CRUD functionality for creating and managing personal tasks.",
      tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      live: "https://tododrflow.netlify.app",
    },
  ];

  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      organization: "Cognitive I IT Solutions Pvt Ltd, Salem",
      duration: "Jan 2025 — Apr 2025",
      highlights: [
        "Worked on web application development and gained practical experience with modern full-stack technologies.",
        "Developed and tested application features while working with frontend and backend concepts.",
      ],
    },
    {
      role: "Data Visualization with Tableau Intern",
      organization: "Cognitive I IT Solutions Pvt Ltd, Salem",
      duration: "Mar 2024 — Jul 2024",
      highlights: [
        "Worked with datasets and created interactive dashboards using Tableau.",
        "Explored data visualization techniques to present information clearly and effectively.",
      ],
    },
  ];

  const education = [
    {
      degree: "M.Sc Computer Science",
      institution: "Periyar University, Salem",
      duration: "2025",
      details: "Percentage: 75%",
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Sowdeswari College, Salem",
      duration: "2021",
      details: "Percentage: 70%",
    },
    {
      degree: "HSC",
      institution: "GHSS, Muthunaicken Patty",
      duration: "2018",
      details: "Percentage: 60%",
    },
    {
      degree: "SSLC",
      institution: "GHSS, Muthunaicken Patty",
      duration: "2016",
      details: "Percentage: 80%",
    },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xzeddggw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you for reaching out. I will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Oops! There was a problem submitting your form.");
      }
    } catch {
      setStatus("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => setStatus(""), 4500);
    }
  };

  return (
    <div className="portfolio-wrapper" id="top">
      <div className="ambient-background" aria-hidden="true">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <a
            href="#top"
            className="brand-logo"
            onClick={closeMenu}
            aria-label="Dhanapal Raja home"
          >
            <span className="code-bracket">&lt;</span>
            <span className="logo-monogram">DHANAPAL RAJA</span>
            <span className="code-bracket">/&gt;</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <nav
            id="primary-navigation"
            className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
          >
            <a href="#about" className="nav-item" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" className="nav-item" onClick={closeMenu}>
              Skills
            </a>
            <a href="#experience" className="nav-item" onClick={closeMenu}>
              Experience
            </a>
            <a href="#projects" className="nav-item" onClick={closeMenu}>
              Projects
            </a>
            <a href="#education" className="nav-item" onClick={closeMenu}>
              Education
            </a>
            <a
              href="https://dr-resumes.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item nav-resume-item"
              onClick={closeMenu}
            >
              Resume <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Hire Me <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-eyebrow">
            <span className="availability-dot" />
            <span className="hero-badge">MERN Stack Developer</span>
          </div>

          <h1 className="hero-headline" id="hero-heading">
            Building
            <br />
            <span className="gradient-text">Modern Web Experiences</span>
            <br />
            with React &amp; MERN
          </h1>

          <p className="hero-description">
            Computer Science postgraduate and MERN Stack Developer focused on
            creating responsive, user-friendly web applications with a strong
            interest in frontend development and modern UI design.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
            </a>

            <a
              href="https://dr-resumes.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              View Resume <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to About">
            <span />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-container">
          <div className="section-header">
            <span className="section-subtitle">01 — ABOUT ME</span>
            <h2 className="section-title">A Little About Me</h2>
            <p className="section-description">
              A developer who enjoys turning ideas into useful digital
              experiences.
            </p>
          </div>

          <div className="about-layout">
            <div className="about-photo-wrapper">
              <div className="about-photo-ring">
                <img
                  src="/images/profile.jpeg"
                  alt="Dhanapal R, MERN Stack Developer"
                  className="about-photo"
                  loading="lazy"
                />
              </div>
              <span className="photo-caption">
                <span className="availability-dot" />
                Open to opportunities
              </span>
            </div>

            <div className="glass-card about-card">
              <span className="about-role">
                Frontend-Focused MERN Developer
              </span>

              <p>
                I am a Computer Science postgraduate and a passionate web
                developer focused on building responsive, user-friendly web
                applications using ReactJS and the MERN Stack.
              </p>

              <p>
                I enjoy creating clean user interfaces and turning ideas into
                functional web applications. I also have hands-on experience
                with NodeJS, ExpressJS, MongoDB, Firebase, REST APIs and
                authentication.
              </p>

              <div className="quick-metrics">
                <div className="metric-box">
                  <span className="metric-val">Frontend</span>
                  <span className="metric-label">
                    ReactJS · HTML · CSS
                  </span>
                </div>

                <div className="metric-box">
                  <span className="metric-val">MERN Stack</span>
                  <span className="metric-label">
                    Node · Express · MongoDB
                  </span>
                </div>

                <div className="metric-box">
                  <span className="metric-val">Based In</span>
                  <span className="metric-label">Salem, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-container">
          <div className="section-header">
            <span className="section-subtitle">02 — EXPERTISE</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-description">
              Technologies and tools I use to design, develop, connect and
              deploy web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <article className="skill-card" key={category.title}>
                <div className="skill-card-top">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="skill-card-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3 className="skill-category">{category.title}</h3>
                <p className="skill-description">{category.description}</p>

                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill} className="skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-container">
          <div className="section-header">
            <span className="section-subtitle">03 — CAREER</span>
            <h2 className="section-title">Experience</h2>
            <p className="section-description">
              Learning, building and developing practical technical skills.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="glass-card experience-card" key={experience.role}>
                <div className="experience-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="experience-main">
                  <div className="exp-heading-row">
                    <div>
                      <h3 className="exp-role">{experience.role}</h3>
                      <span className="exp-company">
                        {experience.organization}
                      </span>
                    </div>

                    <span className="exp-badge">{experience.duration}</span>
                  </div>

                  <ul className="exp-points">
                    {experience.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section-container projects-section"
        >
          <div className="section-header">
            <span className="section-subtitle">04 — SELECTED WORK</span>
            <h2 className="section-title">Projects I&apos;ve Built</h2>
            <p className="section-description">
              A selection of web applications built while learning and working
              with modern frontend and full-stack technologies.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
                aria-label={`Open ${project.title} live project in a new tab`}
              >
                <article className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="project-image-overlay">
                      <span className="project-number">{project.number}</span>
                      <span className="project-category">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-heading">{project.title}</h3>
                    <p className="project-summary">{project.desc}</p>

                    <div className="project-tech-heading">TECHNOLOGIES USED</div>
                    <div className="tag-cluster">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    <span className="project-link">
                      <span>View Live Project</span>
                      <span className="project-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-container">
          <div className="section-header">
            <span className="section-subtitle">05 — ACADEMICS</span>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="education-grid">
            {education.map((edu) => (
              <article className="glass-card edu-card" key={edu.degree}>
                <div className="education-year">{edu.duration}</div>
                <div className="edu-content">
                  <h3 className="exp-role">{edu.degree}</h3>
                  <span className="exp-company">{edu.institution}</span>
                  <p className="edu-details">{edu.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-container contact-section">
          <div className="section-header">
            <span className="section-subtitle">06 — CONNECT</span>
            <h2 className="section-title">Let&apos;s Build Something</h2>
            <p className="section-description">
              Have a project, opportunity or idea? Feel free to get in touch.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              <span className="contact-kicker">GET IN TOUCH</span>
              <h3>Let&apos;s talk about your next project.</h3>
              <p>
                I am open to discussing web development opportunities,
                projects and new ideas.
              </p>

              <div className="contact-details">
                <a
                  href="mailto:dhanapalraja583@gmail.com"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon" aria-hidden="true">
                    @
                  </span>
                  <span className="contact-detail-copy">
                    <span className="contact-detail-label">EMAIL</span>
                    <span className="contact-detail-value">
                      dhanapalraja583@gmail.com
                    </span>
                  </span>
                  <span className="contact-detail-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  href="tel:+918072780935"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon" aria-hidden="true">
                    ↗
                  </span>
                  <span className="contact-detail-copy">
                    <span className="contact-detail-label">PHONE</span>
                    <span className="contact-detail-value">
                      +91 80727 80935
                    </span>
                  </span>
                  <span className="contact-detail-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">
                    ◎
                  </span>
                  <span className="contact-detail-copy">
                    <span className="contact-detail-label">LOCATION</span>
                    <span className="contact-detail-value">
                      Salem, Tamil Nadu
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="form-heading">
                <span className="form-heading-mark" aria-hidden="true">
                  ✳
                </span>
                <div>
                  <h3>Send a message</h3>
                  <p>I&apos;ll get back to you as soon as I can.</p>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="interactive-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={150}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={3000}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <span aria-hidden="true"> ↗</span>
                  )}
                </button>

                {status && (
                  <div
                    className={`status-banner ${
                      status.startsWith("Thank") ? "status-success" : "status-error"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-bar">
        <div className="footer-content">
          <a href="#top" className="footer-brand" aria-label="Back to top">
            <span className="code-bracket">&lt;</span>
            <span className="logo-monogram">DHANAPAL RAJA</span>
            <span className="code-bracket">/&gt;</span>
          </a>

          <p>© 2026 Dhanapal R. All rights reserved.</p>
          <p className="footer-role">MERN Stack Developer</p>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/918072780935"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Dhanapal on WhatsApp"
      >
        <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        <span className="wa-tooltip">
          <span className="wa-online-dot" />
          <span className="wa-tooltip-content">
            <strong className="wa-tooltip-title">Chat on WhatsApp</strong>
            <span className="wa-tooltip-sub">Send me a message</span>
          </span>
        </span>
      </a>
    </div>
  );
}