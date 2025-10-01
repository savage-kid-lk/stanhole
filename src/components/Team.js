import React, { useEffect } from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Stanley Maphuti Mashita",
      position: "Director & Chief Operations Officer",
      image: "stanley-mashita.jpg",
      experience: [
        "Exxaro Coal Mine – Electrician/Technician (3 years)",
        "Green Basin Gold - Electrician (8 months)",
        "Xstrata Alloys - Electrician (6 months)",
        "Afrisam – E&I Technician (8 years)"
      ]
    },
    {
      name: "John Tebe Mokoena",
      position: "Professional Engineer (Sub-contractor)",
      image: "john-mokoena.jpg",
      experience: [
        "Professional Engineer since 2003",
        "Extensive project management experience",
        "Specialized in electrical-mechanical systems"
      ]
    }
  ];

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.team-member.animate-fade-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="section team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member animate-fade-up">
              <div className="member-image">
                <div className="image-placeholder" style={{width: '100%', height: '100%', background: 'transparent', color: 'white', border: 'none'}}>
                  👤
                </div>
              </div>
              <div className="member-header">
                <h3>{member.name}</h3>
                <div className="member-position">{member.position}</div>
              </div>
              <div className="member-body">
                <div className="experience-list">
                  <h4>Experience</h4>
                  <ul>
                    {member.experience.map((exp, idx) => (
                      <li key={idx}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
