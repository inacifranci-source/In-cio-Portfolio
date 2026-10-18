import "../styles/AboutMe.css";
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/cssIcon.png";
import jsIcon from "../assets/jsIcon.webp";
import reactIcon from "../assets/reactIcon.png";
import figmaIcon from "../assets/figmaIcon.webp";
import inacio from "../assets/inacio.png";
import nodeIcon from "../assets/nodeIcon.svg"
import postreIcon from "../assets/PostgreSQL.png"
import prismaIcon from "../assets/prismaIcon.svg"

const TECH_STACK = [
  { name: "NodeJS", icon: nodeIcon },
  { name: "prismaORM", icon: prismaIcon },
  { name: "postgreSQL", icon: postreIcon },
  { name: "React", icon: reactIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Figma", icon: figmaIcon }, 
];

const EXPERIENCE = [
  { role: "Freelancer", company: "Self-employed", year: "2025 — now" },
];

// Adiciona aqui os teus outros perfis quando tiveres os links reais, por exemplo:
// { label: "LinkedIn", icon: "in", href: "https://linkedin.com/in/..." },
const SOCIALS = [
  { label: "GitHub", icon: "GH", href: "https://github.com/inacifranci-source" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/in%C3%A1cio-francisco-b86ba935b/" },
  { label: "Instagram", icon: "IG", href: "https://www.instagram.com/dev.inacio/" },
];
export default function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <span className="about__label">ABOUT</span>
        <h2 className="about__title">About Me</h2>
        <p className="about__sub">
          I build clean, responsive interfaces with a focus on detail and performance.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__left">
          <div className="about__photo">
            <img src={inacio} alt="Foto de Inácio Francisco" />
          </div>

          <div className="about__available">
            <span className="about__available-dot" />
            Available for work
          </div>

          <h3 className="about__name">INÁCIO FRANCISCO</h3>
          <p className="about__tagline">Front-end developer based in Luanda, Angola.</p>

          <div className="about__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="about__social"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <a href="#contact" className="about__btn">Let's Connect</a>
        </div>

        <div className="about__right">
          <div className="about__card">
            <h4 className="about__card-title">Hi! I'm Inácio Francisco,</h4>
            <p className="about__card-text">
              a front-end developer who enjoys turning designs into fast, accessible and
              good-looking websites. I work mainly with React, and I care about clean code
              and smooth user experiences.
            </p>
            <p className="about__card-text">
              Since 2023 I've been working as a freelancer, building projects for clients
              and learning something new on every one of them.
            </p>
          </div>

          <div className="about__card">
            <h4 className="about__card-title">My Tech Stack</h4>
            <div className="about__stack">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="about__stack-item" title={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="about__card">
            <h4 className="about__card-title">Experience</h4>
            <div className="about__exp">
              {EXPERIENCE.map((item) => (
                <div key={item.role + item.year} className="about__exp-row">
                  <div className="about__exp-info">
                    <span className="about__exp-role">{item.role}</span>
                    <span className="about__exp-company">{item.company}</span>
                  </div>
                  <span className="about__exp-year">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}