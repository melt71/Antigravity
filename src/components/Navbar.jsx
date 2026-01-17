import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import './Navbar.css';
import Switch from './Toggle';

const Navbar = ({ theme, toggleTheme }) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
        clearProps: "all"
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#">ANTIGRAVITY</a>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#work" className="nav-link">Work</a>
          <a href="#studio" className="nav-link">Studio</a>
          <a href="#about" className="nav-link">About</a>
          <button className="cta-button mobile-only">Start Project</button>
        </div>

        <div className="nav-actions">
          <Switch isDark={theme === 'dark'} toggleTheme={toggleTheme} />
          <button className="cta-button desktop-only">Start Project</button>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
