import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import './SelectedWork.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Lumina Interface",
        category: "UI/UX Design",
        year: "2025",
        color: "var(--project-bg-1)" // Placeholder for image background
    },
    {
        title: "Apex FinTech",
        category: "Web Development",
        year: "2024",
        color: "var(--project-bg-2)"
    },
    {
        title: "Mono Brand Identity",
        category: "Branding",
        year: "2024",
        color: "var(--project-bg-3)"
    }
];

const SelectedWork = () => {
    const sectionRef = useRef(null);
    const workRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            workRefs.current.forEach((el, index) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: index * 0.1,
                    clearProps: "all"
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="work-section" id="work" ref={sectionRef}>
            <div className="container">
                <div className="work-header">
                    <h2 className="section-title">Selected Work</h2>
                    <button className="view-all-btn">View All Projects</button>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div
                            className="project-item"
                            key={index}
                            ref={el => workRefs.current[index] = el}
                        >
                            <div className="project-image" style={{ backgroundColor: project.color }}>
                                <div className="overlay">
                                    <span className="view-project">View Case Study</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-left">
                                    <h3>{project.title}</h3>
                                    <span className="category">{project.category}</span>
                                </div>
                                <div className="project-right">
                                    <span className="year">{project.year}</span>
                                    <ArrowUpRight size={20} className="arrow-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
