import React from "react";
import { Card } from "../Card";
import { Img } from "../Image";
import { Text } from "../Text";
import { Label } from "../Label";

export interface SkillCardProps {
  name: string;
  description?: string;
  image: string;
  link: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  description,
  image,
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
      <Card backgroundColor="#f5f1f1ff" disabled={false}>
        <div style={{ textAlign: "center" }}>
          <Img src={image} alt={name} width="80px" height="80px" />

          <Label text={name} color="#00aaff" />

          {description && (
            <Text content={description} size="14px" color="#ccc" />
          )}
        </div>
      </Card>
    </a>
  );
};
