import React from 'react';
import { Card } from '../Card';
import { Img } from '../Image';
import { Label } from '../Label';

export interface SkillCardProps {
  name: string;
  description?: string;
  image: string;
  link: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Card backgroundColor="#ffffff" disabled={false}>
        <div
          style={{
            padding: '2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            minHeight: '120px',
            transition: 'background-color 0.2s ease',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor =
              '#f5f5f5';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor =
              'transparent';
          }}
        >
          {/* Icon */}
          <Img src={image} alt={name} width="64px" height="64px" />

          {/* Label */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              marginTop: '4px',
            }}
          >
            <Label text={name} color="#333" />
          </div>
        </div>
      </Card>
    </a>
  );
};
