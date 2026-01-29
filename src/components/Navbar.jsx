import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import './Navbar.css';
import Switch from './Toggle';

const Navbar = ({ theme, toggleTheme }) => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);
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

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      const menuLinks = menuLinksRef.current.querySelectorAll('.nav-link, .cta-button');

      if (isOpen) {
        // Animate menu in
        gsap.to(menuRef.current, {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 0.8,
          ease: "power4.inOut"
        });

        // Stagger menu items
        gsap.fromTo(menuLinks,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: "power3.out"
          }
        );
      } else {
        // Animate menu out
        gsap.to(menuRef.current, {
          clipPath: 'circle(0% at 100% 0%)',
          duration: 0.6,
          ease: "power4.inOut"
        });

        // Hide menu items
        gsap.to(menuLinks, {
          opacity: 0,
          y: 30,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    });

    return () => mm.revert();
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#">ANTIGRAVITY</a>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
          <div ref={menuLinksRef}>
            <a href="#work" className="nav-link">Work</a>
            <a href="#studio" className="nav-link">Studio</a>
            <a href="#about" className="nav-link">About</a>
            <button className="cta-button mobile-only">Start Project</button>
          </div>
        </div>

        <div className="nav-actions">
          <Switch isDark={theme === 'dark'} toggleTheme={toggleTheme} />
          <button className="cta-button desktop-only">Start Project</button>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
