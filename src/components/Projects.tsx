import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ShelterAid",
      description: "A platform connecting volunteers with local shelters to help those in need.",
      image: "/shelteraid-check.webp",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "ThinkClear",
      description: "Mental health awareness platform with resources and support tools.",
      image: "/thinkclear-frames.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Rally Achievement",
      description: "Sports achievement tracking and community platform.",
      image: "/rally-trophy.jpg",
      tech: ["React", "Firebase", "CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2>Featured Projects</h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
            Here are some of the projects I've been working on
          </p>
        </div>

        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div style={{ 
                width: '100%', 
                height: '200px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <h3>{project.title}</h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      background: '#dbeafe',
                      color: '#1e40af',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href={project.link} className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}