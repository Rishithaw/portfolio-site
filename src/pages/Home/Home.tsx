import React from "react";
import { HeroImage } from "../../Components/HeroImage";
import { Card } from "../../Components/Card";
import { Img } from "../../Components/Image";
import { Text } from "../../Components/Text";
import { Label } from "../../Components/Label";
import profilePic from "../../assets/Profile.jpg";
import { education } from "../../data/educationData";

export const Home: React.FC = () => {
  return (
    <div>

      {/* 🔵 HERO SECTION */}
      <HeroImage
        backgroundImage="/banner.jpg" // add a banner to public/
        title="Hi, I'm Rishitha 👋"
        subtitle="Software Developer • Designer • Learner"
        disabled={false}
      />

      {/* 🔵 ABOUT ME */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ marginBottom: "10px" }}>
          <Img
            src={profilePic}
            alt="Rishitha"
            width="80px"
            height="80px"
            disabled={false}
          />
        </div>

        {/* About text */}
        <Card backgroundColor="#ffffff" disabled={false}>
          <>
            <Label text="About Me" color="#007bff" />
            <Text
              content="I Full Stack Web Development student with strong technical foundation in JavaScript, React, Java and database management,
              complemented by hands-on experience building real-world applications. Proven ability to deliver complete solutions from concept to
              deployment, including API integration, responsive web design and database architecture. Strong problem-solving skills demonstrated
              through implementing complex algorithms and troubleshooting application issues. Excellent communication and teamwork abilities
              developed through collaborative work environments. Eager to contribute technical skills while learning from experienced developers
              in a dynamic co-op setting."
              size="16px"
              color="#333"
            />
          </>
        </Card>
      </div>

      {/* 🔵 EDUCATION */}
      <div style={{ margin: "60px 40px" }}>
        <Label text="Education" color="#007bff" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginTop: "25px",
          }}
        >
          {education.map((edu, index) => (
            <Card
              key={index}
              backgroundColor="#ffffff"
              disabled={false}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                {/* Logo */}
                <Img
                  src={edu.image}
                  alt={edu.school}
                  width="110px"
                  height="110px"
                />

                {/* Title */}
                <Label
                  text={edu.school}
                  color="#222"
                />

                {/* Program */}
                <Text
                  content={edu.program}
                  size="15px"
                  color="#555"
                />

                {/* Year */}
                <Text
                  content={edu.year}
                  size="13px"
                  color="#777"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;