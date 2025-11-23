import React from "react";
import { SkillCard } from "../../Components/SkillCard";
import { skills } from "../../data/skillData";

export const Skills: React.FC = () => {
  return (
    <div style={{
      padding: "40px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px"
    }}>
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
  );
};
