import { useState } from "react";
import { Menu, X, Palette, Languages } from "lucide-react";
import "../styles/header.css";

const LINKS = [
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
];

// Os dois botões num só sítio, para usar na barra (desktop) e no menu (telemóvel)
function HeaderActions({ className }) {
  return (
    <div className={`header__actions ${className}`}>
      <button
        type="button"
        className="header__action header__action--icon"
        aria-label="Change theme"
        title="Change theme"
      >
        <Palette size={18} />
      </button>

      <button
        type="button"
        className="header__action"
        aria-label="Change language"
        title="Change language"
      >
        <Languages size={18} />
        <span>PT</span>
      </button>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="header">
        <a href="#" className="header__logo">Inácio Francisco</a>

        <ul
          id="main-menu"
          className={`header__links ${open ? "header__links--open" : ""}`}
        >
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}

          {/* só aparece no telemóvel, dentro do menu */}
          <li className="header__menu-actions">
            <HeaderActions className="header__actions--menu" />
          </li>
        </ul>

        {/* só aparece no desktop, na barra */}
        <HeaderActions className="header__actions--bar" />

        <button
          className="header__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <span className={`header__icon ${open ? "header__icon--hidden" : "header__icon--visible"}`}>
            <Menu size={22} color="#fff" />
          </span>
          <span className={`header__icon ${open ? "header__icon--visible" : "header__icon--hidden"}`}>
            <X size={22} color="#fff" />
          </span>
        </button>
      </header>

      {open && <div className="header__overlay" onClick={close} />}
    </>
  );
}

export default Header;