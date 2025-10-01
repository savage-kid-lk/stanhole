import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faRoad,
  faBuilding,
  faCogs,
  faTools,
  faPlug,
  faProjectDiagram,
  faShieldAlt,
  faNetworkWired,
  faSchool,
  faMicrochip,
  faMountain,
  faIndustry,
  faHome,
  faHardHat
} from "@fortawesome/free-solid-svg-icons";

// Import service images (keeps your existing imports)
import electricalImage from "../media/WhatsApp Image 2025-09-30 at 17.05.00_16122964.jpg";
import plcImage from "../media/IMG_5728.jpg";
import mechanicalImage from "../media/solar.jpg";
import maintenanceImage from "../media/WhatsApp Image 2025-09-30 at 16.58.45_0eec0f86.jpg";
import projectImage from "../media/road work.jpg";
import consultingImage from "../media/IMG_5721.jpg";
import substationImage from "../media/WhatsApp Image 2025-09-30 at 16.58.43_288e6706.jpg";
import electrificationImage from "../media/WhatsApp Image 2025-09-30 at 17.16.04_f6d0a942.jpg";
import metersImage from "../media/WhatsApp Image 2025-09-30 at 16.58.46_773d27fc.jpg";

const Services = () => {
  // Consolidated categories (fewer cards — each aggregates everything from the profile)
  const services = [
    {
      icon: faBolt,
      title: "Electrical & Instrumentation",
      // include every electrical-related item from the profile in summary form
      description:
        "All LV & MV electrical works: cable installations, termination & jointing, transformer service & installation, switchgear, MCC refurbishment, substation construction & commissioning (up to 11kV), PLC maintenance, VSDs & soft starters, SCADA/PLC programming and components (Siemens, Schneider, Allen Bradley, ABB). Includes electrical COC issuance and backup power (generators) work.",
      image: electricalImage,
      animation: "bounce"
    },
    {
      icon: faRoad,
      title: "Roadworks & Civil Engineering",
      description:
        "Road construction, routine road maintenance and rehabilitation works, civil engineering and infrastructure projects — from routine maintenance contracts to full rehabilitation scopes and small civils (e.g. substation plinths, fencing and site civils).",
      image: projectImage,
      animation: "bounce"
    },
    {
      icon: faBuilding,
      title: "Construction & Installations",
      description:
        "Turnkey construction and small-build projects: building and commissioning substations, electrical workshops, classrooms, offices, and residential or commercial units, including structural renovations, installations, and full project fit-outs for industrial, commercial, and residential estates.",
      image: substationImage,
      animation: "bounce"
    },
    {
      icon: faCogs,
      title: "HVAC &  Solar Plant",
      description:
        "Mechanical supply, installation and plant services: HVAC, Solar, and air-conditioning installation & maintenance, pumps, motors, crushers, vibrating screens, feeders and full solar plant maintenance, cleaning and installation works for mining, quarries and processing solar plants.",
      image: mechanicalImage,
      animation: "bounce"
    },
    {
      icon: faTools,
      title: "Maintenance, Repairs & Refurbishment",
      description:
        "Preventative and reactive maintenance across electrical & mechanical systems: switchgear inspection, MCC refurbishment, transformer maintenance, on-site repairs, generator servicing, plant maintenance and scheduled upkeep for industrial clients (vendor contracts supported).",
      image: maintenanceImage,
      animation: "bounce"
    },
    {
      icon: faPlug,
      title: "Electrification & Metering (Community Projects)",
      description:
        "Rural and urban electrification projects — schools, clinics, offices, hospitals, residential areas and estates. Prepaid & conventional meter connections, meter commissioning and community electrification programmes.",
      image: electrificationImage,
      animation: "bounce"
    },
    {
      icon: faProjectDiagram,
      title: "Project Management & Consulting",
      description:
        "End-to-end project delivery and consultancy: project planning, procurement, implementation, commissioning and handover. Energy efficiency advice, technical consulting and specialised engineering sub-contractor services (Pr.Eng sub-contracting available).",
      image: consultingImage,
      animation: "bounce"
    },
    {
      icon: faNetworkWired,
      title: "Automation & Instrumentation",
      description:
        "Network communications, industrial sensors, flow meters, scales and instrumentation supply & commissioning for process control and automation solutions.",
      image: plcImage,
      animation: "bounce"
    },
    {
      icon: faSchool,
      title: "Facilities & Institutional Services",
      description:
        "Electrical workshops for schools, classroom renovations (electrical scope), institutional electrification and facilities maintenance for government & educational clients.",
      image: metersImage,
      animation: "bounce"
    }
  ];

  // Industries you serve (kept concise) - Updated icons to be more relevant
  const industries = [
    { icon: faHardHat, name: "Mining" },
    { icon: faMountain, name: "Quarries" },
    { icon: faIndustry, name: "Cement & Ready Mix" },
    { icon: faBuilding, name: "Industrial & Commercial" },
    { icon: faHome, name: "Residential & Estates" }
  ];
  const scrollingIndustries = [...industries, ...industries];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".service-card.animate-fade-up, .industries-marquee.animate-fade-up")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card animate-fade-up">
                <div className={`service-icon ${s.animation}`} aria-hidden>
                  <FontAwesomeIcon icon={s.icon} size="lg" />
                </div>
                <h3>{s.title}</h3>
                <p style={{ whiteSpace: "pre-wrap" }}>{s.description}</p>

                {s.image && (
                  <div
                    className="image-placeholder"
                    style={{ height: "160px", marginTop: "16px", borderRadius: "6px", overflow: "hidden" }}
                  >
                    <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section industries">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-marquee animate-fade-up">
            <div className="industries-track-wrapper">
              <div className="industries-track">
                {scrollingIndustries.map((industry, idx) => (
                  <div key={idx} className="industry-item">
                    <div className="industry-icon">
                      <FontAwesomeIcon icon={industry.icon} />
                    </div>
                    <div className="industry-name">{industry.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;