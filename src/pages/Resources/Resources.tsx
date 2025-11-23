import React from 'react';
import resourceData from '../../data/resourceData';
import { Card } from '../../Components/Card';

export const Resources: React.FC = () => {
  return (
    <div>
      <h1>Resources</h1>
      <div style={{ display: 'grid', gap: 12 }}>
        {resourceData.map(r => (
          <Card key={r.title} title={r.title} content={
            <>
              <p>{r.summary}</p>
              <a href={r.link} target="_blank" rel="noreferrer">Open</a>
            </>
          } />
        ))}
      </div>
    </div>
  );
};
