import React from "react";
import { Card } from "../Card";
import { Img } from "../Image";
import { Label } from "../Label";

interface ToolCardProps {
  name: string;
  image: string;
  link: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ name, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card backgroundColor="#ffffff" disabled={false}>
        <div style={{ textAlign: "center" }}>
          <Img src={image} alt={name} width="90px" height="90px" />
          <Label text={name} color="#000000ff" />
        </div>
      </Card>
    </a>
  );
};
