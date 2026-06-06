import '../styles/AboutMe.css';
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from '../assets/cssIcon.png';
import jsIcon from '../assets/jsIcon.webp';
import reactIcon from "../assets/reactIcon.png"
import figmaICon from "../assets/figmaIcon.png"
import inacio from "../assets/inacio.png";

const TECH_STACK = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS",  icon: cssIcon  },
  { name: "JS",   icon: jsIcon   },
  {name: "React", icon: reactIcon}
];

const EXPERIENCE = [
    { role: "Freelancer", company: "Self-employed", year: "2023 — now" },
];

const SOCIALS = [
    { label: "Instagram", icon: "IG", href: "#" },
    { label: "LinkedIn", icon: "in", href: "#" },
    { label: "GitHub", icon: "GH", href: "#" },
    { label: "X", icon: "𝕏", href: "#" },
];

export default function AboutMe() {
    return (
        <section className="about" id="about">
            <div className="about__header">
                <span className="about__label">ABOUT</span>
                <h2 className="about__title">About Me</h2>
                <p className="about__sub">
                    I build intuitive digital products — scalable, high-performing,
                    and made through collaboration.
                </p>
            </div>

            <div className="about__grid">

                {/* ── Left card ── */}
                <div className="about__left">
                    <div className="about__photo">
                         <img src={inacio} alt="Inácio image" /> 
                        <div className="about__photo-placeholder" />
                    </div>
                    <div className="about__available">
                        <span className="about__available-dot" />
                        Available for work
                    </div>
                    <h3 className="about__name">INÁCIO FRANCISCO</h3>
                    <p className="about__tagline">
                        Create seamless experiences across web, mobile, and desktop.
                    </p>
                    <div className="about__socials">
                        {SOCIALS.map((s) => (
                            <a key={s.label} href={s.href} className="about__social" aria-label={s.label}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                    <a href="#contact" className="about__btn">Let's Connect</a>
                </div>

                {/* ── Right cards ── */}
                <div className="about__right">

                    {/* Bio */}
                    <div className="about__card">
                        <h4 className="about__card-title">Hi! I'm Inácio Francisco,</h4>
                        <p className="about__card-text">
                            a developer passionate about building meaningful digital experiences. With a focus
                            on clean code, thoughtful design, and scalable solutions, I help turn ideas into
                            products that people love to use.
                        </p>
                        <p className="about__card-text">
                            I specialize in web development, cross-platform applications, and UI/UX design,
                            blending creativity with technical expertise to deliver work that's both functional
                            and visually compelling.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="about__card">
                        <h4 className="about__card-title">My Tech Stack</h4>
                        <div className="about__stack">
                            {TECH_STACK.map((tech) => (
                                <div key={tech.name} className="about__stack-item">
                                    <img src={tech.icon} alt={tech.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="about__card">
                        <h4 className="about__card-title">Experience</h4>
                        <div className="about__exp">
                            {EXPERIENCE.map((item, i) => (
                                <div key={i} className="about__exp-row">
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