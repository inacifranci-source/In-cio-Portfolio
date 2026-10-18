import { useState } from "react";
import { MapPin, MessageCircle, Send } from "lucide-react";
import "../styles/contact.css";

const WHATSAPP = "244900000000"; // TROCA: código do país + número, sem + nem espaços

const INITIAL = { name: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi Inácio, I'm ${form.name.trim()}.\n\n${form.message.trim()}`;
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setForm(INITIAL);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <span className="contact__label">CONTACT</span>
        <h2 className="contact__title">Let's Work Together</h2>
        <p className="contact__sub">
          Have a project in mind? Send me a message on WhatsApp and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <a
            className="contact__card"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} aria-hidden="true" />
            <div>
              <span className="contact__card-label">WhatsApp</span>
              <span className="contact__card-value">Chat with me</span>
            </div>
          </a>

          <div className="contact__card">
            <MapPin size={20} aria-hidden="true" />
            <div>
              <span className="contact__card-label">Location</span>
              <span className="contact__card-value">Luanda, Angola</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              required
              minLength={2}
            />
          </label>

          <label className="contact__field">
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              minLength={10}
            />
          </label>

          <button type="submit" className="contact__submit">
            <Send size={16} aria-hidden="true" />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}