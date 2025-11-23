import React from 'react';
import { Card } from '../../Components/Card';
import workData from '../../data/workData';

export const Work: React.FC = () => {
  return (
    <div>
      <h1>Work / Course Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
        {workData.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            content={
              <>
                <p>{p.description}</p>
                <p><strong>Tech:</strong> {p.tech.join(', ')}</p>
                <a href={p.link} target="_blank" rel="noreferrer">View Project</a>
              </>
            }
            backgroundColor="#fff"
          />
        ))}
      </div>
    </div>
  );
};