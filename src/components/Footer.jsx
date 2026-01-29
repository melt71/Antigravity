import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>ANTIGRAVITY</h2>
                        <p>San Francisco, CA</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Socials</h4>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                        <div className="link-group">
                            <h4>Legals</h4>
                            <a href="/privacy">Privacy</a>
                            <a href="/terms">Terms</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Antigravity. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
