import "../styles/Marquee.css";

const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub", "Figma"];
const REPEAT = 4; // se mudares, atualiza o -25% no Marquee.css (100 / REPEAT)

export default function Marquee() {
  const items = Array.from({ length: REPEAT }, () => SKILLS).flat();

  return (
    <div className="marquee">
      <span className="sr-only">Skills: {SKILLS.join(", ")}</span>

      <div className="marquee__track" aria-hidden="true">
        {items.map((skill, i) => (
          <span key={`${skill}-${i}`} className="marquee__item">
            {skill} <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}