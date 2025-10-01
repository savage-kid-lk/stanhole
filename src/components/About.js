import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCrosshairs,
    faEye,
    faHandshake,
    faPrayingHands,
    faFistRaised,
    faStar,
    faBalanceScale,
    faGlobe,
    faVenus,
    faBullseye
} from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../media/IMG_5722.jpg";
import missionImage from "../media/IMG_5725.jpg";

const About = () => {
    const values = [
        { icon: faHandshake, name: "Honesty", animation: "float" },
        { icon: faPrayingHands, name: "Respect", animation: "pulse" },
        { icon: faFistRaised, name: "Trust", animation: "bounce" },
        { icon: faStar, name: "Client Satisfaction", animation: "spin-slow" },
        { icon: faBalanceScale, name: "Equal Opportunities", animation: "shake" },
        { icon: faGlobe, name: "Community Involvement", animation: "float" },
        { icon: faVenus, name: "Women Empowerment", animation: "pulse-slow" },
        { icon: faBullseye, name: "Integrity", animation: "rotate-bounce" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Us</h2>

                {/* Introduction */}
                <div className="about-content animate-fade-up">
                    <div className="about-image">
                        <div className="image-placeholder" style={{ height: '500px' }}>
                            <img src={aboutImage} alt="About Us" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>

                    <div className="about-text">
                        <h2>Professional Engineering Solutions</h2>
                        <p>
                            Stanhole Trading and Projects (Pty) Ltd is a 100% black-owned South African company specializing in civil engineering, road construction, and electrical & mechanical services. We deliver turnkey projects, including substations, workshops, classroom renovations, industrial plant installations, and roadworks.
                        </p>
                        <p>
                            Our experienced team operates under ISO 9000 quality standards, ensuring safe, efficient, and cost-effective project execution. We also provide routine maintenance, plant servicing, and technical support for industrial, commercial, residential, and community projects.
                        </p>
                        <p>
                            Committed to integrity, client satisfaction, and community empowerment, we build long-term relationships while contributing to sustainable growth and job creation.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="mission-section animate-fade-up">
                    <div className="left-side">
                        <div className="mission-vision">
                            <div className="mission-box">
                                <div className="mission-icon">
                                    <FontAwesomeIcon icon={faCrosshairs} className="spin-animation" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>
                                    To be a leading provider of civil, electrical, and mechanical services in South Africa, recognized for quality, reliability, and community impact, while fostering sustainable growth and empowering local talent.
                                </p>
                            </div>
                            <div className="vision-box">
                                <div className="vision-icon">
                                    <FontAwesomeIcon icon={faEye} className="blink-animation" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    To deliver efficient, safe, and cost-effective engineering solutions across civil, electrical, and mechanical projects, maintaining high-quality standards, strong client relationships, and a commitment to community development and empowerment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="image-placeholder" style={{ height: '500px' }}>
                            <img src={missionImage} alt="Mission & Vision" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>
                </div>

                {/* Objectives */}
                <div className='objectives-section animate-fade-up'>
                    <h3>Objectives</h3>
                    <ul className="objectives-list">
                        <li>Form strategic alliances to promote company interests.</li>
                        <li>Provide high-quality services while remaining profitable.</li>
                        <li>Build long-term relationships through quality services and employee development.</li>
                        <li>Ensure quality workmanship, compliance, and continuous improvement.</li>
                    </ul>
                </div>

                <div className='goals-section animate-fade-up'>
                    {/* Short-Term Goals */}
                    <div className="short-long-section animate-fade-up">
                        <h3>Short-Term Goals</h3>
                        <ul className="goals-list">
                            <li>Be the first choice for service requirements of clients.</li>
                            <li>Offer services efficiently to inspire client satisfaction.</li>
                            <li>Adapt to changing business requirements and satisfy specialized needs.</li>
                            <li>Offer cost-effective and tailor-made solutions to all clients.</li>
                        </ul>
                    </div>

                    {/* Long-Term Goals */}
                    <div className="short-long-section animate-fade-up">
                        <h3>Long-Term Goals</h3>
                        <ul className="goals-list">
                            <li>Maintain current status and grow the business profitably.</li>
                            <li>Create employment opportunities for South African communities.</li>
                            <li>Ensure compliance with statutory acts, including Employment Equity Act.</li>
                            <li>Promote inclusivity across race, gender, disability, creed, and religion.</li>
                        </ul>
                    </div>
                </div>

                {/* Values */}
                <div className="values-section animate-fade-up" style={{ marginTop: '60px' }}>
                    <h3 style={{ color: '#1F487C', marginBottom: '40px', textAlign: 'center', fontSize: '2rem' }}>
                        Company Values
                    </h3>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className={`value-icon ${value.animation}`}>
                                    <FontAwesomeIcon icon={value.icon} />
                                </div>
                                <h4>{value.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
