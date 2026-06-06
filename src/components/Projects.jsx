import '../styles/Projects.css';
import tfa from "../assets/tfaa capa.png";
import linkQR from "../assets/linkQR capa.png"

const PROJECTS = [
    {
        id: 1,
        title: "TFA Academy",
        description:
            "Full website built for TFA Academy, an English language school. Clean design, fully responsive layout and a smooth user experience focused on converting visitors into students.",
        tags: ["React.js", , "TailwindCSS", "Html", "Js"],
        image: tfa, // substitui por: import img from '../assets/proofit.png'
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
    }];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__header">
                <span className="projects__label">WORK</span>
                <h2 className="projects__title">Recent Projects</h2>
                <p className="projects__sub">
                    A curated collection of projects — scalable, fast, and future-ready,
                    blending design, code, and creativity.
                </p>
            </div>

            <div className="projects__grid">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="projects__card">
                        {/* Screenshot */}
                        <div className="projects__card-img">
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <div className="projects__card-placeholder">
                                    <span>{project.title}</span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="projects__card-body">
                            <h3 className="projects__card-title">{project.title}</h3>
                            <p className="projects__card-desc">{project.description}</p>

                            {/* Tags */}
                            <div className="projects__card-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="projects__tag">{tag}</span>
                                ))}
                            </div>

                            {/* Link */}
                            <a href={project.link} className="projects__card-btn" target="_blank" rel="noreferrer">
                                <span>🌐</span> Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="projects__more">
                <p>Quer ver mais projetos? <a href="#contact">Entre em contacto</a></p>
            </div>
    </section>
    );
}

export default Projects;