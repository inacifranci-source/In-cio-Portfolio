import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";
import inacio2 from "../assets/inacio2.jpg";

// Números de exemplo: ajusta para valores reais
const STATS = [
  { cls: "1m", num: "3+", label: "Years of Experience" },
  { cls: "500", num: "10+", label: "Projects Completed" },
  { cls: "140", num: "5+", label: "Happy Clients" },
  { cls: "10", num: "2", label: "Live Projects" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__blob-main" aria-hidden="true" />
      <div className="hero__blob-top" aria-hidden="true" />

      <div className="hero__left">
        <h1>
          <span className="hero__title-light">Hi! I'm Inácio, building</span>
          <TypeAnimation
            sequence={[
              "Clean UI.", 1500,
              "Modern deisgn.", 1500,
              "Fast Websites.", 1500,
            ]}
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            className="hero__title-bold"
          />
        </h1>

        <p className="hero__sub">
          From prototypes to polished interfaces,<br />
          I turn ideas into fast, user-focused websites.
        </p>

        <div className="hero__ctas">
          <a href="#contact" className="hero__btn-connect">Let's Connect</a>
          <a href="#projects" className="hero__btn-work">See My Work</a>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__photo">
          <img src={inacio2} alt="Retrato de Inácio Francisco" />
        </div>

        {STATS.map((s) => (
          <div key={s.label} className={`hero__card hero__card--${s.cls}`}>
            <div className="hero__card-num">{s.num}</div>
            <div className="hero__card-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}