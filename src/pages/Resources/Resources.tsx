import React from 'react';
import resourceData from '../../data/resourceData';
import { Card } from '../../Components/Card';
import { Img } from '../../Components/Image';

export const Resources: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#007bff',
          fontSize: '2.5rem',
        }}
      >
        Resources
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {resourceData.map(r => (
          <Card key={r.title} backgroundColor="#ffffff" disabled={false}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '10px',
              }}
            >
              {/* Image */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                }}
              >
                <Img
                  {...({
                    src: r.image,
                    alt: r.title,
                    width: '80px',
                    height: '80px',
                    style: { objectFit: 'contain' },
                  } as any)}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  color: '#1a1a1a',
                  fontSize: '20px',
                  margin: '0',
                  textAlign: 'center',
                }}
              >
                {r.title}
              </h3>

              {/* Summary */}
              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                  margin: '0',
                  textAlign: 'center',
                }}
              >
                {r.summary}
              </p>

              {/* Link */}
              <div style={{ textAlign: 'center', marginTop: '8px' }}>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#007bff',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '16px',
                  }}
                >
                  Open Resource →
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
