import '../styles/Services.css';

const SERVICES = [
  {
    id: 1,
    icon: "✦",
    title: "Responsive Design",
    description:
      "Interfaces that adapt perfectly to any screen size. From mobile to desktop, every pixel is crafted with precision and attention to detail.",
    topics: ["Mobile First", "CSS Grid & Flexbox", "Cross-browser", "Pixel Perfect"],
  },
  {
    id: 2,
    icon: "⟨/⟩",
    title: "Front-end Development",
    description:
      "Modern, fast and scalable web applications built with the latest technologies. Clean code, reusable components and smooth user experiences.",
    topics: ["React", "JavaScript", "Vite", "Performance"],
  },
  {
    id: 3,
    icon: "⇌",
    title: "API Consumption",
    description:
      "Seamless integration between front-end and back-end services. REST APIs, authentication flows and real-time data handled with care.",
    topics: ["REST APIs", "Axios", "Authentication", "Real-time"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <span className="services__label">SERVICES</span>
        <h2 className="services__title">What I Do</h2>
        <p className="services__sub">
           From responsive interfaces to API integrations, I build modern websites that are fast and user-friendly.</p>
      </div>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <div key={service.id} className="services__card">
            <div className="services__card-icon">{service.icon}</div>
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-desc">{service.description}</p>
            <ul className="services__card-topics">
              {service.topics.map((topic) => (
                <li key={topic} className="services__topic">
                  <span className="services__topic-dot" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}