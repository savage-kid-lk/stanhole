import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // WhatsApp from brands
import { faPhone, faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons"; // rest from solid

const Socials = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when user scrolls past hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="socials-container">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+27795022030"
        className="social-icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      {/* Call */}
      <a href="tel:+27837360290 " className="social-icon phone">
        <FontAwesomeIcon icon={faPhone} />
      </a>

      {/* Email */}
      <a href="mailto:info@stanhole.co.za" className="social-icon email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          className="social-icon scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default Socials;
