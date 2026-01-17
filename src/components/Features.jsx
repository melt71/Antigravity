import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Zap, Smartphone, Globe } from 'lucide-react';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
    {
        icon: <Layout size={32} />,
        title: "Strategic Design",
        desc: "We build layouts that guide the eye and drive action."
    },
    {
        icon: <Zap size={32} />,
        title: "High Performance",
        desc: "Optimized for speed, ensuring instant load times."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Responsive",
        desc: "Flawless experience on every device size."
    },
    {
        icon: <Globe size={32} />,
        title: "Global Reach",
        desc: "Scalable solutions ready for international markets."
    }
];

const Features = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all" // Prevent stuck styles
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="features-section" id="work" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Crafted for Impact</h2>
                    <p className="section-subtitle">Our core principles guide every pixel.</p>
                </div>

                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div
                            className="feature-card"
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
