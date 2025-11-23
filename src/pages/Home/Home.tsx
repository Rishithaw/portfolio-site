import React from 'react';
import { HeroImage } from '../../Components/HeroImage';
import { Text } from '../../Components/Text';
import { Card } from '../../Components/Card';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroImage
        backgroundImage="/Banner.jpeg"
        title="Rishitha Wickramasinghe"
        subtitle="Business Systems Development — Portfolio"
      />

      <section style={{ marginTop: 24 }}>
        <h2>About me</h2>
        <Text content="I build web apps using React, TypeScript and create reusable component libraries. This portfolio showcases my course work." />
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Featured Project</h2>
        <Card title="Component Library" content="React + Storybook UI component library used across projects." />
      </section>
    </div>
  );
};