import React from 'react';
import { SkillCard } from '../../Components/SkillCard';
import { Card } from '../../Components/Card';
import skills from '../../data/skillData';

export const Skills: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      {/* Heading */}
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#007bff',
          fontSize: '2.5rem',
        }}
      >
        My Tech Stack
      </h1>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            description={skill.description}
            image={skill.image}
            link={skill.link}
          />
        ))}
      </div>

      {/* Services Overview Section */}
      <section style={{ marginTop: '60px' }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            color: '#007bff',
            fontSize: '2rem',
          }}
        >
          What I Can Do for You
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          <Card backgroundColor="#ffffff" disabled={false}>
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '12px' }}>
                Custom Java Applications
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Design and develop full-featured applications with Java,
                including GUI apps using JavaFX.
              </p>
            </div>
          </Card>

          <Card backgroundColor="#ffffff" disabled={false}>
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '12px' }}>
                Database Integration
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Build powerful apps backed by MySQL or PostgreSQL for real-time
                data operations.
              </p>
            </div>
          </Card>

          <Card backgroundColor="#ffffff" disabled={false}>
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '12px' }}>
                UI/UX Prototyping
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Design intuitive interfaces with Figma and flowcharts with
                Draw.io.
              </p>
            </div>
          </Card>

          <Card backgroundColor="#ffffff" disabled={false}>
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '12px' }}>
                Responsive Websites
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Create modern and mobile-friendly web pages using HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
