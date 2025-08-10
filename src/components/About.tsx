export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Python", "Node.js", "Git", "Tailwind CSS"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2>About Me</h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
            I'm a passionate student developer who loves creating digital experiences 
            and solving complex problems through code.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3>My Story</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Currently studying at Greenhill School, I'm deeply passionate about technology 
              and its potential to make a positive impact. I love building projects that combine 
              creativity with functionality.
            </p>
            <p style={{ color: '#6b7280' }}>
              When I'm not coding, you can find me exploring new technologies, 
              working on personal projects, or collaborating with fellow developers 
              to create something meaningful.
            </p>
          </div>

          <div className="card">
            <h3>Skills & Technologies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: '#f3f4f6',
                    color: '#374151',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}