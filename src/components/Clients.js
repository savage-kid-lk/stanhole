import React, { useEffect } from 'react';

// Import all client logos
import afrisamLogo from "../media/afrisam.webp";
import olifantsfonteinLogo from "../media/sallies.webp";
import mcaLogo from "../media/mca.png";
import limpopoOncologyLogo from "../media/limpopo oncology.avif";
import edzaLogo from "../media/edza.svg";
import gautengGovLogo from "../media/gauteng.png";

// Import placeholder logo
import placeholderLogo from "../media/placeholder.webp";

const Clients = () => {
  const clients = [
    { name: "AFRISAM", logo: afrisamLogo, website: "https://www.afrisam.co.za/", placeholder: "A" },
    { name: "OLIFANTSFONTEIN DOLOMITE MINE", logo: olifantsfonteinLogo, website: "https://sallies.co.za/", placeholder: "ODM" },
    { name: "MCA PROJECTS", logo: mcaLogo, website: "https://mca-groupe.com/en-us", placeholder: "MCA" },
    { name: "LIMPOPO ONCOLOGY CLINIC", logo: limpopoOncologyLogo, website: "https://www.limpopooncologyclinic.com/", placeholder: "LOC" },
    { name: "EDZA HEIGHTS ESTATES", logo: edzaLogo, website: "https://edza.co.za/", placeholder: "EHE" },
    { name: "DEPARTMENT OF GAUTENG", logo: gautengGovLogo, website: "https://www.gauteng.gov.za/", placeholder: "GP-GOV" }
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
