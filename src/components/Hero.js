import React from "react";
import heroImage1 from "../media/IMG_5721.jpg";
import heroImage2 from "../media/IMG_5730.jpg";
import heroImage3 from "../media/IMG_5726.jpg";

const slides = [
  {
    title: "STANHOLE TRADING & PROJECTS",
    subtitle: "Leading Electrical & Mechanical Engineering Solutions",
    info: "REG NO: 2014/078224/07 | VAT: 4800292320",
    image: heroImage1,
  },
  {
    title: "Our Mission",
    subtitle: "Delivering high-quality electrical & mechanical services",
    info: "Professionalism • Integrity • Client Satisfaction",
    image: heroImage2,
  },
  {
    title: "Our Vision",
    subtitle: "To become a premier provider of energy & engineering solutions",
    info: "Exceeding expectations on every project",
    image: heroImage3,
  },
];

const Hero = () => {
  const totalSlides = slides.length;
  const slideDuration = 12;
  return (
    <section id="home" className="hero">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={`slide-${i}`}
          className="hero-slide"
          style={{ animationDelay: `${i * slideDuration}s` }}
        >
          <img src={s.image} alt={s.title} className="hero-slide-img" />
        </div>
      ))}

      <div className="hero-overlay" />

      {/* Text */}
      <div className="container">
        {slides.map((s, i) => (
          <div
            key={`content-${i}`}
            className="hero-content"
            style={{ animationDelay: `${i * slideDuration}s` }}
          >
            <h1>{s.title}</h1>
            <p className="hero-sub">{s.subtitle}</p>
            <p className="hero-info">{s.info}</p>
            <div className="hero-buttons">
              <a href="#services" className="btn">Our Services</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
