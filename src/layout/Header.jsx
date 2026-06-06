import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/header.css';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__logo">Inácio Francisco</div>

        <ul className={`header__links ${open ? 'header__links--open' : ''}`}>
          <li><a href="#" onClick={() => setOpen(false)}>PROJECTS</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>SERVICES</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>TESTIMONIALS</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>FAQS</a></li>
           <li><button className="header__btn--mobile" onClick={() => setOpen(false)}>Book a call</button></li>
        </ul>

        <button className="header__btn">Book a call</button>

        <button
          className="header__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`header__icon ${open ? 'header__icon--hidden' : 'header__icon--visible'}`}>
            <Menu size={22} color="#fff" />
          </span>
          <span className={`header__icon ${open ? 'header__icon--visible' : 'header__icon--hidden'}`}>
            <X size={22} color="#fff" />
          </span>
        </button>
      </header>

      {/* overlay para fechar ao clicar fora */}
      {open && <div className="header__overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Header;