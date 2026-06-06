const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub", "Figma",];

import '../styles/Marquee.css';

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {/* duplicas para o loop ser infinito e sem corte */}
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <span key={i} className="marquee__item">
            {skill} <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}