import React, { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      client: "SANRAL",
      mainContractor: "Rainbow Civil",
      subContractor: "Stanhole Trading and Projects",
      contractName:
        "The routine Road Maintenance of National route R520-1 from 0.00KM to 43.3KM",
      term: "Ongoing",
      contact: {
        person: "Tshepang Mocwaledi",
        phone: "(082) 055-5005",
        email: "Tshepang@rics.co.za",
      },
    },
    {
      client: "EXXARO Grootegeluk coal mine",
      mainContractor: "Elsewedy & Edison (Pty) Ltd",
      subContractor: "Stanhole Trading and Projects",
      contractName: "Electrical PV Project / Cables Scope",
      term: "Ongoing",
      contact: {
        person: "Tamer Taha",
        phone: "07 66 88 5111",
        email: "tamer.ahmed@elsewedy.com",
      },
    },
    {
      client: "Afrisam",
      mainContractor: "Stanhole Trading and Projects",
      contractName:
        "Electrical plant supply, maintenance and new installation, Plant Cleaning, Aircon Services and repairs, PLC instrumentation, Supply",
      term: "Vendor Number",
      contact: {
        person: "Raymond Ledwaba",
        phone: "081 770-9834",
        email: "raymond.ledwaba@za.afrisam.com",
      },
    },
    {
      client: "EWC (Ekurhuleni West TVET College)",
      mainContractor: "SEGERU",
      subContractor: "Stanhole Trading and Projects",
      contractName: "Classroom Renovations",
      contact: {
        person: "Tebogo Maphella",
        phone: "+27 (76) 309-3929",
        email: "maphalletd@gmail.com",
      },
    },
    {
      client: "Exxaro Grootegeluk coal mine",
      mainContractor: "Zamani Engineering",
      subContractor: "Stanhole Trading and Projects",
      contractName: "Office Containers electrical wiring and COC",
      contact: {
        person: "Siyabonga Khumalo",
        phone: "+27 (81) 806-7427",
        email: "nathi@zamaniengineering.co.za",
      },
    },
    {
      client: "Sachar Building Construction",
      subContractor: "Stanhole Trading and Projects",
      contractName: "Home automation and electrical wiring and COC",
      contact: {
        person: "Godwin Rasekganya",
        phone: "+27 (79) 694-6381",
        email: "godthabo@gmail.com",
      },
    },
    {
      client: "Witkop Fluorspar Mine (Olifantsfontein Quarry)",
      mainContractor: "Stanhole Trading and Projects",
      contractName:
        "Electrical plant supply, maintenance and new installation, PLC and instrumentation",
      term: "Vendor Number",
      contact: {
        person: "Norman",
        phone: "(081) 422-1014",
        email: "norman@sakg.co.za",
      },
    },
    {
      client: "CSI Projects Rotek Eskom (Thepa Projects)",
      contractName: "Re-construction / Renovations of a Tribal Hall",
      term: "Ongoing",
      contact: {
        person: "Tebogo Seakamela",
        phone: "066 295 5493",
        email: "tseakamela84@gmail.com",
      },
    },
    {
      client: "Gauteng Provincial Government (Dept of Health, Education, Social, etc.)",
      mainContractor: "Stanhole Trading and Projects",
      contractName: "Supply",
      term: "Ongoing",
      contact: {
        person: "Livhuwani Nephalama",
        phone: "011 227 9000",
        email: "Livhuwani.Nephalama@gauteng.gov.za",
      },
    },
  ];

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".project-card.animate-fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Our Project References</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card animate-fade-up">
              <h3>{proj.client}</h3>
              {proj.mainContractor && (
                <p>
                  <strong>Main Contractor:</strong> {proj.mainContractor}
                </p>
              )}
              {proj.subContractor && (
                <p>
                  <strong>Sub Contractor:</strong> {proj.subContractor}
                </p>
              )}
              <p>
                <strong>Contract:</strong> {proj.contractName}
              </p>
              {/*{proj.term && (
                <p>
                  <strong>Term:</strong> {proj.term}
                </p>
              )}
              <div className="project-contact">
                <p>
                  <strong>Contact Person:</strong> {proj.contact.person}
                </p>
                <p>
                  <strong>Phone:</strong> {proj.contact.phone}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${proj.contact.email}`}>
                    {proj.contact.email}
                  </a>
                </p>
              </div>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
