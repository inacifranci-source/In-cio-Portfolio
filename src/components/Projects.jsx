import "../styles/Projects.css";
import tfa from "../assets/tfa-cover.png";
import linkQR from "../assets/linkqr-cover.png";
import argentina from "../assets/argentina.png"
import apicapa from "../assets/apicapa.png"


const PROJECTS = [
  {
    id: 1,
    title: "TFA Academy",
    description:
      "Full website built for TFA Academy, an English language school. Clean design, fully responsive layout and a smooth user experience focused on converting visitors into students.",
    tags: ["React.js", "TailwindCSS", "HTML", "JS"],
    image: tfa,
    link: "https://tfacademy.netlify.app/",
  },
  {
    id: 2,
    title: "Link QR",
    description:
      "A link management platform that lets you shorten URLs and instantly generate QR codes — built for speed, simplicity and clean user experience.",
    tags: ["API consumption", "JS", "React.js", "TailwindCSS"],
    image: linkQR,
    link: "https://link-qr-lemon.vercel.app/",
  },
  {
    id: 3,
    title: "Argentina Fernandes",
    description:
      "Portfolio website for Argentina Fernandes, a beauty entrepreneur specialized in eyebrow design. It showcases her services, work and contact details in one elegant, responsive page that helps clients book with confidence.",
    tags: ["React.js", "HTML", "CSS", "JS"],
    image: argentina, 
    link: "https://argentinafernandes.vercel.app/",
  },
    {
    id: 4,
    title: "Entrepreneurship Fair API",
    description:
      "Registration API built by a team for an entrepreneurship fair. I was responsible for the CRUD operations: creating, reading, updating and deleting participant registrations.",
    tags: ["Node.js", "REST API", "CRUD", "PostgreSQL"],
    image: apicapa,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <span className="projects__label">WORK</span>
        <h2 className="projects__title">Recent Projects</h2>
        <p className="projects__sub">
          A selection of projects I've built — fast, responsive and focused on a great user experience.
        </p>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__card-img">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                />
              ) : (
                <div className="projects__card-placeholder">
                  <span>{project.title}</span>
                </div>
              )}
            </div>

            <div className="projects__card-body">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>

              <a
                href={project.link}
                className="projects__card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">🌐</span> Website
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects__more">
        <p>Want to see more? <a href="#contact">Get in touch</a></p>
      </div>
    </section>
  );
}

export default Projects;