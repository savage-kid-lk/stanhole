import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faMicrochip,
  faCogs,
  faTools,
  faProjectDiagram,
  faChartLine,
  faNetworkWired,
  faBuilding,
  faShieldAlt,
  faLightbulb,
  faPlug,
  faSchool,
  faMountain,
  faIndustry,
  faWarehouse,
  faBuildingColumns,
  faCity,
  faHouse
} from "@fortawesome/free-solid-svg-icons";

// Import service images
import electricalImage from "../media/IMG_5731.jpg";
import plcImage from "../media/IMG_5728.jpg";
import mechanicalImage from "../media/IMG_5726.jpg";
import industrialImage from "../media/IMG_5722.jpg";
import maintenanceImage from "../media/IMG_5725.jpg";
import projectImage from "../media/IMG_5729.jpg";
import consultingImage from "../media/IMG_5721.jpg";
import networkImage from "../media/IMG_5733.jpg";
import substationImage from "../media/IMG_5730.jpg";
import hvacImage from "../media/IMG_5723.jpg";
import electrificationImage from "../media/IMG_5732.jpg";
import metersImage from "../media/IMG_5734.jpg";

const Services = () => {
  const services = [
    {
      icon: faBolt,
      title: "Electrical Installations",
      description: "LV & MV cable installations, terminations, jointing, and complete electrical setups for residential, commercial, and industrial clients.",
      animation: "bounce",
      image: electricalImage
    },
    {
      icon: faMicrochip,
      title: "PLC & SCADA Systems",
      description: "Programming, installation, and maintenance of PLCs, SCADA systems, and components (Siemens, Schneider, Allen Bradley, ABB).",
      animation: "bounce",
      image: plcImage
    },
    {
      icon: faNetworkWired,
      title: "Network Communication & Automation",
      description: "Automation solutions, network communications, sensors, flow meters, and industrial-scale instrumentation.",
      animation: "bounce",
      image: networkImage
    },
    {
      icon: faCogs,
      title: "Mechanical & Plant Maintenance",
      description: "Routine and emergency maintenance for industrial and mechanical equipment including motors, pumps, and plant machinery.",
      animation: "pulse",
      image: mechanicalImage
    },
    {
      icon: faBuilding,
      title: "Substation Construction & Refurbishment",
      description: "Building new substations up to 11kV, refurbishment of MCCs, and installation of substation fencing.",
      animation: "pulse",
      image: substationImage
    },
    {
      icon: faTools,
      title: "Maintenance & Repair",
      description: "Comprehensive repair and upkeep for electrical and mechanical installations, backup generators, and electrical COCs.",
      animation: "pulse",
      image: maintenanceImage
    },
    {
      icon: faProjectDiagram,
      title: "Project Management",
      description: "Complete project oversight from planning, design, implementation, to commissioning and handover.",
      animation: "pulse",
      image: projectImage
    },
    {
      icon: faChartLine,
      title: "Consulting Services",
      description: "Expert consulting on electrical systems, energy efficiency, industrial automation, and mechanical engineering solutions.",
      animation: "pulse",
      image: consultingImage
    },
    {
      icon: faShieldAlt,
      title: "Safety & Compliance",
      description: "Ensuring all installations meet statutory requirements, safety standards, and issuance of single and three-phase COCs.",
      animation: "bounce",
      image: hvacImage
    },
    {
      icon: faLightbulb,
      title: "HVAC & Electrical Workshops",
      description: "Installation, maintenance, and repair of air conditioning systems, and setup of electrical workshops for schools.",
      animation: "bounce",
      image: industrialImage
    },
    {
      icon: faPlug,
      title: "Electrification Projects",
      description: "Rural and urban electrification, including schools, clinics, offices, hospitals, and residential areas.",
      animation: "bounce",
      image: electrificationImage
    },
    {
      icon: faSchool,
      title: "Prepaid & Conventional Meter Connections",
      description: "Connection and maintenance of prepaid and conventional meters, ensuring proper installation and functionality.",
      animation: "bounce",
      image: metersImage
    }
  ];

  const industries = [
    { icon: faMountain, name: "Mining" },
    { icon: faIndustry, name: "Quarries" },
    { icon: faWarehouse, name: "Cement" },
    { icon: faBuildingColumns, name: "Ready Mix" },
    { icon: faCity, name: "Commercial" },
    { icon: faIndustry, name: "Industrial" },
    { icon: faHouse, name: "Residential" }
  ];

  // Duplicate industries array for seamless loop
  const scrollingIndustries = [...industries, ...industries];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.service-card.animate-fade-up, .industries-marquee.animate-fade-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-fade-up">
                <div className={`service-icon ${service.animation}`}>
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="image-placeholder" style={{height: '200px', marginTop: '20px', borderRadius: '5px', overflow: 'hidden'}}>
                  <img src={service.image} alt={service.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
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
                {scrollingIndustries.map((industry, index) => (
                  <div key={index} className="industry-item">
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
