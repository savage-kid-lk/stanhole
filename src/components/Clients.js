import React, { useEffect } from 'react';

// Import all client logos
import afrisamLogo from "../media/afrisam.webp";
import olifantsfonteinLogo from "../media/sallies.webp";
import mcaLogo from "../media/mca.png";
import limpopoOncologyLogo from "../media/limpopo oncology.avif";
import edzaLogo from "../media/edza.svg";
import gautengGovLogo from "../media/gauteng.png";
import blueHillsLogo from "../media/bluw hills.jpeg";
import woodhillLogo from "../media/woodhill.webp";
import aloeLogo from "../media/aloe.webp";
import thornHillLogog from "../media/thornhill.png";

// Import placeholder logo
import placeholderLogo from "../media/placeholder.webp";

const Clients = () => {
  const clients = [
    { name: "AFRISAM", logo: afrisamLogo, placeholder: "A" },
    { name: "OLIFANTSFONTEIN DOLOMITE MINE", logo: olifantsfonteinLogo, placeholder: "ODM" },
    { name: "MCA PROJECTS", logo: mcaLogo, placeholder: "MCA" },
    { name: "LIMPOPO ONCOLOGY CLINIC", logo: limpopoOncologyLogo, placeholder: "LOC" },
    { name: "EDZA HEIGHTS ESTATES", logo: edzaLogo, placeholder: "EHE" },
    { name: "DEPARTMENT OF GAUTENG", logo: gautengGovLogo, placeholder: "GP-GOV" },
    { name: "BLUE HILLS EQUESTRIAN ESTATE", logo: blueHillsLogo, placeholder: "GP-GOV" },
    { name: "WOODHILL ESTATE", logo: woodhillLogo, placeholder: "LOGO"},
    { name: "THE ALOE ESTATE", logo: aloeLogo, placeholder: "LOGO"},
    { name: "THORNHILL ESTATE", logo: thornHillLogog, placeholder: "LOGO"}
    
  ];

  // Duplicate the clients array for seamless looping
  const scrollingClients = [...clients, ...clients];

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.clients-marquee.animate-fade-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className="section clients">
      <div className="container">
        <h2 className="section-title">Our Valued Clients</h2>
        <div className="clients-marquee animate-fade-up">
          <div className="clients-track-wrapper">
            <div className="clients-track">
              {scrollingClients.map((client, index) => (
                <div key={index} className="client-logo-card">
                  <a href={client.website} target="_blank" rel="noopener noreferrer">
                    <img
                      src={client.logo || placeholderLogo}
                      alt={`${client.name} Logo`}
                      className="client-logo"
                      onError={(e) => {
                        e.target.src = placeholderLogo;
                        e.target.alt = "Logo Placeholder";
                      }}
                    />
                  </a>
                  <div className="client-name">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
