import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(textRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5,
                clearProps: "all" // Ensure no residual styles cause blur after animation
            })
                .from(subRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    clearProps: "all"
                }, "-=1");
        }, heroRef); // Scope to heroRef

        return () => ctx.revert(); // Proper cleanup
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-background">
                <div className="hero-orb"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title" ref={textRef}>
                    <div className="line">Digital</div>
                    <div className="line">Experiences</div>
                    <div className="line">That <span className="italic">Resonate</span></div>
                </h1>
                <div ref={subRef} className="hero-footer">
                    <p className="hero-subtitle">
                        We craft digital products that blend logic with emotion,
                        creating meaningful connections between brands and people.
                    </p>

                    <div className="hero-actions">
                        <button className="primary-btn">
                            See our work <ArrowRight size={18} />
                        </button>
                        <button className="secondary-btn">Showreel</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
