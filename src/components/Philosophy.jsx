import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    scrub: 1
                },
                y: 50,
                opacity: 0.5,
                duration: 1
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="philosophy-section" id="studio" ref={sectionRef}>
            <div className="container">
                <div className="philosophy-content">
                    <span className="label">The Studio</span>
                    <h2 ref={textRef} className="statement">
                        We believe that <span className="highlight">simplicity</span> is the ultimate sophistication.
                        In a world of noise, we design <span className="highlight">silence</span>—products that specific,
                        calm, and endlessly useful.
                    </h2>

                    <div className="stats-grid">
                        <div className="stat">
                            <span className="number">80+</span>
                            <span className="desc">Projects Launched</span>
                        </div>
                        <div className="stat">
                            <span className="number">15</span>
                            <span className="desc">Design Awards</span>
                        </div>
                        <div className="stat">
                            <span className="number">100%</span>
                            <span className="desc">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
