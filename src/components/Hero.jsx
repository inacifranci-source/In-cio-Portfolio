import { TypeAnimation } from "react-type-animation";
import '../styles/Hero.css';

import inacio2 from "../assets/inacio2.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob-main" />
      <div className="hero__blob-top" />

      <div className="hero__left">
        <h1>
          <span className="hero__title-light">Hi! I'm Inácio, building</span>
          <TypeAnimation
            sequence={[
              "Digital Experiences.", 1500
            ]}
            speed={50}
            deletionSpeed={10}
            repeat={Infinity}
            className="hero__title-bold"
          />
        </h1>
        <p className="hero__sub">
          From prototypes to production-ready systems,<br />
          I turn ideas into scalable, user-focused products.
        </p>
        <div className="hero__ctas">
          <button className="hero__btn-connect">Let's Connect</button>
          <button className="hero__btn-work">See My Work</button>
        </div>
      </div>

      <div className="hero__right">
         <div className="hero__photo">
          <img src="" alt="" />
        </div>

        <div className="hero__card hero__card--1m">
          <div className="hero__card-num">1M+</div>
          <div className="hero__card-lbl">Coding Hours</div>
        </div>
        <div className="hero__card hero__card--500">
          <div className="hero__card-num">30+</div>
          <div className="hero__card-lbl">Satisfied Clients</div>
        </div>
        <div className="hero__card hero__card--140">
          <div className="hero__card-num">10+</div>
          <div className="hero__card-lbl">Projects Completed</div>
        </div>
        <div className="hero__card hero__card--10">
          <div className="hero__card-num">2+</div>
          <div className="hero__card-lbl">Years of Experience</div>
        </div>
      </div>
    </section>
  );
}